/**
 * Turns the supplied NS monogram into the transparent asset the header uses.
 *
 *   node scripts/prepare-logo.mjs <path-to-mark.png>
 *
 * The favicon generator's output is an RGBA PNG whose alpha channel is fully
 * opaque over a near-white ground, so it cannot be dropped onto the site's
 * off-white canvas as-is. This keys that ground out with a soft alpha ramp, so
 * the anti-aliased curves of the S don't keep a white fringe, then trims to the
 * ink and writes public/brand/ns-mark.png at 2x header size.
 *
 * Requires sharp (already a devDependency).
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const src = process.argv[2];
if (!src) {
  console.error("usage: node scripts/prepare-logo.mjs <path-to-mark.png>");
  process.exit(1);
}

const OUT = "public/brand";

/** At or above this luminance the pixel is background. */
const WHITE = 246;
/** Below this it is fully opaque; between the two we ramp for a clean edge. */
const SOLID = 225;

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  // Only key near-neutral pixels, so the green and teal in the mark survive.
  if (Math.max(r, g, b) - Math.min(r, g, b) >= 12) continue;

  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  if (lum >= WHITE) {
    data[i + 3] = 0;
  } else if (lum > SOLID) {
    data[i + 3] = Math.round(data[i + 3] * (1 - (lum - SOLID) / (WHITE - SOLID)));
  }
}

await mkdir(OUT, { recursive: true });

const out = await sharp(data, { raw: { width, height, channels } })
  .png()
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/ns-mark.png`);

console.log(`source ${width}x${height} -> ${OUT}/ns-mark.png ${out.width}x${out.height}`);
console.log(`aspect ${(out.width / out.height).toFixed(3)}`);

/*
 * Reversed mark for the navy footer. Just over half the logo is dark navy,
 * which would disappear against a navy ground, so those pixels are flipped to
 * white. The green and teal of the S already read well on navy and are left
 * untouched, which keeps the mark recognisable rather than a flat silhouette.
 */
const rev = Buffer.from(data);
for (let i = 0; i < rev.length; i += channels) {
  if (rev[i + 3] === 0) continue;
  const r = rev[i];
  const g = rev[i + 1];
  const b = rev[i + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  // Dark and blue-leaning: the navy of the N.
  if (lum < 95 && b >= g) {
    rev[i] = 255;
    rev[i + 1] = 255;
    rev[i + 2] = 255;
  }
}

const revOut = await sharp(rev, { raw: { width, height, channels } })
  .png()
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/ns-mark-reversed.png`);

console.log(`wrote ${OUT}/ns-mark-reversed.png ${revOut.width}x${revOut.height}`);

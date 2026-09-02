/**
 * Builds every brand asset from the supplied lockup.
 *
 *   node scripts/prepare-logo.mjs public/log.png
 *
 * The source is a stacked lockup: NS monogram on top, "NEXT STEP ACCOUNTANCY"
 * beneath. At header size the wordmark would render about 5px tall, so only the
 * monogram is used as an image; the wordmark is set in type by the Logo
 * component. Outputs:
 *
 *   public/brand/ns-mark.png           monogram, trimmed
 *   src/app/icon.png                   192px, favicon
 *   src/app/apple-icon.png             180px on white (iOS ignores alpha)
 *   src/app/favicon.ico                16/32/48px
 *   public/brand/icon-192.png, icon-512.png   manifest icons
 *
 * Requires sharp and png-to-ico (both devDependencies).
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { mkdir, writeFile } from "node:fs/promises";

const src = process.argv[2] ?? "public/log.png";
const OUT = "public/brand";
const APP = "src/app";

await mkdir(OUT, { recursive: true });

const meta = await sharp(src).metadata();

/** Row-scan for bands of ink, so the monogram is found rather than hard-coded. */
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const rowHasInk = [];
for (let y = 0; y < height; y++) {
  let ink = 0;
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    if (data[i + 3] > 40 && lum < 235) ink++;
  }
  rowHasInk.push(ink > 0);
}
const bands = [];
let start = null;
rowHasInk.forEach((hasInk, y) => {
  if (hasInk && start === null) start = y;
  if (!hasInk && start !== null) { bands.push([start, y - 1]); start = null; }
});
if (start !== null) bands.push([start, height - 1]);
if (!bands.length) throw new Error("no ink found in source");

const [markTop, markBottom] = bands[0];
const pad = 4;
const top = Math.max(0, markTop - pad);
const markHeight = Math.min(height - top, markBottom - markTop + 1 + pad * 2);

// Two passes: sharp reorders extract and trim internally, so chaining them
// on one pipeline gives "bad extract area".
const cropped = await sharp(src)
  .extract({ left: 0, top, width, height: markHeight })
  .png()
  .toBuffer();

const mark = await sharp(cropped)
  .trim({ threshold: 10 })
  .png({ compressionLevel: 9 })
  .toBuffer({ resolveWithObject: true });

await writeFile(`${OUT}/ns-mark.png`, mark.data);

/* Icons, all from the same monogram so the favicon matches the header. */
const clear = { r: 0, g: 0, b: 0, alpha: 0 };

/** Square icon: mark scaled to 82% of the box, centred, on the given ground. */
async function square(size, background = clear) {
  const inner = Math.round(size * 0.82);
  const fitted = await sharp(mark.data)
    .resize({ width: inner, height: inner, fit: "inside" })
    .toBuffer({ resolveWithObject: true });
  const dx = size - fitted.info.width;
  const dy = size - fitted.info.height;
  return sharp(fitted.data)
    .extend({
      left: Math.floor(dx / 2),
      right: Math.ceil(dx / 2),
      top: Math.floor(dy / 2),
      bottom: Math.ceil(dy / 2),
      background,
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

await writeFile(`${APP}/icon.png`, await square(192));
await writeFile(`${OUT}/icon-192.png`, await square(192));
await writeFile(`${OUT}/icon-512.png`, await square(512));
// iOS composites Apple touch icons on black, so give this one a white ground.
await writeFile(`${APP}/apple-icon.png`, await square(180, { r: 255, g: 255, b: 255, alpha: 1 }));

await writeFile(`${APP}/favicon.ico`, await pngToIco(await Promise.all([16, 32, 48].map((s) => square(s)))));

console.log(`source ${meta.width}x${meta.height}, ink bands: ${bands.map(([a, b]) => `${a}-${b}`).join(", ")}`);
console.log(`mark ${mark.info.width}x${mark.info.height} (aspect ${(mark.info.width / mark.info.height).toFixed(3)})`);
console.log("wrote mark, icon.png, apple-icon.png, favicon.ico, manifest icons");

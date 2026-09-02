/**
 * Single source of truth for site copy.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │ Company identity, client count and the savings figure are confirmed.  │
 * │ Still outstanding: AAT licence number, real testimonials, and the      │
 * │ claims marked for the client to confirm (reply time, software cost,    │
 * │ monthly plan terms, VAT treatment).                                    │
 * └───────────────────────────────────────────────────────────────────────┘
 */

export const site = {
  name: 'Next Step Accountancy',
  shortName: 'Next Step',
  tagline: 'Trusted partners. Smart advice. Better decisions.',
  strapline: 'Accounts · Taxation · Advisory',

  // Confirmed against Companies House, 27 Aug 2026.
  // Note: the registered name is one word ("Nextstep"); the brand is two.
  legalName: "Nextstep Accountancy Limited",
  companyNumber: "15202718",
  registeredIn: "England & Wales",
  // Registered office, reproduced exactly as registered. This is a residential
  // address — label it "Registered office", never present it as a visitor office.
  registeredOffice: "Flat 24 Demontfort House Shirrall Grove, Kingshurst, Solihull, England, B37 6JR",

  // Confirmed 2 Sep 2026 — matches the domain on the client's mailbox.
  url: 'https://www.nextstepaccountancy.co.uk',

  phone: '+44 7887 158992',
  phoneHref: 'tel:+447887158992',
  email: 'info@nextstepaccountancy.co.uk',

  // Confirmed by the client: AAT licensed, so AAT is also the AML supervisor.
  // Never describe the firm as "chartered" — that is a different qualification.
  credential: 'AAT Licensed Accountant',
  professionalBody: 'Association of Accounting Technicians (AAT)',
  // TODO(client): AAT requires licensed members to show their licence number.
  // The regulatory line renders without it until this is filled in.
  licenceNumber: '',

  // Supplied by the client, 2 Sep 2026.
  clients: '600+',
  savingRange: '50%',
} as const;

/** Set to false until the client portal exists — hides every portal link. */
export const portalEnabled = false;
export const portalUrl = '';

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/why-us', label: 'Why us' },
  { href: '/software', label: 'Software' },
  { href: '/about', label: 'About' },
] as const;

/* ---------------------------------- pricing --------------------------------- */

export const monthlyPlan = {
  name: 'Complete Monthly',
  price: 75,
  unit: 'per month',
  annual: 900,
  suitedTo: 'Small limited companies with around 100 bank transactions a month',
  includes: [
    'Annual accounts and CT600',
    'Bookkeeping and VAT returns',
    'Payroll for up to two employees',
    'Confirmation statement',
    'Self assessment tax return for directors',
  ],
};

export type PriceGroup = 'limited' | 'sole' | 'personal' | 'addon';

export type ServicePrice = {
  name: string;
  variant?: string;
  price: number;
  unit: string;
  from?: boolean;
  group: PriceGroup;
  detail: string;
};

export const servicePrices: ServicePrice[] = [
  {
    name: 'Annual Accounts & CT600',
    variant: 'VAT registered',
    price: 900,
    unit: 'per year',
    group: 'limited',
    detail: 'Statutory accounts and corporation tax return for a VAT registered limited company.',
  },
  {
    name: 'Annual Accounts & CT600',
    variant: 'Non-VAT registered',
    price: 599,
    unit: 'per year',
    group: 'limited',
    detail:
      'Statutory accounts and corporation tax return where the company is not VAT registered.',
  },
  {
    name: 'Dormant Accounts',
    price: 49,
    unit: 'per year',
    group: 'limited',
    detail: 'Dormant company accounts prepared and filed at Companies House.',
  },
  {
    name: 'Sole Trader Accounts',
    price: 299,
    unit: 'per year',
    group: 'sole',
    detail: 'Accounts production for sole traders, prepared from your bank transactions.',
  },
  {
    name: 'Self Assessment Tax Return',
    price: 99,
    from: true,
    unit: 'per return',
    group: 'personal',
    detail: 'Completion and filing of your personal self assessment return with HMRC.',
  },
  {
    name: 'Bookkeeping & VAT Return',
    price: 60,
    unit: 'per return',
    group: 'addon',
    detail: 'Small business bookkeeping and a Making Tax Digital compliant VAT return.',
  },
  {
    name: 'Confirmation Statement',
    price: 49,
    unit: 'per year',
    group: 'addon',
    detail: 'Annual Companies House confirmation statement, prepared and filed for you.',
  },
  {
    name: 'Payroll',
    price: 5,
    unit: 'per payslip',
    group: 'addon',
    detail: 'Payslips, RTI submissions to HMRC and year-end reporting.',
  },
];

export const priceGroups: { id: PriceGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'limited', label: 'Limited company' },
  { id: 'sole', label: 'Sole trader' },
  { id: 'personal', label: 'Personal tax' },
  { id: 'addon', label: 'Add-ons' },
];

export const packageIncludes = [
  'Accounts preparation & filing',
  'Tax return preparation & filing',
  'A named AAT Licensed Accountant',
  'Unlimited advice & support',
  'Timely replies to queries',
  'Proactive tax planning',
  'All tax allowances claimed',
  'Deadline reminders',
  'Secure document sharing',
  'Fixed fees, quoted upfront',
];

/* ---------------------------------- services -------------------------------- */

export const services = [
  {
    slug: 'limited-companies',
    name: 'Limited Companies',
    blurb: 'Statutory accounts and corporation tax, handled end to end.',
    items: [
      'Statutory accounts production',
      'Corporation tax return — CT600',
      'Companies House filing',
      'Director remuneration planning',
    ],
  },
  {
    slug: 'sole-traders',
    name: 'Sole Traders',
    blurb: 'Accounts prepared straight from your bank transactions.',
    items: ['Accounts production', 'Self assessment tax return', 'Expense and allowance review'],
  },
  {
    slug: 'partnerships',
    name: 'Partnerships',
    blurb: "Partnership accounts plus each partner's return.",
    items: [
      'Accounts production',
      'Partnership tax return — SA800',
      'Profit allocation statements',
      'Partner self assessments',
    ],
  },
  {
    slug: 'self-assessment',
    name: 'Personal Self Assessment',
    blurb: 'Rental income, capital gains, dividends and foreign income.',
    items: [
      'Completion & filing of self assessment',
      'Rental & holiday lets',
      'Capital gains tax',
      'Interest, dividends & foreign income',
    ],
  },
  {
    slug: 'vat',
    name: 'VAT & Bookkeeping',
    blurb: 'MTD-compliant returns without expensive software.',
    items: [
      'Quarterly VAT return filing',
      'Making Tax Digital bridging',
      'Scheme selection advice',
      'Registration & deregistration',
    ],
  },
  {
    slug: 'payroll',
    name: 'Payroll',
    blurb: 'Payslips, RTI and year end, from £5 a payslip.',
    items: [
      'Monthly or weekly payslips',
      'RTI submissions to HMRC',
      'P60s and P45s',
      'Auto-enrolment pension filing',
    ],
  },
];

/* ----------------------------------- why us --------------------------------- */

export const reasons = [
  {
    title: 'Fees that stay well below the high street',
    body: 'We work online, so there is no reception to staff and no high street office to fund. A lean, paperless workflow keeps our costs down and we hand that saving straight to you.',
    stat: site.savingRange,
    statLabel: 'below typical high street fees',
  },
  {
    title: 'An AAT Licensed Accountant who knows your name',
    body: 'You are looked after by one named AAT Licensed Accountant who answers your questions directly and reviews every figure for accuracy before anything is filed.',
  },
  {
    title: 'Ask us anything, as often as you like',
    body: 'Advice and support are included, never metered. Urgent emails are picked up the same day, and we aim to answer everything else within one to two working days.',
    stat: '1–2 days',
    statLabel: 'typical reply time',
  },
  {
    title: 'Smart advice, not just compliance',
    body: 'Filing on time is the baseline. We claim every allowance available to you and advise on how to structure things tax efficiently — often saving more than our fee costs.',
  },
  {
    title: 'No bookkeeping software to buy',
    body: 'FreeAgent, Xero and QuickBooks typically run to £300+ a year. We can build your accounts from your business bank transactions alone. VAT registered? We file to HMRC through our own spreadsheet.',
    stat: '£300+',
    statLabel: 'software cost avoided',
  },
  {
    title: 'Deadlines tracked so you never pay a penalty',
    body: 'Late filing penalties climb into the thousands. We monitor every deadline, send reminders in good time, and pick up date changes from Companies House automatically.',
  },
  {
    title: 'Small business is all we do',
    body: 'We understand what small businesses need and what keeps their owners awake, because that is the only kind of client we take on.',
  },
  {
    title: 'Your information stays private',
    body: 'Everything you share with us stays with us. Sensitive documents move through a secure two-way channel, backed by internal policies that keep your data safe.',
  },
  {
    title: 'Straight talking, in plain English',
    body: 'We are human too, so we write the way we would want to be written to — personable, jargon-free and clear the first time you read it.',
  },
  {
    title: 'Built on relationships that last',
    body: 'Our business depends on clients choosing us again each year. That makes a genuinely good service far more valuable to us than the next sign-up.',
  },
];

export const bonusReason = {
  title: 'Paperless, and better for it',
  body: 'Everything we produce is prepared, stored and filed electronically. That keeps costs down and data secure, and it spares the deforestation, pollution, landfill waste and the chemicals, energy and water that paper and ink consume.',
};

/* ------------------------------------ misc ---------------------------------- */

export const steps = [
  {
    n: '01',
    title: 'Tell us about your business',
    body: 'Send us your business type and what you need filed. We come back with a fixed price — no calls to sit through, no sales pitch.',
  },
  {
    n: '02',
    title: 'Share your bank transactions',
    body: 'Send a bank export securely. There is no bookkeeping software to buy, learn or maintain unless you want to use one.',
  },
  {
    n: '03',
    title: 'Approve, and we file',
    body: 'Your accountant prepares the accounts and return, you approve them, and we file to HMRC and Companies House on your behalf.',
  },
];

export const testimonials = [
  {
    quote:
      "Great company, very helpful and quick to respond to queries. I have used them to produce accounts for my business and self assessment tax returns. They are very professional and competitively priced and I wouldn't hesitate to recommend them.",
    author: 'Small business owner',
    meta: 'Limited company client',
  },
  {
    quote:
      'I was paying my old accountant nearly four times as much for the same filings. The switch took one email and I have had a straight answer to every question since.',
    author: 'Sole trader',
    meta: 'Construction',
  },
  {
    quote:
      'No software to learn, no surprise invoices. I send a bank export once a year and everything else is handled for me.',
    author: 'Contractor',
    meta: 'IT consultancy',
  },
];

export const softwareOptions = [
  {
    name: 'Pandle',
    tag: 'Recommended',
    detail:
      'Free for low transaction volumes and inexpensive above that. Suits low to medium volume businesses.',
  },
  {
    name: 'FreeAgent',
    tag: 'Free for some',
    detail: 'Free for RBS and NatWest business customers. Best for lower transaction volumes.',
  },
  {
    name: 'Xero',
    tag: 'Full featured',
    detail: 'Suits low to high transaction volume businesses.',
  },
  {
    name: 'QuickBooks',
    tag: 'Full featured',
    detail: 'Suits low to high transaction volume businesses.',
  },
];

/**
 * Files live in /public/sheets under URL-safe names; `downloadAs` is what the
 * visitor's browser saves them as.
 */
export const templates = [
  {
    name: 'VAT Registered Limited Companies',
    file: '/sheets/ltd-vat-registered.xlsx',
    downloadAs: 'Next Step Bookkeeping - Ltd Company VAT Registered.xlsx',
  },
  {
    name: 'NO-VAT Limited Companies',
    file: '/sheets/ltd-non-vat.xlsx',
    downloadAs: 'Next Step Bookkeeping - Ltd Company Non-VAT.xlsx',
  },
  {
    name: 'VAT Registered Sole Trader',
    file: '/sheets/sole-trader-vat-registered.xlsx',
    downloadAs: 'Next Step Bookkeeping - Sole Trader VAT Registered.xlsx',
  },
  {
    name: 'NO-VAT Sole Trader',
    file: '/sheets/sole-trader-non-vat.xlsx',
    downloadAs: 'Next Step Bookkeeping - Sole Trader Non-VAT.xlsx',
  },
];

/* ---------------------------------- form data ------------------------------- */

export const businessTypes = [
  'Limited company',
  'Sole trader',
  'Partnership',
  'Individual / self assessment only',
  'Not yet trading',
  'Not sure',
];

export const serviceOptions = [
  'Annual accounts',
  'Corporation tax return',
  'Self assessment',
  'Bookkeeping & VAT',
  'Payroll',
  'Confirmation statement',
  'Complete monthly plan',
];

export const referralSources = [
  'Google search',
  'Recommended by a friend',
  'Social media',
  'Returning client',
  'Other',
];

/**
 * Single source of truth for site copy. Content mirrors taxez.co.uk so the
 * marketing team can edit here without touching layout code.
 */

export const site = {
  name: "taxez",
  legalName: "Richard McIntosh Ltd",
  companyNumber: "SC575928",
  tagline: "The UK's cheapest online accountants",
  url: "https://www.taxez.co.uk",
  loginUrl: "https://manager.brightsg.com/signin",
  fromPrice: 199,
  clients: "2,000+",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/why-us", label: "Why us" },
  { href: "/software", label: "Software" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
] as const;

/* ---------------------------------- pricing --------------------------------- */

export type Tier = {
  price: number;
  band: string;
  short: string;
  note: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  { price: 49, band: "Dormant accounts", short: "Dormant", note: "No trading activity in the year" },
  { price: 199, band: "Turnover under £1,000", short: "< £1k", note: "Just getting started" },
  { price: 299, band: "Turnover £1,000 – £45,000", short: "£1k–45k", note: "Our most popular package", featured: true },
  { price: 349, band: "Turnover £45,000 – £90,000", short: "£45k–90k", note: "Approaching the VAT threshold" },
  { price: 449, band: "Turnover £90,000 – £150,000", short: "£90k–150k", note: "Established and growing" },
  { price: 499, band: "Turnover £150,000 – £250,000", short: "£150k–250k", note: "Multi-employee operations" },
  { price: 599, band: "Turnover £250,000 plus", short: "£250k+", note: "Complex, higher-volume books" },
];

export const packageIncludes = [
  "Accounts preparation & filing",
  "Tax return preparation & filing",
  "Dedicated chartered accountant",
  "Unlimited advice & support",
  "Timely replies to queries",
  "Advice on tax efficiency",
  "All tax allowances claimed",
  "Deadline reminders",
  "Secure document sharing portal",
  "No surprise fees",
];

export const addOns = [
  { name: "Self Assessment", price: "From £59", unit: "per return", detail: "Completion and filing of your personal self assessment tax return." },
  { name: "Payroll", price: "£5", unit: "per payslip", detail: "RTI submissions to HMRC, payslips and year-end reporting." },
  { name: "VAT Returns", price: "£29", unit: "per return", detail: "Making Tax Digital compliant filing — spreadsheet or software." },
  { name: "Confirmation Statement", price: "£39", unit: "per year", detail: "Annual Companies House confirmation statement, filed for you." },
];

/* ---------------------------------- services -------------------------------- */

export const services = [
  {
    slug: "limited-companies",
    name: "Limited Companies",
    blurb: "Statutory accounts and corporation tax, handled end to end.",
    items: ["Statutory accounts production", "Corporation tax return — CT600", "Companies House filing", "Director remuneration planning"],
  },
  {
    slug: "sole-traders",
    name: "Sole Traders",
    blurb: "Accounts prepared straight from your bank transactions.",
    items: ["Accounts production", "Self assessment tax return", "Expense and allowance review", "Class 2 & 4 NIC computation"],
  },
  {
    slug: "partnerships",
    name: "Partnerships",
    blurb: "Partnership accounts plus each partner's return.",
    items: ["Accounts production", "Partnership tax return — SA800", "Profit allocation statements", "Partner self assessments"],
  },
  {
    slug: "self-assessment",
    name: "Personal Self Assessment",
    blurb: "Rental income, capital gains, dividends and foreign income.",
    items: ["Completion & filing of self assessment", "Rental & holiday lets", "Capital gains tax", "Interest, dividends & foreign income"],
  },
  {
    slug: "vat",
    name: "VAT Returns",
    blurb: "MTD-compliant returns without expensive software.",
    items: ["Quarterly VAT return filing", "Making Tax Digital bridging", "Scheme selection advice", "Registration & deregistration"],
  },
  {
    slug: "payroll",
    name: "Payroll",
    blurb: "Payslips, RTI and year end, from £5 a payslip.",
    items: ["Monthly or weekly payslips", "RTI submissions to HMRC", "P60s and P45s", "Auto-enrolment pension filing"],
  },
];

/* ----------------------------------- why us --------------------------------- */

export const reasons = [
  {
    title: "Our prices are the lowest in the UK",
    body: "As an online firm we skip receptionists and expensive high street offices. Lower costs plus an efficient paperless workflow means prices often 75–90% lower than our competitors.",
    stat: "75–90%",
    statLabel: "lower than competitors",
  },
  {
    title: "A dedicated chartered accountant",
    body: "You are allocated your own experienced Chartered Accountant who answers your questions and checks every piece of work for accuracy before it is filed.",
  },
  {
    title: "Unlimited advice and support",
    body: "Timely answers to your queries at no extra cost. We monitor inboxes for urgent emails and reply immediately, and aim to answer everything else within 1–2 working days.",
    stat: "1–2 days",
    statLabel: "typical reply time",
  },
  {
    title: "We make you tax efficient",
    body: "We claim every available allowance and advise on operating as tax efficiently as possible — often saving you more tax than the price of our service.",
  },
  {
    title: "No bookkeeping software required",
    body: "FreeAgent, Xero and QuickBooks typically cost £300+ a year. We produce your accounts from your business bank transactions alone. VAT registered? We file to HMRC via our easy-to-use spreadsheet.",
    stat: "£300+",
    statLabel: "software cost avoided",
  },
  {
    title: "Never pay penalties",
    body: "Late filing penalties run to thousands. We track your deadlines, send reminders well in advance, and our system integrates with Companies House so date changes update automatically.",
  },
  {
    title: "We specialise in small businesses",
    body: "We know what you need and what worries you, because small business accountancy is all we do — across thousands of businesses just like yours.",
  },
  {
    title: "We respect your privacy",
    body: "All information shared with us stays with us. A secure two-way document portal handles sensitive files, backed by internal policies that keep your data safe.",
  },
  {
    title: "We're a friendly bunch",
    body: "We're human too, so we treat clients how we'd want to be treated: personalised, light hearted, and in plain English.",
  },
  {
    title: "You're important to us",
    body: "Our success relies on winning client loyalty year after year. Strong relationships and a great service are essential to us, and our growth is the proof.",
  },
];

export const bonusReason = {
  title: "We're eco-friendly",
  body: "As a paperless practice everything is electronically prepared, stored and filed. That cuts cost and improves security, and it reduces deforestation, pollution, landfill waste and the chemicals, energy and water used to make paper and ink.",
};

/* ------------------------------------ misc ---------------------------------- */

export const steps = [
  { n: "01", title: "Tell us about your business", body: "Send us your business type and turnover through the quote form. We come back with a fixed annual price — no calls, no sales pitch." },
  { n: "02", title: "Send your bank transactions", body: "Share a bank export through the secure portal. No bookkeeping software to buy, learn or maintain." },
  { n: "03", title: "Approve and we file", body: "Your dedicated accountant prepares the accounts and return, you e-sign in the portal, and we file to HMRC and Companies House." },
];

export const testimonials = [
  {
    quote:
      "Great company, very helpful and quick to respond to queries. I have used them to produce accounts for my business and self assessment tax returns. They are very professional and competitively priced and I wouldn't hesitate to recommend them.",
    author: "Small business owner",
    meta: "Limited company client",
  },
  {
    quote:
      "I was paying my old accountant nearly four times as much for the same filings. The switch took one email and I have had a straight answer to every question since.",
    author: "Sole trader",
    meta: "Construction, Glasgow",
  },
  {
    quote:
      "No software to learn, no surprise invoices. I send a bank export once a year and everything else is handled for me.",
    author: "Contractor",
    meta: "IT consultancy",
  },
];

export const faqs = {
  business: [
    {
      q: "Do I need bookkeeping software?",
      a: "No. Unlike most firms we do not require you to buy or use any bookkeeping package. As part of the business package we produce your accounts from your business bank transactions alone — this is our preferred method as it keeps the accounts accurate while saving you both software costs and hours of bookkeeping. If you are VAT registered and would rather not wrestle with software, we can file your VAT information to HMRC through our easy-to-use spreadsheet.",
    },
    {
      q: "What business items can I claim for?",
      a: "Anything incurred wholly and exclusively for the business: stock and materials, business travel and mileage, use of home as office, phone and internet, professional subscriptions, insurance, equipment, software, advertising, accountancy and bank charges. Your dedicated accountant reviews your transactions and prompts you for anything that looks claimable but is missing.",
    },
    {
      q: "How do dividends work?",
      a: "Dividends are paid out of a company's post-tax retained profit, in proportion to shareholdings, and must be supported by a dividend voucher and board minute. They carry no National Insurance, and the first slice of dividend income each year is covered by the dividend allowance. We advise on the salary/dividend split that leaves you most tax efficient.",
    },
    {
      q: "Should I pay myself a salary?",
      a: "For most owner-managed companies, yes — a modest salary is usually corporation tax deductible and can preserve your State Pension record while staying below the point where income tax and National Insurance bite. The optimal figure changes with each year's thresholds, so we calculate it for you as part of the package.",
    },
    {
      q: "What is a UTR number?",
      a: "A Unique Taxpayer Reference is the 10-digit number HMRC uses to identify you or your company for tax. It appears on HMRC correspondence and on your online account. We need it to file on your behalf.",
    },
    {
      q: "What is an Authentication Code?",
      a: "A six-character code issued by Companies House that authorises electronic filing for your company. It is posted to the registered office and can be re-requested online if lost.",
    },
    {
      q: "What is an Authorisation Code?",
      a: "The code HMRC posts to you when an agent requests authority to act on your behalf. Once you pass it to us, we can deal with HMRC directly for the taxes you have authorised.",
    },
    {
      q: "When are my filing & payment deadlines?",
      a: "Company accounts are due at Companies House nine months after your year end. The corporation tax return is due twelve months after the year end, but the tax itself is payable at nine months and one day. Personal self assessment is due by 31 January following the 5 April year end. We track every date for you and send reminders well in advance.",
    },
    {
      q: "What is a Directors Loan Account?",
      a: "A running record of money moving between you and your company outside of salary, dividends and expenses. If you owe the company money at the year end there can be a tax charge, so we monitor the balance and flag it before it becomes expensive.",
    },
  ],
  personal: [
    {
      q: "Do I need to file a self assessment?",
      a: "Generally yes if you were self-employed, a partner in a partnership, a company director with untaxed income, received rental or foreign income, made capital gains, or earned over the High Income Child Benefit threshold. If you are not sure, ask us — we will tell you either way at no cost.",
    },
    {
      q: "What information do you need?",
      a: "Download our Personal Tax Return Checklist. In short: your income sources for the year, any rental or investment income, capital disposals, pension and gift aid contributions, and details of expenses you want claimed.",
    },
    {
      q: "What is a UTR number?",
      a: "Your Unique Taxpayer Reference — the 10-digit number HMRC uses to identify you. It is on any HMRC letter and in your personal tax account.",
    },
    {
      q: "What is an Authorisation Code?",
      a: "The code HMRC posts to you so we can be appointed as your agent. Pass it to us and we can file and speak to HMRC on your behalf.",
    },
    {
      q: "When are my filing & payment deadlines?",
      a: "Online returns and any balancing payment are due by 31 January after the 5 April year end. Payments on account, where they apply, fall on 31 January and 31 July.",
    },
  ],
};

export const softwareOptions = [
  { name: "Pandle", tag: "Recommended", detail: "Free for low transaction volumes and inexpensive above that. Suitable for low to medium volume businesses." },
  { name: "Free agent (RBS / NatWest)", tag: "Free for some", detail: "Free for RBS and NatWest business customers. Suitable for low volume businesses." },
  { name: "Xero", tag: "Full featured", detail: "Suitable for low to high transaction volume businesses." },
  { name: "QuickBooks", tag: "Full featured", detail: "Suitable for low to high transaction volume businesses." },
];

export const templates = [
  "Ltd Co. — Non-VAT Registered",
  "Ltd Co. — VAT Registered",
  "Sole Trader — Non-VAT Registered",
  "Sole Trader — VAT Registered",
];

export const portalPoints = [
  "FREE access to our two-way document sharing portal (provided on sign up)",
  "Automated, quick and easy sign up process",
  "Conveniently e-sign to approve documents",
  "GDPR compliant secure way to share information",
  "Company details and filing deadlines in one place",
];

/* ---------------------------------- form data ------------------------------- */

export const businessTypes = ["Limited company", "Sole trader", "Partnership", "Individual / self assessment only", "Not yet trading", "Not sure"];
export const turnoverBands = ["Dormant", "Under £1,000", "£1,000 – £45,000", "£45,000 – £90,000", "£90,000 – £150,000", "£150,000 – £250,000", "£250,000 plus"];
export const serviceOptions = ["Annual accounts", "Corporation tax return", "Self assessment", "VAT returns", "Payroll", "Confirmation statement", "Bookkeeping advice"];
export const referralSources = ["Google search", "Recommended by a friend", "Social media", "Returning client", "Other"];

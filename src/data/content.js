/**
 * Single source of truth for the page copy.
 * Editing text here changes the site — no component changes needed.
 */

// TODO: point at the real portal URL once that project ships (separate repo).
export const PORTAL_URL = '#customer-login'

export const PHONE = {
  display: '(609) 123-4567',
  href: 'tel:+16091234567',
}

/**
 * Top navigation. Dropdown items under "Loans and Financing" mirror the
 * financing cards below; "Resources" and "Why Us" are placeholders until
 * those pages exist.
 */
export const NAV = [
  {
    label: 'Loans and Financing',
    items: [
      { label: 'Merchant Cash Advance', href: '#merchant-cash-advance' },
      { label: 'Term Loan', href: '#term-loan' },
      { label: 'Equipment Financing', href: '#equipment-financing' },
      { label: 'Home Equity Line of Credit', href: '#home-equity-line-of-credit' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Funding calculator', href: '#calculator' },
      { label: 'Small business blog', href: '#blog' },
      { label: 'FAQs', href: '#faqs' },
    ],
  },
  {
    label: 'Why Us',
    items: [
      { label: 'About FutureCap', href: '#about' },
      { label: 'How it works', href: '#how-it-works' },
    ],
  },
]

export const HERO = {
  headline: "Secure your business's future with FutureCap",
  title: 'Fast business funding when you need it most',
  body: 'Get approved in as little as 4 hours with funding up to $500,000. No collateral required. We advance capital based on your future sales, not your credit score.',
  points: [
    'Apply online in minutes — no lengthy paperwork',
    'Flexible repayment tied to your daily sales',
    'Funding from $5,000 to $500,000',
    'Bad credit? No problem — approval based on revenue',
    'Use funds for any business purpose',
  ],
  linkText: 'See how much you qualify for. It takes less than 2 minutes.',
  ctaText: 'Get Started',
}

export const PRODUCTS = [
  {
    id: 'merchant-cash-advance',
    title: 'Merchant Cash Advance',
    body: 'Get an advance based on your future sales, with flexible repayment tied to your daily card transactions. Fast approval and funding in as little as 24 hours.',
    points: [
      'Fast approval in as little as 24 hours',
      'Flexible repayment tied to your daily sales',
      'No fixed monthly payments or hidden fees',
    ],
  },
  {
    id: 'term-loan',
    title: 'Term Loan',
    body: "Borrow a lump sum and repay it in fixed installments over a set term, with predictable payments that make budgeting simple.",
    points: [
      'Fixed monthly payments',
      'Terms from 6 to 60 months',
      'Funding up to $500,000',
    ],
  },
  {
    id: 'equipment-financing',
    title: 'Equipment Financing',
    body: "Finance new or used equipment for your business without tying up cash flow, using the equipment itself as collateral.",
    points: [
      'Finance up to 100% of equipment cost',
      'The equipment secures the loan — no extra collateral',
      'Preserve cash flow for day-to-day operations',
    ],
  },
  {
    id: 'home-equity-line-of-credit',
    title: 'Home Equity Line of Credit',
    body: "Tap into your home's equity for a flexible line of credit you can draw from as needed, paying interest only on what you use.",
    points: [
      'Draw funds as needed, up to your credit limit',
      'Interest charged only on the amount you use',
      'Competitive rates secured by home equity',
    ],
  },
]

export const STEPS = [
  {
    step: 'Step 1',
    title: 'Pre-qualify online',
    body: 'Click the "Get Started" button, enter some basic business information, and pre-qualify for small business loans online.',
  },
  {
    step: 'Step 2',
    title: 'Approval in less than 2 hours',
    body: 'Once approved, a small business loan advisor will reach out to you with the options you qualify for and help you choose the best business loan or financing product for your situation.',
  },
  {
    step: 'Step 3',
    title: 'Receive same-day funding',
    body: 'Funds are deposited directly into your bank account so you can use your funding immediately. Automatic daily and weekly payment and remittance options are available.',
  },
]

export const REQUIREMENTS = [
  { icon: 'dollar', label: '$15K+ in monthly revenue' },
  { icon: 'briefcase', label: '6+ months in business' },
  { icon: 'chart', label: '500+ FICO score' },
  { icon: 'bank', label: 'Revenue deposited into a business bank account' },
]

export const DEPOSIT_RANGES = [
  'Less than $15,000',
  '$15,000 – $30,000',
  '$30,000 – $75,000',
  '$75,000 – $150,000',
  'More than $150,000',
]

// TODO: replace the placeholder email/address with FutureCap's real details.
export const FOOTER = {
  blurb:
    'FutureCap Funding Group helps small businesses access fast, flexible capital — funding up to $500,000 based on your revenue, not your credit score.',
  email: 'info@futurecapfunding.com',
  address: ['1 Main Street, Suite 200', 'Toms River, NJ 08753'],
  legalLinks: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Use', href: '#terms' },
    { label: 'Disclosures', href: '#disclosures' },
    { label: 'Contact Us', href: '#contact' },
  ],
  // TODO: have counsel review this before launch — it is placeholder wording.
  disclaimer:
    'FutureCap Funding Group provides financing to commercial entities only and does not offer consumer loans. Products, amounts, rates and terms vary by applicant and are subject to underwriting approval; not all applicants will qualify. Approval and funding timeframes are estimates based on typical applications and are not guaranteed. Merchant cash advances are purchases of future receivables, not loans.',
}

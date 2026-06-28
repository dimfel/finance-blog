import { Chapter } from './content.types';

export const statementsChapter: Chapter = {
  id: 'statements',
  order: 3,
  title: 'Reading Financial Statements',
  subtitle: 'The three reports that turn guessing into reading',
  summary: {
    title: 'In this chapter',
    items: [
      'Every public company publishes three statements, and each answers a different question about the business.',
      'The income statement asks "did it make money?", the balance sheet asks "what does it own and owe?", and the cash flow statement asks "where did the cash actually go?"',
      'Cash is not the same as profit, and free cash flow is often the most honest number in the whole report.',
      'You find these statements in the 10-K (annual) and 10-Q (quarterly) filings, free on the SEC EDGAR site or the company\'s investor-relations page.',
      'Read top-down and watch the trend over several years, not a single number in isolation.',
    ],
  },
  blocks: [
    {
      type: 'p',
      text: 'In the last chapter you learned that a stock is ownership in a business. Now we learn to read that business. The three financial statements are how a company tells the world, in numbers, how it is doing. Once you can read them, you stop relying on headlines and start forming your own view. Think of them as three different photographs of the same animal, each taken from a different angle.',
    },

    { type: 'h2', text: 'Where to find them' },
    {
      type: 'p',
      text: 'Public companies in the United States are required by law to publish their numbers on a schedule. You do not have to pay anyone for them.',
    },
    {
      type: 'ul',
      items: [
        '10-K: the big annual report, audited and detailed. This is the document to read if you are serious about a company. It includes all three statements plus management\'s discussion and the footnotes where the real story often hides.',
        '10-Q: the lighter quarterly report, filed three times a year between annual reports. Less detail, no full audit, but it keeps you current.',
        'Annual report: a glossier, narrative version companies send to shareholders. Useful for the story, but the 10-K has the rigor.',
      ],
    },
    {
      type: 'note',
      text: 'The free, authoritative source is the SEC\'s EDGAR database (search the company name, then look for "10-K" or "10-Q"). Finance websites and your broker also display the same statements in a cleaner layout, usually with several years side by side, which is ideal for spotting trends.',
    },

    { type: 'h2', text: 'Statement 1: the income statement' },
    {
      type: 'p',
      text: 'The income statement (also called the profit and loss, or P&L) answers one question: did the business make money over a period of time, such as a quarter or a year? You read it top to bottom, and the order tells a story. You start with all the money that came in, then subtract costs in stages until you reach what is left for the owners.',
    },
    {
      type: 'h3', text: 'Walking down the income statement' },
    {
      type: 'ul',
      items: [
        'Revenue (the "top line"): total sales for the period, before any costs. If a coffee shop sold $1,000,000 of coffee, that is revenue.',
        'Minus COGS (cost of goods sold): the direct cost of producing what you sold, such as the coffee beans, cups, and the barista\'s time. Subtract it from revenue to get gross profit.',
        'Gross profit: what is left after the direct cost of the product. It shows how profitable the core product is before running the wider business.',
        'Minus operating expenses: the costs of running the company beyond making the product, such as SG&A (selling, general and administrative: rent, salaries, marketing) and R&D (research and development). What remains is operating income, also called EBIT (earnings before interest and taxes).',
        'Minus interest and taxes: the cost of the company\'s debt and its tax bill. What remains is net income.',
        'Net income (the "bottom line"): the final profit that belongs to the shareholders. This is the number everyone quotes, but never the only one that matters.',
      ],
    },
    {
      type: 'p',
      text: 'Divide net income by the number of shares and you get EPS (earnings per share), the profit attributable to each single share you own. EPS is the bridge from the company\'s total profit to your slice of it, and it feeds directly into valuation ratios you will meet in the next chapter.',
    },
    {
      type: 'small',
      text: 'You will also hear EBITDA (earnings before interest, taxes, depreciation, and amortization). Depreciation and amortization are non-cash charges that spread the cost of past investments (like machines or acquired patents) across the years they are used. People add them back because EBITDA is a rough proxy for the cash an operation throws off, useful for comparing companies with different debt and tax situations. But treat it with suspicion: it conveniently ignores the real cost of keeping the business\'s equipment up to date. As Warren Buffett tartly objects, EBITDA pretends that capital spending is free, and it never is. Use it as one lens, not the truth.',
    },

    { type: 'h2', text: 'Statement 2: the balance sheet' },
    {
      type: 'p',
      text: 'If the income statement is a video of a period, the balance sheet is a photograph taken at a single instant, usually the last day of the quarter. It answers: what does the business own, and what does it owe, right now? It is built on one unbreakable equation.',
    },
    {
      type: 'note',
      text: 'Assets = Liabilities + Shareholders\' Equity. In plain words: everything the company owns was paid for either with borrowed money (liabilities) or with the owners\' money (equity). The two sides must always balance, which is where the name comes from.',
    },
    {
      type: 'ul',
      items: [
        'Assets: everything the company owns of value, such as cash, inventory, buildings, and equipment.',
        'Liabilities: everything it owes, such as loans, unpaid bills, and bonds.',
        'Shareholders\' equity: what would be left for the owners if every asset were sold and every debt paid. Also called book value.',
      ],
    },
    {
      type: 'h3', text: 'Current versus non-current' },
    {
      type: 'p',
      text: 'Both assets and liabilities are split by timing. Current means within one year; non-current means longer. Current assets (cash, inventory, money customers owe you) minus current liabilities (bills and debt due soon) gives you working capital, a quick read on whether the company can cover its near-term obligations.',
    },
    {
      type: 'h3', text: 'What good and bad look like' },
    {
      type: 'ul',
      items: [
        'Healthier signs: more cash than debt or manageable debt, current assets comfortably above current liabilities, and equity (book value) growing year after year as the company retains profits.',
        'Worrier signs: debt climbing faster than the business, current liabilities exceeding current assets (a possible cash crunch), and shrinking equity. A mountain of debt is fine in good times and lethal in bad ones.',
      ],
    },

    { type: 'h2', text: 'Statement 3: the cash flow statement' },
    {
      type: 'p',
      text: 'This is the one beginners skip and professionals read first. The cash flow statement answers: where did the actual cash move during the period? It matters because accounting profit and real cash are not the same thing, and cash is much harder to fake. A company can report a profit on the income statement while its bank balance is bleeding, and the cash flow statement is where you catch it.',
    },
    {
      type: 'h3', text: 'Why cash is not the same as profit' },
    {
      type: 'small',
      text: 'Net income includes non-cash items and timing tricks. Depreciation reduces profit without any cash leaving the building. A sale booked as revenue might be on credit, so the profit is recorded now but the cash arrives months later (it sits as a receivable). Inventory ties up cash before anything is sold. Because of all this, a business can look profitable on paper and still run out of money, or look mediocre on profit while gushing cash. The cash flow statement strips away the accounting and shows the green that actually moved.',
    },
    {
      type: 'p',
      text: 'It has three sections, and reading them together tells you how the company funds itself.',
    },
    {
      type: 'ul',
      items: [
        'Operating activities: cash generated by the core business of selling its product or service. You want this to be solidly positive and growing. This is the engine.',
        'Investing activities: cash spent on or received from long-term assets, most importantly capital expenditures (capex), the money spent on property, plants, and equipment to keep running and to grow.',
        'Financing activities: cash exchanged with lenders and owners, such as borrowing, repaying debt, paying dividends, or buying back shares.',
      ],
    },
    {
      type: 'h3', text: 'Free cash flow: the crown jewel' },
    {
      type: 'note',
      text: 'Free cash flow (FCF) = operating cash flow minus capital expenditures. It is the cash left over after the company pays to keep its operations running. This is the money that genuinely funds dividends, buybacks, debt paydown, and growth, so many seasoned investors trust FCF more than reported net income. A business that consistently produces strong free cash flow has real, spendable profit, not just an accountant\'s number.',
    },

    { type: 'h2', text: 'How the three connect' },
    {
      type: 'p',
      text: 'These are not three unrelated reports; they are three views of one business, and they link together. Net income from the bottom of the income statement flows into shareholders\' equity on the balance sheet (profits the company keeps make the owners richer) and sits at the top of the cash flow statement, where it is adjusted back into actual cash. When you can see those links, you are reading like an analyst, not a tourist.',
    },

    { type: 'h2', text: 'A quick reference and red flags' },
    {
      type: 'table',
      headers: ['Statement', 'Question it answers', 'A red flag to watch'],
      rows: [
        ['Income statement', 'Did the business make a profit over the period? (Revenue down to net income and EPS.)', 'Revenue growing but margins steadily shrinking, or profit propped up by one-time gains rather than the core business.'],
        ['Balance sheet', 'What does it own and owe at this moment? (Assets = liabilities + equity.)', 'Debt rising faster than the business, or current liabilities creeping above current assets (a looming cash squeeze).'],
        ['Cash flow statement', 'Where did real cash move? (Operating, investing, financing, and free cash flow.)', 'Reported profit rising while operating cash flow stalls or turns negative, a classic sign the profit may not be real.'],
      ],
    },

    { type: 'h2', text: 'How to read them top-down' },
    {
      type: 'ol',
      items: [
        'Start with revenue and ask whether it is growing over several years. Direction matters more than any single year.',
        'Walk down to net income and free cash flow, checking that profit and cash are growing together, not diverging.',
        'Glance at the balance sheet for the debt load and whether equity is building.',
        'Always compare across at least three to five years and against a couple of competitors. One number alone tells you almost nothing; the trend tells you the story.',
      ],
    },
    {
      type: 'p',
      text: 'You can now open a company\'s filing and read its three statements without flinching. In the next chapter we take these raw numbers and turn them into ratios, the shorthand that lets you judge, quickly, whether a business is healthy and whether its stock is cheap or expensive.',
    },
    {
      type: 'small',
      text: 'Educational content only. Nothing here is personalized investment advice or a recommendation to buy or sell any security. Always do your own research and consult a licensed professional about your actual money.',
    },
  ],
};

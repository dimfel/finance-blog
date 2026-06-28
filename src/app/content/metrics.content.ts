import { Chapter } from './content.types';

export const metricsChapter: Chapter = {
  id: 'metrics',
  order: 4,
  title: 'Key Metrics & Ratios',
  subtitle: 'The shorthand that lets you judge a company in minutes',
  summary: {
    title: 'In this chapter',
    items: [
      'Ratios combine the financial statements with the share price so you can compare companies of any size fairly.',
      'Valuation multiples (P/E, PEG, P/B, P/S, EV/EBITDA) ask "is it cheap or expensive?"',
      'Profitability and efficiency ratios (margins, ROE, ROA) ask "is this a good business?"',
      'Health ratios (debt-to-equity, current ratio) ask "can it survive a bad year?"',
      'No ratio means anything on its own; it only has meaning compared with the company\'s own history, its peers, and its industry.',
    ],
  },
  blocks: [
    {
      type: 'p',
      text: 'You can now read the three financial statements. This chapter gives you the shorthand professionals use to size up a company quickly. A ratio is just one number divided by another, turning raw dollars into a comparable figure. That is the magic: ratios let you stack a giant company against a tiny one on equal footing, because you are measuring quality and price per dollar, not absolute size.',
    },
    {
      type: 'note',
      text: 'Read this first and keep it in mind throughout: a single ratio in isolation is almost meaningless. A P/E of 30 is expensive for a sleepy utility and cheap for a fast-growing software firm. Every number below only earns its meaning when you compare it three ways: against the company\'s own past, against its direct competitors, and against its industry norm. Context is the whole game.',
    },

    { type: 'h2', text: 'Valuation multiples: cheap or expensive?' },
    {
      type: 'p',
      text: 'These connect the share price to what the business produces. They answer how much you are paying for each dollar of earnings, sales, book value, or cash.',
    },
    {
      type: 'h3', text: 'P/E ratio (price-to-earnings)' },
    {
      type: 'p',
      text: 'The most quoted ratio of all: share price divided by EPS (earnings per share). It tells you how many dollars you are paying for each dollar of annual profit. A P/E of 20 means you pay $20 for $1 of yearly earnings. A higher P/E means the market expects strong future growth; a lower one means modest expectations or a business out of favor.',
    },
    {
      type: 'small',
      text: 'There are two flavors you must not confuse. Trailing P/E (often shown as P/E TTM, for trailing twelve months) uses the actual earnings already reported over the past year, so it is fact. Forward P/E uses analysts\' estimates of next year\'s earnings, so it is opinion. Forward looks lower for a growing company because its earnings are expected to rise, but it depends on a forecast that may be wrong. Always know which one you are looking at.',
    },
    {
      type: 'h3', text: 'PEG ratio (price/earnings to growth)' },
    {
      type: 'p',
      text: 'P/E divided by the earnings growth rate. It exists to answer a fair objection: a high P/E can be perfectly reasonable if the company is growing fast. A PEG around 1 suggests the price and the growth are roughly in balance; well below 1 may be a bargain; well above 1 may be pricey for the growth you are getting. Treat it as a rough sanity check, since it relies on growth forecasts that are easy to get wrong.',
    },
    {
      type: 'h3', text: 'P/B ratio (price-to-book)' },
    {
      type: 'p',
      text: 'Share price divided by book value (shareholders\' equity) per share. It compares the market price to the company\'s accounting net worth. A P/B near 1 means you pay about what the balance sheet says the equity is worth. It is most useful for banks and asset-heavy businesses, and far less useful for software or brand-driven firms whose real value (people, code, reputation) barely shows up on the balance sheet.',
    },
    {
      type: 'h3', text: 'P/S ratio (price-to-sales)' },
    {
      type: 'p',
      text: 'Market cap divided by revenue. Its main use is valuing young companies that have growing sales but no profits yet, where a P/E cannot even be calculated. Just remember sales are not profit; a company can grow revenue impressively while losing money on every transaction, so never use P/S alone.',
    },
    {
      type: 'h3', text: 'EV/EBITDA' },
    {
      type: 'small',
      text: 'A favorite of professionals. EV is enterprise value: market cap plus total debt minus cash. Why bother? Market cap is the price of the equity only, but if you bought the whole company you would also inherit its debt and pocket its cash. EV is the truer "all-in" purchase price. EV/EBITDA then compares that full price to EBITDA (the rough cash operating profit from the last chapter). Because it neutralizes differences in debt and tax, it lets you compare two companies with very different balance sheets more fairly than P/E can. Lower generally means cheaper, but only versus peers in the same industry.',
    },

    { type: 'h2', text: 'Profitability and efficiency: is it a good business?' },
    {
      type: 'p',
      text: 'A cheap price means nothing if the underlying business is mediocre. These ratios measure how good the company is at turning sales and capital into profit.',
    },
    {
      type: 'h3', text: 'Margins: gross, operating, net' },
    {
      type: 'ul',
      items: [
        'Gross margin = gross profit divided by revenue. How much of each sales dollar survives after the direct cost of the product. High and stable gross margins often signal pricing power or a strong brand.',
        'Operating margin = operating income divided by revenue. What survives after running the whole operation, before interest and taxes. A clean read on the core business.',
        'Net margin = net income divided by revenue. The final cents of profit kept from each sales dollar. A company keeping 20 cents on the dollar is far healthier than one keeping 2 cents.',
      ],
    },
    {
      type: 'h3', text: 'ROE and ROA (returns on equity and assets)' },
    {
      type: 'p',
      text: 'ROE (return on equity) = net income divided by shareholders\' equity. It answers how much profit the company generates on the owners\' money, so it is a report card on management. ROA (return on assets) = net income divided by total assets, measuring how efficiently the company uses everything it controls, including borrowed money. One caution: ROE can be flattered by piling on debt (a smaller equity base inflates the ratio), which is exactly why you read ROE alongside the debt ratios below.',
    },

    { type: 'h2', text: 'Financial health: can it survive a bad year?' },
    {
      type: 'p',
      text: 'Good times forgive a lot. These ratios ask what happens when business turns down and the bills still come due.',
    },
    {
      type: 'ul',
      items: [
        'Debt-to-equity = total debt divided by shareholders\' equity. How much the company leans on borrowed money versus owners\' money. Higher means more leverage, which magnifies both gains and the risk of trouble. What counts as high varies hugely by industry.',
        'Current ratio = current assets divided by current liabilities. Can it cover the bills due within a year? Below 1 means short-term obligations exceed short-term resources, a potential cash crunch; comfortably above 1 is reassuring, though far too high can mean idle cash.',
      ],
    },

    { type: 'h2', text: 'Cash and shareholder returns' },
    {
      type: 'p',
      text: 'Finally, the numbers that tell you about real cash and what the company hands back to owners.',
    },
    {
      type: 'ul',
      items: [
        'Free cash flow (FCF) = operating cash flow minus capital expenditures. The genuine spendable cash left after keeping the business running, often more trustworthy than reported profit.',
        'FCF yield = free cash flow divided by market cap. The cash-return version of flipping the P/E upside down; a higher yield means more real cash for every dollar of price, a sign of a potentially cheap, cash-generative business.',
        'Dividend yield = annual dividend per share divided by share price. The cash income a shareholder earns each year as a percent of price. A 3% yield pays $3 a year per $100 invested. An unusually high yield can be a warning, not a gift, if it reflects a falling price.',
        'Payout ratio = dividends divided by net income. The share of profit paid out as dividends. A low ratio leaves room to reinvest and to keep paying in a downturn; a ratio near or above 100% means the company is paying out more than it earns, which is rarely sustainable.',
      ],
    },

    { type: 'h2', text: 'Reference table' },
    {
      type: 'p',
      text: 'Keep this handy. The ranges are rough rules of thumb for a typical company, not hard limits. Always read each number against peers and history.',
    },
    {
      type: 'table',
      headers: ['Metric', 'What it measures', 'Rough healthy range / how to read it'],
      rows: [
        ['EPS', 'Profit attributable to each share', 'Positive and growing year over year; the trend matters more than the level.'],
        ['P/E (trailing & forward)', 'Price paid per $1 of earnings', 'Very broadly 15-25 for a steady company; higher needs growth to justify it. Compare to peers and history.'],
        ['PEG', 'P/E adjusted for growth', 'Around 1 is balanced; below 1 may be cheap; above 2 looks rich. A rough check only.'],
        ['P/B', 'Price vs accounting net worth', 'Near 1-3 common; best for banks and asset-heavy firms, weak for asset-light ones.'],
        ['P/S', 'Price vs revenue', 'Use for unprofitable growth firms; lower is cheaper, but sales are not profit.'],
        ['EV/EBITDA', 'All-in price vs cash operating profit', 'Often 8-12 for mature firms; lower is cheaper. Fairer than P/E across different debt loads.'],
        ['ROE', 'Profit on owners\' money', 'Above ~15% is generally strong; check it is not inflated by heavy debt.'],
        ['ROA', 'Profit on all assets', 'Above ~5% is decent, but it varies widely by industry.'],
        ['Gross / operating / net margin', 'Cents of profit kept at each stage', 'Higher and stable is better; rising margins signal pricing power, falling margins are a warning.'],
        ['Debt-to-equity', 'Reliance on borrowed money', 'Under ~1 is conservative for many industries; context decides what is safe.'],
        ['Current ratio', 'Ability to pay near-term bills', 'Comfortably above 1 (often 1.5-3); below 1 flags a possible cash crunch.'],
        ['Free cash flow / FCF yield', 'Real spendable cash generated', 'Consistently positive FCF is the goal; a higher FCF yield suggests better value.'],
        ['Dividend yield', 'Cash income as a % of price', 'Roughly 1-4% is common; a very high yield can signal a troubled, falling stock.'],
        ['Payout ratio', 'Share of profit paid as dividends', 'Under ~60% leaves a safety cushion; near or above 100% is a red flag.'],
      ],
    },
    {
      type: 'note',
      text: 'The big takeaway: ratios are a flashlight, not a verdict. They point you toward the questions worth asking. A low P/E might mean a bargain or a dying business; a high ROE might mean excellence or hidden debt. Use them to compare and to dig, never as a substitute for understanding the actual company behind the numbers.',
    },
    {
      type: 'p',
      text: 'With the foundations, the statements, and these ratios, you have the toolkit to open any stock page and read it with confidence. From here the work is judgment: weighing the numbers against the business behind them and deciding, for yourself, whether the price on offer is a fair one.',
    },
    {
      type: 'small',
      text: 'Educational content only. Nothing here is personalized investment advice or a recommendation to buy or sell any security. Always do your own research and consult a licensed professional about your actual money.',
    },
  ],
};

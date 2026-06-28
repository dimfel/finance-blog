import { Chapter } from './content.types';

export const checklistChapter: Chapter = {
  id: 'checklist',
  order: 7,
  title: 'The Stock-Picking Checklist',
  subtitle: 'A repeatable routine you can run on any company',
  summary: {
    title: 'In this chapter',
    items: [
      'A checklist turns everything you have learned into one repeatable routine, so your decisions stay consistent instead of emotional.',
      'The eight steps run in order: understand the business and moat, read the statements, run the ratios, estimate value, demand a margin of safety, read the app screens, size the position with a limit order, then keep monitoring.',
      'A short red-flags list helps you walk away from trouble before you buy.',
      'Run every candidate through the same steps. Consistency, not cleverness, is what protects beginners.',
      'This is education, not financial advice. Invest only within your own risk tolerance.'
    ]
  },
  blocks: [
    {
      type: 'p',
      text: 'You now have all the pieces: how to read a business, the three financial statements, the key ratios, intrinsic value, the moat, the margin of safety, and how to read a real broker app. The final skill is assembling them into a routine you run the same way every single time. Professionals use checklists for exactly the reason pilots and surgeons do, not because the steps are hard, but because skipping one under pressure is how smart people make dumb mistakes. Here is the loop. Run every stock through it before you buy.'
    },
    { type: 'h2', text: 'The eight-step routine' },
    {
      type: 'ol',
      items: [
        'Understand the business and its moat. Before any numbers, answer in plain words: what does this company sell, who buys it, and how does it make money? Then ask whether it has a durable competitive advantage, a moat (brand, network effects, switching costs, cost advantage, or efficient scale) that protects its profits from rivals. If you cannot explain the business simply, do not own it.',
        'Check the financial statements and their trends. Pull up the income statement, balance sheet, and cash flow statement over several years, not just one. You are hunting for direction: is revenue growing, are margins holding, is free cash flow real and rising, is debt under control? The trend over time tells you more than any single year number.',
        'Run the key ratios versus peers and history. Now put price and performance together: P/E, EV/EBITDA, margins, ROE, ROIC, debt-to-equity, interest coverage. A ratio means nothing in isolation, so always compare it to the company own history and to its direct competitors. Context turns a number into a judgment.',
        'Estimate intrinsic value. Triangulate. Start with multiples (what do peers trade at?), then do a rough discounted cash flow (project free cash flow, discount it back, add a terminal value) to get an absolute estimate. You are after a reasonable range, not a single magic number.',
        'Demand a margin of safety. Compare your value range to the market price. Only act when the price sits meaningfully below your estimate of value, so that even if your analysis is off, you are protected. No discount, no purchase. This single discipline saves beginners from most large mistakes.',
        'Read the stock app screens. Open the Quote screen and confirm the live picture: current price versus your value estimate, the P/E TTM, market cap, and the volume (is the stock liquid enough to get in and out easily?). This is your final reality check before committing money.',
        'Decide position size and use a limit order. Choose how much of your portfolio this one idea deserves, never so much that a single bad call hurts you badly. Then place the order on the Trade screen using a limit order so you control the price you pay, double-checking the symbol, quantity, and price before you tap Buy.',
        'Keep monitoring. Buying is not the end. Track the business each quarter: are earnings and cash flow developing as you expected, is the moat intact, has the story changed? You are watching the company, not just the stock price. Sell when the reason you bought no longer holds, not because the price wiggled.'
      ]
    },
    {
      type: 'p',
      text: 'Notice that price only enters late, in steps four through seven. That is deliberate. Beginners obsess over the price first; disciplined investors understand the business first and let price decide only whether and when to act.'
    },
    { type: 'h2', text: 'Red flags to avoid' },
    {
      type: 'p',
      text: 'Alongside the things you want, keep a list of warning signs that should make you slow down or walk away entirely. None is an automatic veto on its own, but several together is a loud signal.'
    },
    {
      type: 'ul',
      items: [
        'Revenue rising while cash flow stalls. If reported profits grow but actual cash does not follow, the earnings may be lower quality than they look.',
        'Share count quietly creeping up. Steady dilution silently shrinks your slice of the company even when the price looks flat.',
        'Debt climbing faster than the business. Rising leverage makes a company fragile in any bad year, check interest coverage.',
        'Margins steadily eroding. Falling margins can mean competition is breaching the moat.',
        'Receivables growing much faster than sales. Sometimes a sign the company is booking sales it has not actually collected.',
        'A business you cannot explain. If after real effort you still do not understand how it makes money, that is your answer.',
        'A price with no margin of safety. A wonderful company at a reckless price is still a bad investment.',
        'Hype and pressure to "get in now." Good businesses are usually still there next week. Urgency is a sales tactic, not an analysis.'
      ]
    },
    {
      type: 'small',
      text: 'A way to practice: take one company you already know as a customer, something whose product you use, and walk it through all eight steps on paper. Write one sentence per step. You will quickly find which steps you can answer confidently and which expose gaps in your understanding, and those gaps are exactly where the risk lives. Do this a dozen times across different companies and the routine becomes second nature. The aim is not to find a stock to buy today; the aim is to build a process you trust, so that when a genuine opportunity appears, you recognize it calmly and act with discipline instead of emotion.'
    },
    {
      type: 'note',
      text: 'This material is education, not financial advice, and nothing here is a recommendation to buy or sell any specific security. Always do your own diligence, invest only money you can afford to commit, stay within your personal risk tolerance, and consider consulting a licensed financial professional before making real decisions with your money.'
    }
  ]
};

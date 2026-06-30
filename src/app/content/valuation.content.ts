import { Chapter } from './content.types';

export const valuationChapter: Chapter = {
  id: 'valuation',
  order: 5,
  title: 'Intrinsic Value & Valuation',
  subtitle: 'What a business is really worth, and how to estimate it',
  summary: {
    title: 'In this chapter',
    items: [
      'Intrinsic value is what a business is worth based on the cash it will produce over its life. Market price is just today price tag, and the two are often different.',
      'You buy a business, not a ticker. Three tools help you estimate value: multiples (comps), a discounted cash flow (DCF), and for steady payers a dividend discount model.',
      'An economic moat is a durable competitive advantage. It is what protects a company future cash, and therefore its value, from competitors.',
      'A margin of safety means buying meaningfully below your estimate of value, so you are protected when (not if) your estimate is wrong.',
      'Every valuation is an educated estimate, not a precise measurement. Aim to be roughly right, not precisely wrong.'
    ]
  },
  blocks: [
    {
      type: 'p',
      text: 'Let me start with the single most important idea in investing: price is what you pay, value is what you get. The stock market quotes you a price every second of the trading day. That price tells you what other people are willing to pay right now. It does not tell you what the business is actually worth. Your job as an investor is to estimate that worth yourself, then compare it to the price. When value is comfortably above price, you may have an opportunity. When price runs far above value, you are paying up for hope.'
    },
    { type: 'h2', text: 'What intrinsic value means' },
    {
      type: 'p',
      text: 'Intrinsic value is what a business is genuinely worth based on the cash it will generate over its entire remaining life, discounted back to today. Think of a company as a money machine. If I could see every dollar of cash that machine will spit out from now until it stops running, and I could convert all those future dollars into a single fair number in today money, that number is intrinsic value. Notice what it does not depend on: it does not depend on the stock price, on the news cycle, or on what the crowd is feeling this week.'
    },
    {
      type: 'p',
      text: 'This is why I keep telling beginners: you are buying a business, not a ticker. A ticker is just a symbol that flashes red and green. A business has customers, products, profits, and a future. When you own a share, you own a fractional slice of all of that. If you would not be comfortable owning the whole company at the price implied by the stock, you should not be comfortable owning a sliver of it either.'
    },
    { type: 'h2', text: 'Three ways to estimate value' },
    {
      type: 'p',
      text: 'There is no single magic formula. Professionals use a few complementary methods and triangulate. Let me walk you through the three you should know.'
    },
    { type: 'h3', text: '1. Relative valuation (multiples / comps)' },
    {
      type: 'p',
      text: 'This is the quick, comparison-based approach. A multiple is just a ratio of price to some measure of business performance. The most common is the P/E ratio (price-to-earnings): the share price divided by earnings per share. It tells you how many dollars you pay for each dollar of annual profit. A P/E of 20 means you are paying $20 for every $1 of yearly earnings.'
    },
    {
      type: 'p',
      text: 'On its own a multiple is meaningless. It only has meaning in context. You compare a company multiple to three things: its peers (rivals in the same industry), its own history (is it richer or cheaper than usual?), and the broader market. Another widely used multiple is EV/EBITDA. EV is enterprise value (market cap plus debt minus cash, a fairer "true cost" of the whole business), and EBITDA is earnings before interest, taxes, depreciation, and amortization, a rough proxy for cash operating profit. EV/EBITDA is handy when comparing companies that carry different amounts of debt, because it levels the playing field.'
    },
    {
      type: 'p',
      text: 'The watch-out with multiples: a stock can look "cheap" on a low P/E because the business is genuinely shrinking or in trouble. Cheap for a reason is not a bargain. And a high P/E is not automatically expensive if the company is growing fast. Multiples are a fast first read, not a verdict.'
    },
    { type: 'h3', text: '2. Discounted cash flow (DCF)' },
    {
      type: 'p',
      text: 'The DCF is the purest expression of intrinsic value, and it rests on one honest truth: a dollar in the future is worth less than a dollar today. Why? Because a dollar today can be invested and grown, and because a future dollar is uncertain. So we "discount" future cash back to its present value using a discount rate.'
    },
    {
      type: 'ol',
      items: [
        'Project the free cash flow (FCF) the business will generate for the next several years. Free cash flow is the cash left over after the company pays its bills and reinvests to keep running, the cash truly available to owners.',
        'Discount each future year cash flow back to today using a discount rate, because future money is worth less than money in hand now.',
        'Estimate a terminal value, the worth of all cash flows beyond your forecast window, then discount that back too.',
        'Add up all those present values. The sum is your estimate of intrinsic value for the whole business.'
      ]
    },
    {
      type: 'p',
      text: 'Terminal value sounds fancy but the idea is simple. You cannot forecast every year forever, so after (say) five years you assume the business settles into a steady, modest growth rate and capture all the cash beyond that point in one lump sum, which you then discount back to today like everything else. In many DCFs the terminal value is the majority of the answer, which is exactly why you should treat it with humility.'
    },
    { type: 'h3', text: '3. Dividend discount model (DDM)' },
    {
      type: 'p',
      text: 'The DDM is a close cousin of the DCF, but instead of valuing all the free cash flow, it values only the dividends the company pays out. You estimate the stream of future dividends and discount them back to today. This works best for mature, stable companies that pay steady, predictable dividends, think established utilities or consumer-staples firms. It is far less useful for young companies that pay no dividend and reinvest everything into growth.'
    },
    { type: 'h2', text: 'The discount rate, in plain English' },
    {
      type: 'p',
      text: 'The discount rate is simply the annual return you require to take on the risk of owning this business. It is your hurdle. If you could earn, say, 4% on a safe government bond with no stress, you would demand more than 4% to accept the bumps and uncertainty of a stock, maybe 8%, 10%, or higher for a risky one. A higher discount rate means you are treating the future cash as riskier, which shrinks its present value and lowers the price you are willing to pay. Riskier business, higher hurdle, lower value. That is the whole intuition.'
    },
    {
      type: 'figure',
      image: 'img/dcf-timeline.svg',
      alt: 'Timeline diagram showing future free cash flows in Year 1, Year 2, Year 3 and a Terminal Value, with dashed arrows discounting each back to a single Present Value sum today',
      caption: 'Every future cash flow is worth less in today\'s terms — discount it back using your required return rate. Add them all up and you have your intrinsic value estimate. Terminal value (all cash beyond your forecast) often accounts for 60-80% of the total, which is why humility is essential.',
    },
    { type: 'h2', text: 'A simple worked DCF example' },
    {
      type: 'p',
      text: 'Let me make this concrete with small round numbers. Suppose a little business generates $100 of free cash flow next year, and you expect that to grow modestly. You decide on a 10% discount rate (your required return). Here is a simplified three-year version with a terminal value at the end.'
    },
    {
      type: 'table',
      headers: ['Year', 'Future FCF', 'Discount factor (10%)', 'Present value'],
      rows: [
        ['1', '$100', '0.91', '$91'],
        ['2', '$110', '0.83', '$91'],
        ['3', '$120', '0.75', '$90'],
        ['Terminal value', '$1,500', '0.75', '$1,128'],
        ['Total intrinsic value', '', '', '~$1,400']
      ]
    },
    {
      type: 'p',
      text: 'Read it like this: each future year cash is worth less than its face value once discounted (the $120 in year 3 is only worth about $90 today). The terminal value of $1,500 captures all the cash beyond year 3 in one figure, and even that gets discounted down to about $1,128. Add the pieces and your estimate of the whole business is roughly $1,400. If this company had 100 shares outstanding, that is about $14 of intrinsic value per share. If the market is selling it at $9, that gap is interesting. If the market wants $25, you are paying for optimism.'
    },
    {
      type: 'note',
      text: 'A valuation is an estimate, not a precise measurement. Change the growth rate or the discount rate by a point or two and the answer can swing a lot, especially the terminal value. That sensitivity is not a flaw to hide, it is a reason to stay humble. Aim to be roughly right within a range, not falsely precise to the penny. Two careful analysts can reasonably disagree.'
    },
    { type: 'h2', text: 'Economic moats: what protects the value' },
    {
      type: 'p',
      text: 'Here is a question a DCF alone cannot answer: will those lovely future cash flows actually show up, or will competitors come along and compete them away? That is where the economic moat comes in. The term, popularized by Warren Buffett, describes a durable competitive advantage that protects a company profits the way a moat protects a castle. A business with a wide moat can defend its high returns for years, which is precisely what makes its future cash flows, and therefore its intrinsic value, more reliable.'
    },
    {
      type: 'p',
      text: 'There are a handful of classic moat sources worth memorizing:'
    },
    {
      type: 'ul',
      items: [
        'Brand / intangible assets: a trusted name or patents that let a company charge more (think premium consumer brands).',
        'Network effects: the product gets more valuable as more people use it, so the leader keeps winning (marketplaces, social platforms, payment networks).',
        'Switching costs: it is painful or expensive for customers to leave, so they stay (enterprise software woven into a company operations).',
        'Cost advantage: the company can produce more cheaply than anyone else and undercut rivals while still profiting (scale-based logistics, low-cost resources).',
        'Efficient scale: a market only big enough to profitably support one or a few players, discouraging new entrants.'
      ]
    },
    {
      type: 'figure',
      image: 'img/economic-moats.svg',
      alt: 'Five cards showing the five types of economic moat: Brand and IP, Network Effects, Switching Costs, Cost Advantage, and Efficient Scale, each with real company examples',
      caption: 'Most great businesses have at least one of these five structural advantages. The strongest have several overlapping moats — for example, a payment network enjoys both network effects (more users → more useful) and switching costs (too painful to change your payment infrastructure).',
    },
    {
      type: 'p',
      text: 'A wide moat justifies paying a premium price, because the cash flows are more defensible. The absence of a moat is a warning: today fat margins will likely be competed away tomorrow, so do not extrapolate them forever in your model.'
    },
    { type: 'h2', text: 'Margin of safety: the backbone of discipline' },
    {
      type: 'p',
      text: 'Now the most important habit I can give you. Because every valuation is an estimate, you must build in a cushion. The margin of safety, Benjamin Graham core idea, means buying meaningfully below your estimate of intrinsic value. If you think a business is worth $14 a share, you do not pay $14, you wait for $10 or less. That gap is your protection against being wrong, against bad luck, and against the limits of your own forecast.'
    },
    {
      type: 'p',
      text: 'Think of it like an engineer building a bridge rated for 10 tons but designed to hold 30. The extra capacity is there precisely because the real world is messy and estimates are imperfect. Investing is the same. The margin of safety does not just improve your returns, it keeps you in the game when your analysis turns out to be off, which it sometimes will be.'
    },
    {
      type: 'figure',
      image: 'img/margin-of-safety.svg',
      alt: 'Price scale diagram showing the buy target at $9, maximum buy price at $10, intrinsic value estimate at $14, and overvalued zone at $18 and above, with the margin of safety gap labelled as approximately 36 percent',
      caption: 'If your intrinsic value estimate is ~$14, you wait until the market offers it at ~$9–$10. That ~36% discount is your cushion against being wrong. Patience is the mechanism: you do nothing until the price comes to you.',
    },
    { type: 'h2', text: 'Comparing the valuation methods' },
    {
      type: 'table',
      headers: ['Method', 'Best for', 'Watch-outs'],
      rows: [
        ['Relative / multiples (P/E, EV/EBITDA)', 'A fast read; comparing similar companies in the same industry', 'Peers can all be over- or under-priced together; "cheap" may mean a declining business'],
        ['Discounted cash flow (DCF)', 'Estimating absolute intrinsic value from the cash a business will produce', 'Very sensitive to growth and discount-rate assumptions; terminal value can dominate the answer'],
        ['Dividend discount model (DDM)', 'Mature, stable companies that pay steady, predictable dividends', 'Useless for non-payers; breaks down if dividends are unstable or being cut']
      ]
    },
    {
      type: 'p',
      text: 'No method is the truth. Smart investors use two or three, see whether they roughly agree, and stay skeptical of any single number. The goal is a reasonable range for intrinsic value, then the discipline to buy only with a margin of safety beneath it.'
    },
    {
      type: 'small',
      text: 'A quick check to make sure this landed: if you estimate a business is worth about $20 per share and demand a 30% margin of safety, what is the most you would pay? Roughly $14. And if a stock trades at a P/E far above all its peers and its own history, that is not automatically a "sell", but it is a flag telling you the market has priced in a lot of future growth, growth that now has to actually arrive for you to do well. Hold these two reflexes, estimate value then demand a discount, and you already think like an investor rather than a speculator.'
    }
  ]
};

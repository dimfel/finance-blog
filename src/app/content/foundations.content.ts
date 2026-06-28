import { Chapter } from './content.types';

export const foundationsChapter: Chapter = {
  id: 'foundations',
  order: 2,
  title: 'Investing Foundations',
  subtitle: 'What a stock really is, how the market works, and why price is not the same as value',
  summary: {
    title: 'In this chapter',
    items: [
      'A share is a slice of ownership in a real business, not a lottery ticket or a number on a screen.',
      'Stock prices move on two things: how a business actually performs (earnings) and how people feel about it (sentiment).',
      'Price is what you pay; value is what the business is worth. Learning the gap between them is the whole game.',
      'Diversification, a long time horizon, and compounding are the beginner investor\'s three best friends.',
      'A compact glossary at the end nails down the core jargon you will meet everywhere.',
    ],
  },
  blocks: [
    {
      type: 'p',
      text: 'Let me start where I wish someone had started with me. Forget the flashing tickers and the talking heads for a moment. When you buy a stock, you are buying a small piece of an actual company. That simple idea, taken seriously, is the foundation everything else in this course is built on.',
    },

    { type: 'h2', text: 'What a stock actually is' },
    {
      type: 'p',
      text: 'A company can be divided into a number of equal slices called shares. Owning one share makes you a part-owner, however tiny, of that whole business. The word "stock" just means shares in general. If a company has cut itself into one billion shares and you own one thousand of them, you own one-millionth of everything it has: its factories, its cash, its brand, and its future profits.',
    },
    {
      type: 'p',
      text: 'This matters because of how it changes your thinking. A part-owner asks, "Is this a good business, and am I paying a fair price for my slice?" A gambler just asks, "Will the number go up tomorrow?" We are training you to be the first kind of person.',
    },
    {
      type: 'note',
      text: 'Quick gut check: the price of a single share tells you almost nothing about whether a company is large or small. A $400 share and a $4 share can belong to companies of identical size. To measure size you need market cap, which we define below.',
    },

    { type: 'h2', text: 'How the stock market works' },
    {
      type: 'p',
      text: 'The stock market is simply a giant, well-organized marketplace where owners of shares meet people who want to buy them. A stock exchange (the New York Stock Exchange or the Nasdaq, for example) is the venue, and your broker is the messenger who carries your order to that venue. When you click "buy," you are not buying from the company itself; you are buying from another investor who is ready to sell, at a price you both accept.',
    },
    {
      type: 'p',
      text: 'There are really two markets sitting on top of each other. Knowing the difference keeps you from a common beginner confusion.',
    },
    {
      type: 'h3',
      text: 'Primary market vs secondary market',
    },
    {
      type: 'small',
      text: 'The primary market is where shares are born. When a private company first sells shares to the public to raise money, that event is called an IPO (initial public offering). The cash from an IPO goes to the company itself. The secondary market is everything that happens afterward: investors trading those already-existing shares back and forth among themselves. The overwhelming majority of trading you will ever do is in the secondary market, where your money goes to the previous owner of the shares, not to the company. The company only raised money once, at birth.',
    },

    { type: 'h2', text: 'What moves a stock price' },
    {
      type: 'p',
      text: 'In the short run, a price is just the most recent number two strangers agreed on. It moves whenever more people want to buy than sell, or the reverse. But step back and there are really two forces underneath all that motion.',
    },
    {
      type: 'ul',
      items: [
        'Earnings (the substance): how much profit the business actually makes and is expected to make. Over years, this is the gravity that pulls prices toward reality. A company that steadily earns more becomes worth more.',
        'Sentiment (the mood): fear, greed, hype, and headlines. This is why a stock can swing 5% on a day when nothing about the underlying business changed at all. In the short run, mood dominates.',
      ],
    },
    {
      type: 'note',
      text: 'A line worth memorizing, paraphrasing the investor Ben Graham: in the short run the market is a voting machine (a popularity contest), but in the long run it is a weighing machine (it measures real worth). Beginners lose money betting on the voting machine. Patient owners get paid by the weighing machine.',
    },

    { type: 'h2', text: 'Price versus value' },
    {
      type: 'p',
      text: 'This is the single most important distinction in this entire course, so I will be blunt about it. Price is the number on the screen, set by the crowd minute to minute. Value (we will later call it intrinsic value) is what the business is genuinely worth based on the cash it will produce over its lifetime. They are not the same thing, and the gap between them is where careful investors make their money.',
    },
    {
      type: 'p',
      text: 'Think of a house. Its price is whatever a buyer will pay this weekend, which depends on the mood of the market, interest rates, and how many other houses are for sale. Its value depends on the rent it can earn, its condition, and its location for decades to come. A smart buyer estimates value and tries to pay a price below it. Stocks work exactly the same way.',
    },

    { type: 'h2', text: 'Investing versus trading versus speculating' },
    {
      type: 'p',
      text: 'These three words get used interchangeably, but they are different activities with different odds.',
    },
    {
      type: 'ul',
      items: [
        'Investing: buying a piece of a business you understand, at a sensible price, intending to hold for years while it grows. Your return comes from the company actually prospering.',
        'Trading: buying and selling frequently to profit from short-term price moves. It is a skill-and-screen-time-intensive job, and most who attempt it underperform a simple buy-and-hold approach.',
        'Speculating: betting on a price move without a real basis in the underlying business value, often in something you cannot value at all. It can pay off; it is also the fastest way most beginners lose money.',
      ],
    },
    {
      type: 'note',
      text: 'There is nothing morally wrong with trading, and plenty of professionals disagree about it. But for a beginner building a foundation, investing gives you the best odds with the least heartache. Start there.',
    },

    { type: 'h2', text: 'Risk and diversification' },
    {
      type: 'p',
      text: 'Risk, in plain terms, is the chance that things turn out worse than you expected, including the permanent loss of your money if a company fails. You cannot eliminate risk, but you can refuse to take dumb versions of it. The cheapest, most reliable tool for that is diversification.',
    },
    {
      type: 'p',
      text: 'Diversification means not putting all your eggs in one basket. If you own a single stock and that company stumbles, you can lose everything. If you own pieces of thirty different companies across different industries, one disaster is a bruise, not a funeral. The simplest way for a beginner to diversify instantly is an index fund or ETF (defined in the glossary), which bundles hundreds of companies into one purchase.',
    },

    { type: 'h2', text: 'Time horizon and compounding' },
    {
      type: 'p',
      text: 'Your time horizon is how long until you actually need the money. The longer it is, the more risk you can sensibly take and the more time compounding has to work. Money you need next year should not be in stocks at all; money you will not touch for twenty years can ride out every storm.',
    },
    {
      type: 'small',
      text: 'Compounding is earning returns on your past returns, so growth feeds on itself. Suppose you invest $10,000 and it grows about 8% a year (a rough long-run average for a broad stock market, though no year is average and nothing is guaranteed). After one year you have $10,800. The next year, you earn 8% not just on your original $10,000 but on the full $10,800, giving $11,664. It looks slow at first. But left alone, that $10,000 becomes roughly $21,600 in nine years, about $46,600 in twenty years, and over $100,000 in thirty. You added nothing; time did the work. This is why starting early and not interrupting the process beats almost every clever trade. The enemy of compounding is the urge to tinker.',
    },
    {
      type: 'note',
      text: 'One honest reminder: I am teaching you how to think, not telling you what to buy. Past averages are not promises, every investor must do their own diligence, and decisions about your real money deserve a licensed professional and your own judgment.',
    },

    { type: 'h2', text: 'Core glossary' },
    {
      type: 'p',
      text: 'Here are the terms you will trip over everywhere. Skim them now; they will become second nature as you go.',
    },
    {
      type: 'table',
      headers: ['Term', 'Plain-English meaning'],
      rows: [
        ['Ticker', 'The short symbol that identifies a stock (for example, AAPL for Apple). It is just a nickname for typing into a broker or quote page.'],
        ['Market cap', 'Share price multiplied by total shares outstanding. The price tag on the whole company, and the real measure of its size. Often grouped as large-cap, mid-cap, or small-cap.'],
        ['Dividend', 'A cash payment some companies make to shareholders out of profits, usually quarterly. A way the business shares earnings directly with its owners.'],
        ['Bull / bear', 'A bull market is a rising, optimistic market; a bear market is a falling, pessimistic one (commonly a drop of 20% or more). "Bullish" and "bearish" describe an optimistic or pessimistic view.'],
        ['Volatility', 'How much and how fast a price swings up and down. High volatility means a bumpier ride, not necessarily more risk to a long-term owner.'],
        ['Liquidity', 'How easily you can buy or sell without moving the price. A heavily traded stock is liquid; a thinly traded one can be hard to exit at a fair price.'],
        ['Portfolio', 'The full collection of investments you own, taken together. Diversification is about the shape of your whole portfolio, not any single holding.'],
        ['Index / ETF', 'An index measures a basket of stocks (the S&P 500 tracks 500 large U.S. companies). An ETF (exchange-traded fund) is a single, tradeable fund that holds that basket, giving instant diversification.'],
        ['Broker', 'The licensed firm or app through which you place buy and sell orders. Your gateway to the exchange.'],
        ['Bid / ask spread', 'The bid is the highest price buyers will pay; the ask is the lowest price sellers will accept. The small gap between them is the spread, a hidden cost of trading.'],
        ['IPO', 'Initial public offering: the first time a private company sells shares to the public, raising money for itself and joining the stock market.'],
      ],
    },
    {
      type: 'p',
      text: 'You now have the vocabulary and the mental model: a stock is ownership, the market is a place to trade that ownership, price is set by mood but anchored by earnings, and your edge comes from buying value patiently and letting compounding run. Next we open the company up and learn to read its financial statements, where the guessing stops and the reading begins.',
    },
    {
      type: 'small',
      text: 'Educational content only. Nothing here is personalized investment advice or a recommendation to buy or sell any security. Always do your own research and consult a licensed professional about your actual money.',
    },
  ],
};

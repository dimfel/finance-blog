import { Chapter } from './content.types';

export const readingTheAppChapter: Chapter = {
  id: 'reading-the-app',
  order: 6,
  title: 'Reading a Stock App (Watchlists, Quotes, Trade)',
  subtitle: 'A field-by-field tour of the three screens you will actually use',
  summary: {
    title: 'In this chapter',
    items: [
      'A modern broker app has three core screens: the Watchlist (what you monitor), the Quote / Detail screen (everything about one stock), and the Trade / Order screen (how you actually buy or sell).',
      'On the Watchlist, each row gives you a ticker, company name, a mini chart, the last price, and the percent change, green for up, red for down.',
      'On the Quote screen, learn every field: High/Low, Volume, Open, Prev Close, Turnover, P/E TTM, Market Cap, pre/post-market price, and the ex-dividend date.',
      'On the Trade screen, understand account type, order type (market vs limit), price, quantity, session, time-in-force, and attached orders before you ever tap Buy.',
      'As a beginner, prefer limit orders, double-check quantity and price, and remember this is education, not financial advice.'
    ]
  },
  blocks: [
    {
      type: 'p',
      text: 'You have learned how to read a business and estimate what it is worth. Now let me put you in front of the tool you will actually touch every day: a mobile broker app. They all look broadly similar, so I will describe a typical moomoo-style layout. Do not be intimidated by the wall of numbers. Every field answers a simple question, and by the end of this chapter you will read the screen the way you read a clock. We will go through three screens in order: Watchlists, Quotes (Detail), and Trade (Order).'
    },

    { type: 'h2', text: '(A) The Watchlists screen' },
    {
      type: 'p',
      text: 'A watchlist is your personal list of tickers you want to keep an eye on. It is not a list of things you own, it is a list of things you are watching, like a shortlist of houses you are interested in before you buy any of them. This is the home base of the app, and it is the first habit I want you to build: create a watchlist long before you ever place a single trade.'
    },
    {
      type: 'p',
      text: 'Here is the screen, annotated. The numbers below match the callouts on the image:'
    },
    {
      type: 'figure',
      image: 'img/watchlists.png',
      alt: 'The Watchlists screen of a moomoo-style broker app',
      caption: 'The Watchlists screen, annotated. Numbers match the explanations below.',
      markers: [
        { n: 1, x: 16, y: 8.7, label: 'Filter tabs: All / US / Positions' },
        { n: 2, x: 32, y: 14, label: 'Account selector (Margin Account)' },
        { n: 3, x: 9, y: 31, label: 'Ticker symbol and company name' },
        { n: 4, x: 48, y: 32, label: 'Mini intraday chart (sparkline)' },
        { n: 5, x: 62, y: 31, label: 'Last traded price' },
        { n: 6, x: 88, y: 31, label: 'Percent change today (green up / red down)' },
        { n: 7, x: 20, y: 56, label: 'Index row (.SPX = S&P 500 Index)' },
        { n: 8, x: 13, y: 88, label: 'Bottom market-index ticker bar (GEM)' },
        { n: 9, x: 50, y: 94, label: 'App navigation bar' }
      ]
    },
    {
      type: 'p',
      text: 'The screen is a stack of rows, one per company. Reading a single row from left to right, you typically see four things:'
    },
    {
      type: 'ul',
      items: [
        'Ticker symbol and company name (3): the short code (for example AAPL) and the full name (Apple Inc). The ticker is the unique handle the market uses for that stock.',
        'A mini sparkline chart (4): a tiny line showing the intraday trend, how the price has moved over today trading session so far. It is a quick visual, not a precise tool.',
        'Last Price (5): the price of the most recent trade. This is the number that updates constantly while the market is open.',
        'Percent Change (6): how much the price has moved today, shown as a percentage. Green means it is up on the day, red means it is down. Almost every broker app uses this color convention.'
      ]
    },
    {
      type: 'p',
      text: 'Across the top you usually see tabs that filter the list (1). "All" shows everything you track. "US" filters to US-listed names. "Positions" shows only the stocks you actually own (your holdings). These tabs just slice the same data different ways, so tap around without worry, you cannot break anything by looking. Near those tabs you will also see an account selector (2), often labeled something like "Margin Account." That simply tells you which of your accounts the app is currently showing, it does not place any trade by itself.'
    },
    {
      type: 'p',
      text: 'Near the bottom of many watchlists you will spot rows that start with a dot, such as .SPX (7). Those are market indexes, not individual stocks. .SPX is the S&P 500 Index, a basket tracking 500 large US companies, a quick gauge of how the overall US market is doing today. Watching the index alongside your stocks tells you whether a move is specific to your company or just the whole market moving together. Right at the very bottom you will often see a thin market-index ticker bar (8) that scrolls headline indexes (for example a GEM or growth-market index), giving you the broad market pulse at a glance without leaving the screen.'
    },
    {
      type: 'p',
      text: 'Finally, the strip of icons along the bottom edge is the app navigation bar (9). Those are your main tabs, the watchlist, markets, trading, news, and your account, the way you jump between the major areas of the app. Get comfortable with where each one lives; the rest of this chapter assumes you can move between these screens.'
    },
    {
      type: 'note',
      text: 'Build a watchlist before you ever buy. Add the companies you are studying and watch them for a few weeks. You will learn how their prices behave, get a feel for normal daily swings, and avoid the rookie mistake of buying something the moment it catches your eye.'
    },

    { type: 'h2', text: '(B) The Quotes (Detail) screen' },
    {
      type: 'p',
      text: 'Tap any row and you land on the Quotes screen, the detailed dashboard for one stock. This is where beginners feel overwhelmed, so we will go field by field.'
    },
    {
      type: 'p',
      text: 'Here is the detail screen, annotated. The numbers below match the callouts on the image:'
    },
    {
      type: 'figure',
      image: 'img/quotes.png',
      alt: 'The Quotes / stock detail screen of a moomoo-style broker app',
      caption: 'The Quotes (detail) screen, annotated. Numbers match the explanations below.',
      markers: [
        { n: 1, x: 28, y: 10, label: 'Stock name and market status' },
        { n: 2, x: 16, y: 16.5, label: 'Last price with up/down arrow' },
        { n: 3, x: 18, y: 20, label: 'Today change in dollars and percent' },
        { n: 4, x: 80, y: 17, label: 'Day High / Low / Volume' },
        { n: 5, x: 45, y: 25, label: 'Open / Prev Close / Turnover' },
        { n: 6, x: 45, y: 31, label: 'Turnover Ratio / P/E TTM / Market Cap' },
        { n: 7, x: 28, y: 35, label: 'Post-market price' },
        { n: 8, x: 42, y: 43, label: 'Ex-dividend date and dividend per share' },
        { n: 9, x: 52, y: 53, label: 'Section tabs: Chart / Options / Comments / News / Company' },
        { n: 10, x: 80, y: 68, label: 'Live trade tape (time / price / size)' },
        { n: 11, x: 22, y: 93, label: 'Trade / Options action buttons' }
      ]
    },
    {
      type: 'p',
      text: 'Right at the top you see the stock name and a market-status label (1), for example the company name with a note like "Trading" or "Market Closed" that tells you whether the session is live. Just below sits the big Last Price with an up or down arrow next to it (2), and right beside it the change shown two ways: an absolute amount and a percentage, for example +0.750 and +0.32% (3). The first is how many dollars the price moved today, the second is that same move as a percentage. An up arrow and green mean it is higher than where it started the comparison; a down arrow and red mean lower.'
    },
    {
      type: 'p',
      text: 'Below the headline price you find a grid of statistics. Let me translate each one:'
    },
    {
      type: 'ul',
      items: [
        'High / Low (4): the highest and lowest prices the stock has traded at so far today, the day range.',
        'Volume (4): the number of shares that have changed hands today. You will often see M for millions (for example 45M = 45 million shares). Higher volume means more active trading and usually easier buying and selling (more liquidity).',
        'Open (5): the price of the first trade when the market opened today.',
        'Prev Close (5): yesterday closing price. This matters more than it looks, the percent change at the top is measured from this number. When you see +0.32%, it means up 0.32% versus the previous close.',
        'Turnover (5): the total dollar value traded today (roughly price times shares traded), not just the count of shares. Turnover Ratio (6) compares that trading volume to the shares available, a sense of how actively the stock is being flipped.',
        'P/E TTM (6): the price-to-earnings ratio using TTM, which stands for Trailing Twelve Months, the last 12 months of actual reported earnings. It tells you how many dollars you pay per dollar of the company recent annual profit.',
        'Market Cap (6): the total value of the whole company (share price times all shares outstanding). You will see B for billion and T for trillion (for example 3.2T = $3.2 trillion). This, not the share price, tells you how big the company actually is.'
      ]
    },
    {
      type: 'p',
      text: 'A few more fields need a word. You may see a Post-Market or Pre-Market price (7), sometimes with a label like "Market Closed." Regular US trading runs roughly 9:30am to 4:00pm Eastern, but some trades happen before the open (pre-market) and after the close (post-market). Those prices can move on news while the regular market is shut, and they often trade in thinner volume, so treat them with extra caution.'
    },
    {
      type: 'p',
      text: 'You will also see an Ex-Date and a dividend-per-share note (8), for example "Div $0.25, Ex-Date Aug 9." A dividend is a cash payment a company sends its shareholders. The ex-dividend date (ex-date) is the cutoff: you must own the stock before the ex-date to receive that upcoming dividend. Buy on or after the ex-date and the seller, not you, collects this round. It is a small but practical detail when you are buying a dividend payer.'
    },
    {
      type: 'p',
      text: 'Along the screen you will find tabs (9): Chart (price history over time), Options (a more advanced derivatives market, skip it as a beginner), Comments (chatter from other users, treat as noise, not analysis), News (headlines on the company), and Company (the business profile, sector, and basic fundamentals). The Chart and Company tabs are the two most useful while you are learning.'
    },
    {
      type: 'p',
      text: 'Many detail screens also show a fast-scrolling list of ticking entries (10), usually three columns: time, price, and size. Each line is a live trade or quote, the time it happened, the price it happened at, and the size (how many shares). This is essentially a real-time tape of activity. You do not need to trade off it, but it is useful to know that the blur of numbers is simply the market transacting, tick by tick, in real time.'
    },
    {
      type: 'p',
      text: 'At the very bottom of the detail screen sit the action buttons (11), usually a Trade button and an Options button. Trade is the one you care about, tapping it opens the order ticket we cover next. Options opens that advanced derivatives market, so leave it alone for now. Nothing is committed by simply opening these; the actual order is placed on the next screen.'
    },
    {
      type: 'table',
      headers: ['Field', 'Meaning'],
      rows: [
        ['Last Price', 'Price of the most recent trade; updates live'],
        ['Change (+0.750 / +0.32%)', 'Today move in dollars and as a percent vs prev close'],
        ['High / Low', 'Highest and lowest trade prices today'],
        ['Volume', 'Shares traded today (M = millions)'],
        ['Open', 'First trade price today'],
        ['Prev Close', 'Yesterday closing price; percent change is measured from here'],
        ['Turnover', 'Total dollar value traded today'],
        ['Turnover Ratio', 'Trading volume relative to shares available'],
        ['P/E TTM', 'Price per dollar of earnings over the trailing twelve months'],
        ['Market Cap', 'Total company value (B = billion, T = trillion)'],
        ['Pre / Post-Market', 'Price trading outside regular hours'],
        ['Ex-Date / Div', 'Own before the ex-date to receive the upcoming dividend']
      ]
    },
    {
      type: 'note',
      text: 'A high P/E does not automatically mean a stock is "expensive," and a low P/E does not automatically mean "cheap." A P/E only has meaning in context, compare it to the company own history and to its industry peers (the same lesson from the Metrics chapter). A fast-growing company can deserve a high P/E; a shrinking one can deserve a low one.'
    },

    { type: 'h2', text: '(C) The Trade (Order) screen' },
    {
      type: 'p',
      text: 'Now the screen where real money changes hands. When you tap Buy or Sell, an order ticket opens. Go slowly here, this is the one place a careless tap actually costs you.'
    },
    {
      type: 'p',
      text: 'Here is the order ticket, annotated. The numbers below match the callouts on the image:'
    },
    {
      type: 'figure',
      image: 'img/trade.png',
      alt: 'The Trade / order ticket screen of a moomoo-style broker app',
      caption: 'The Trade (order) screen, annotated. Numbers match the explanations below.',
      markers: [
        { n: 1, x: 35, y: 9, label: 'Account type (Margin vs Cash)' },
        { n: 2, x: 30, y: 16, label: 'Symbol' },
        { n: 3, x: 40, y: 21, label: 'Live price and post-market' },
        { n: 4, x: 35, y: 33, label: 'Order Type (Market vs Limit)' },
        { n: 5, x: 30, y: 39, label: 'Price (your limit price)' },
        { n: 6, x: 30, y: 45, label: 'Quantity (number of shares)' },
        { n: 7, x: 30, y: 51, label: 'Amount (price x quantity)' },
        { n: 8, x: 35, y: 57, label: 'Session (trading hours)' },
        { n: 9, x: 35, y: 63, label: 'Time-in-Force (Day / GTC)' },
        { n: 10, x: 35, y: 70, label: 'Attached Order (stop-loss / take-profit)' },
        { n: 11, x: 28, y: 75, label: 'Buying power (Max Qty to Buy / Sell)' },
        { n: 12, x: 42, y: 84, label: 'Buy / Sell buttons' },
        { n: 13, x: 20, y: 96, label: 'Index ticker (Dow Jones)' }
      ]
    },
    {
      type: 'p',
      text: 'Let me walk every field on the ticket.'
    },
    {
      type: 'ul',
      items: [
        'Account type (Margin vs Cash) (1): a Cash account means you trade only with your own money, simple and safer. A Margin account lets you borrow money from the broker to buy more than you have. Borrowing magnifies both gains and losses and charges interest, it is riskier. As a beginner, stick with a cash account.',
        'Symbol (2): the ticker you are trading. Confirm it is the company you actually mean, similar names and codes exist.',
        'Live price and post-market (3): near the top the ticket shows the current market price (and sometimes a post-market price) so you can sanity-check your order against where the stock is trading right now.',
        'Order Type (Market vs Limit) (4): a Market order buys or sells immediately at whatever the current price is, you get filled fast but you do not control the exact price. A Limit order lets you set the maximum price you will pay (or minimum you will accept to sell), you control the price but the trade only fills if the market reaches it. The screen shown here is set to Limit.',
        'Price (5): the limit price you set. If you set a buy price above the current market price, the app may warn you ("higher than current price"), it is nudging you to double-check you did not fat-finger the number.',
        'Quantity (6): the number of shares you want to trade. This is the field people get wrong most often, 100 versus 1000 is a very different bill.',
        'Amount (7): the estimated cost, simply price times quantity. It is your at-a-glance check of how much cash this order will use.',
        'Session (RTH vs incl. Pre/Post) (8): RTH means Regular Trading Hours only, your order is active just during the normal session. The "include Pre/Post-Market" setting lets it also work in the extended hours we discussed, where prices can be thinner and jumpier.',
        'Time-in-Force (Day vs GTC) (9): Day means the order expires at the end of today session if it does not fill. GTC means Good Til Canceled, it stays alive across future days until it fills or you cancel it (brokers usually cap how long).',
        'Attached Order (10): an optional add-on that automatically places a follow-up order once your main one fills, for example a stop-loss (sell automatically if the price drops to a level, to cap losses) or a take-profit (sell automatically at a target gain). Useful later; keep it simple at first.',
        'Max Qty to Buy / Sell (11): the most shares you could trade given your available cash or holdings, essentially your buying power shown as a share count.',
        'Buy / Sell buttons (12): the final action. Buy is usually green, Sell usually red. Tapping commits the order.'
      ]
    },
    {
      type: 'p',
      text: 'One last thing on this screen: along the very bottom you will often see a small index ticker (13), for example the Dow Jones, scrolling the broad market level. It is the same idea as the market bar on the watchlist, a quick reminder of how the overall market is doing while you fill out your order. It has no effect on your trade; it is just ambient context.'
    },
    {
      type: 'note',
      text: 'Strong advice for beginners: prefer LIMIT orders so you control the price you pay rather than handing the market a blank check. Before you tap Buy, read the ticket back to yourself, right symbol, right quantity, right price, sensible amount. A two-second check prevents the most common and most painful beginner mistakes. And to be clear: this chapter is educational. It is not financial advice, and nothing here is a recommendation to buy or sell any particular security.'
    },
    {
      type: 'note',
      text: 'Images and figures referenced are illustrative; specific securities shown are examples, not recommendations.'
    }
  ]
};

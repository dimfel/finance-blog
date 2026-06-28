import { Chapter } from './content.types';

/** Home / welcome chapter — written by the manager during integration. */
export const homeChapter: Chapter = {
  id: 'home',
  order: 1,
  title: 'Welcome — How to Use This Guide',
  subtitle: 'A plain-language path from "what is a stock?" to confidently picking one yourself.',
  summary: {
    title: 'In this chapter',
    items: [
      'Who this guide is for, and the one promise it makes you.',
      'The 5-step path from total beginner to picking and valuing a stock.',
      'How each chapter is laid out so you always know the takeaways.',
      'A short word on mindset before you start.',
    ],
  },
  blocks: [
    {
      type: 'p',
      text: 'Welcome to Intrinsic Academy. This is a short, plain-spoken read-through for someone who has never bought a stock and is not sure where to begin. There is no jargon you will be expected to already know. Every term is defined the first time it appears, and each idea builds on the one before it.',
    },
    {
      type: 'p',
      text: 'The goal is simple but ambitious: by the end you should be able to look at almost any company, understand what it does, read its numbers, form your own opinion of what it is worth, and decide for yourself whether the current price is a fair deal. In other words, you will be able to pick stocks on your own rather than relying on tips, headlines, or hype.',
    },
    {
      type: 'h2',
      text: 'The one idea everything rests on',
    },
    {
      type: 'p',
      text: 'A share of stock is not a lottery ticket or a number on a screen. It is a small piece of ownership in a real business. So the question that runs through this entire guide is the same question a business owner would ask: "What is this company actually worth, and am I paying less than that?" The price the market quotes you, and the value the business is truly worth, are two different things. Learning to tell them apart is the whole skill.',
    },
    {
      type: 'note',
      text: 'Keep this sentence in your head the whole way through: price is what you pay, value is what you get. Most of investing is just learning to estimate value and then waiting for the price to be friendly.',
    },
    {
      type: 'h2',
      text: 'The 5-step path',
    },
    {
      type: 'p',
      text: 'The chapters are ordered deliberately. Read them top to bottom and each one will make the next easier. Here is the journey:',
    },
    {
      type: 'ol',
      items: [
        'Foundations — the language of investing: what a stock really is, how the market works, and the difference between investing and gambling.',
        'Reading Financial Statements — the three reports every company publishes, and how to read them without an accounting degree.',
        'Key Metrics & Ratios — the handful of numbers (P/E, ROE, margins, free cash flow and friends) that quickly tell you if a business is healthy.',
        'Intrinsic Value & Valuation — how to estimate what a company is genuinely worth using multiples and a simple discounted cash flow, plus moats and margin of safety.',
        'Putting it to work — reading a real stock app screen by screen, then a repeatable checklist you can run on any stock.',
      ],
    },
    {
      type: 'h2',
      text: 'How each chapter is built',
    },
    {
      type: 'p',
      text: 'Every chapter follows the same shape so you are never lost. At the top you will find a Summary box listing the key takeaways, so you can preview or review a chapter in ten seconds. Then comes the main explanation, broken into short sections with the occasional reference table. Longer, more detailed passages are shown in a slightly smaller font so the page stays calm and readable. At the very bottom you will find links to the previous and next chapter.',
    },
    {
      type: 'small',
      text: 'A practical tip on pace: you do not need to absorb everything in one sitting. The two chapters most people find genuinely new are Reading Financial Statements and Intrinsic Value & Valuation. If a passage feels heavy, read the Summary box, move on, and come back. Understanding compounds the same way money does, a little at a time. The two final chapters, Reading a Stock App and The Stock-Picking Checklist, are the most practical, and they pull every earlier idea together into something you can actually do on a Monday morning.',
    },
    {
      type: 'h2',
      text: 'A word on mindset',
    },
    {
      type: 'p',
      text: 'Good investing is slow, calm, and a little boring, and that is a feature, not a bug. You are not trying to predict tomorrow. You are trying to own good businesses bought at sensible prices and to hold them while they grow. That mindset, more than any single ratio, is what separates investors from speculators.',
    },
    {
      type: 'note',
      text: 'This guide is educational and is not financial advice. Nothing here is a recommendation to buy or sell any specific security. Always invest within your own risk tolerance, and when in doubt, learn first and act second.',
    },
    {
      type: 'p',
      text: 'Ready? Start with Foundations using the link below, or jump to any chapter from the sidebar.',
    },
  ],
};

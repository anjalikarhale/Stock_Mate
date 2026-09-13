import type { LearningWorld } from "../types/learning";

export const learningWorlds: LearningWorld[] = [
  // ============================================================
  // WORLD 1 — STOCK MARKET FOUNDATIONS
  // ============================================================
  {
    id: "world-1",
    title: "Stock Market Foundations",
    description:
      "Build your foundation and understand how the stock market actually works.",
    order: 1,
    locked: false,
    completed: false,

    lessons: [
      {
        id: "lesson-1",
        worldId: "world-1",
        title: "What is the Stock Market?",
        description:
          "Understand stocks, ownership and the basic purpose of the stock market.",
        concept: "Stock Market Basics",
        order: 1,
        xp: 100,
        completed: false,
       types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is a Stock?",
            content:
              "A stock represents ownership in a company. When you buy shares, you become a shareholder of that company.",
          },
          {
            title: "What is the Stock Market?",
            content:
              "The stock market is a marketplace where shares of publicly listed companies can be bought and sold.",
          },
          {
            title: "Why do Companies Issue Shares?",
            content:
              "Companies can raise capital by issuing shares to investors. Investors participate because they expect the company and their investment to potentially grow in value.",
          },
        ],

        game: {
  id: "game-stock-market-basics",
  title: "Market Mission: Your First Investment",
  description:
    "Use virtual money to make your first investment decision. Learn how buying shares creates ownership and how your portfolio changes when the stock price moves.",
  concept: "Stock Market Basics",
  type: "simulation",
},
      },

      {
        id: "lesson-2",
        worldId: "world-1",
        prerequisiteLessonId: "lesson-1",
        title: "How Buying and Selling Works",
        description:
          "Learn what actually happens when an investor buys or sells shares.",
        concept: "Buying and Selling",
        order: 2,
        xp: 100,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Buying a Stock",
            content:
              "Investors buy shares through a broker or trading platform. The order is sent to the market for execution.",
          },
          {
            title: "Selling a Stock",
            content:
              "Selling means giving up ownership of the shares in exchange for the applicable execution price.",
          },
          {
            title: "Your First Trading Decision",
            content:
              "Before making a decision, investors should consider the company, price, risk and investment objective.",
          },
        ],
        game: {
          id: "game-first-trade",
          title: "Your First Trade",
          description:
            "Make your first virtual investment and see how buying and selling affects your portfolio.",
          concept: "Buy and Sell",
          type: "decision",
        },
      },

      {
        id: "lesson-3",
        worldId: "world-1",
        prerequisiteLessonId: "lesson-2",
        title: "Stock Exchanges and Market Participants",
        description:
          "Understand exchanges, brokers, investors and other important market participants.",
        concept: "Market Structure",
        order: 3,
        xp: 100,
        completed: false,
        types: ["theory", "interactive", "quiz"],
        sections: [
          {
            title: "Stock Exchanges",
            content:
              "Stock exchanges provide an organized marketplace where securities can be traded according to established rules.",
          },
          {
            title: "Market Participants",
            content:
              "Markets involve retail investors, institutional investors, brokers, companies, regulators and other participants.",
          },
          {
            title: "The Market Ecosystem",
            content:
              "Different participants perform different roles that help the securities market function efficiently.",
          },
        ],
      },

      {
        id: "lesson-4",
        worldId: "world-1",
        prerequisiteLessonId: "lesson-3",
        title: "IPO and Primary Market",
        description:
          "Learn how companies raise money through the primary market and IPOs.",
        concept: "Primary Market",
        order: 4,
        xp: 125,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Primary Market",
            content:
              "The primary market is where new securities are issued and capital is raised.",
          },
          {
            title: "IPO",
            content:
              "An Initial Public Offering is a process through which a company offers its shares to the public for the first time.",
          },
          {
            title: "Primary vs Secondary Market",
            content:
              "In the primary market, securities are issued by the company. In the secondary market, investors trade securities with one another.",
          },
        ],
        game: {
          id: "game-ipo-launch",
          title: "IPO Launch",
          description:
            "Evaluate a fictional IPO and decide whether its business, valuation and risk justify participation.",
          concept: "IPO and Primary Market",
          type: "decision",
        },
      },

      {
        id: "lesson-5",
        worldId: "world-1",
        prerequisiteLessonId: "lesson-4",
        title: "Demat, Trading Account and Broker",
        description:
          "Understand the basic accounts and infrastructure required to participate in the market.",
        concept: "Trading Infrastructure",
        order: 5,
        xp: 100,
        completed: false,
        types: ["theory", "interactive", "quiz"],
        sections: [
          {
            title: "Demat Account",
            content:
              "A demat account is used to hold securities in electronic form.",
          },
          {
            title: "Trading Account",
            content:
              "A trading account is used to place transactions for buying and selling securities.",
          },
          {
            title: "Broker",
            content:
              "A broker provides access to market trading infrastructure and related services.",
          },
        ],
      },

      {
        id: "lesson-6",
        worldId: "world-1",
        prerequisiteLessonId: "lesson-5",
        title: "Market Orders and Limit Orders",
        description:
          "Learn the difference between common order types and when they are used.",
        concept: "Order Types",
        order: 6,
        xp: 125,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Market Order",
            content:
              "A market order attempts to execute at the best available price in the market.",
          },
          {
            title: "Limit Order",
            content:
              "A limit order specifies the maximum price acceptable for a buy or minimum price acceptable for a sell.",
          },
          {
            title: "Order Decision",
            content:
              "Different order types have different execution and price-control characteristics.",
          },
        ],
        game: {
          id: "game-order-master",
          title: "Order Master",
          description:
            "Choose the appropriate order type for different market situations.",
          concept: "Order Types",
          type: "decision",
        },
      },
    ],
  },

  // ============================================================
  // WORLD 2 — SMART INVESTING
  // ============================================================
  {
    id: "world-2",
    title: "Smart Investing",
    description:
      "Learn how risk, return, compounding and diversification shape investment decisions.",
    order: 2,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-7",
        worldId: "world-2",
        title: "Investing vs Trading",
        description:
          "Understand the difference between investing for the long term and shorter-term trading.",
        concept: "Investing vs Trading",
        order: 1,
        xp: 125,
        completed: false,
        types: ["theory", "interactive", "quiz"],
        sections: [
          {
            title: "Investing",
            content:
              "Investing generally focuses on owning assets with a longer-term objective based on business growth, income or portfolio goals.",
          },
          {
            title: "Trading",
            content:
              "Trading generally focuses on shorter-term price movements and planned entry and exit decisions.",
          },
          {
            title: "Choosing Your Approach",
            content:
              "The appropriate approach depends on objectives, time horizon, risk tolerance and knowledge.",
          },
        ],
      },

      {
        id: "lesson-8",
        worldId: "world-2",
        prerequisiteLessonId: "lesson-7",
        title: "Risk and Return",
        description:
          "Understand why potential return and investment risk are closely connected.",
        concept: "Risk and Return",
        order: 2,
        xp: 150,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is Risk?",
            content:
              "Investment risk is the possibility that actual results differ from expectations, including the possibility of losing money.",
          },
          {
            title: "What is Return?",
            content:
              "Return represents the gain or loss generated by an investment over a period.",
          },
          {
            title: "Risk-Return Tradeoff",
            content:
              "Investments with greater uncertainty may offer greater potential returns, but higher potential return does not guarantee higher actual returns.",
          },
        ],
        game: {
          id: "game-risk-commander",
          title: "Risk Commander",
          description:
            "Choose between different investments and experience different risk and return outcomes.",
          concept: "Risk and Return",
          type: "decision",
        },
      },

      {
        id: "lesson-9",
        worldId: "world-2",
        prerequisiteLessonId: "lesson-8",
        title: "Compounding and Time",
        description:
          "Discover how reinvestment and time can influence wealth creation.",
        concept: "Compounding",
        order: 3,
        xp: 150,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Simple Growth",
            content:
              "Simple growth calculates returns without repeatedly adding previous returns to the investment base.",
          },
          {
            title: "Compound Growth",
            content:
              "Compounding occurs when returns are reinvested and future returns can build on previous returns.",
          },
          {
            title: "Time Advantage",
            content:
              "A longer investment horizon can give compounding more time to work, although actual returns are never guaranteed.",
          },
        ],
      },

      {
        id: "lesson-10",
        worldId: "world-2",
        prerequisiteLessonId: "lesson-9",
        title: "Inflation and Purchasing Power",
        description:
          "Understand why earning a return is not the same as increasing real purchasing power.",
        concept: "Inflation",
        order: 4,
        xp: 125,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "What is Inflation?",
            content:
              "Inflation represents a general increase in prices over time.",
          },
          {
            title: "Purchasing Power",
            content:
              "When prices rise, the amount of goods and services that the same amount of money can purchase may decline.",
          },
          {
            title: "Real vs Nominal Return",
            content:
              "A nominal investment return does not automatically represent the increase in purchasing power after considering inflation.",
          },
        ],
      },

      {
        id: "lesson-11",
        worldId: "world-2",
        prerequisiteLessonId: "lesson-10",
        title: "Diversification",
        description:
          "Learn why spreading investments can reduce concentration risk.",
        concept: "Diversification",
        order: 5,
        xp: 150,
        completed: false,
        types: ["theory", "interactive", "game", "simulation", "quiz"],
        sections: [
          {
            title: "What is Diversification?",
            content:
              "Diversification means spreading investments across different securities, sectors or asset categories.",
          },
          {
            title: "Why Diversify?",
            content:
              "Different investments may respond differently to market events, reducing dependence on a single investment.",
          },
          {
            title: "Concentration Risk",
            content:
              "A portfolio heavily dependent on one company, sector or asset can experience greater impact from a negative event affecting that area.",
          },
        ],
        game: {
          id: "game-portfolio-builder",
          title: "Portfolio Builder",
          description:
            "Build a virtual portfolio and experience different market scenarios to understand diversification.",
          concept: "Diversification",
          type: "strategy",
        },
      },

      {
        id: "lesson-12",
        worldId: "world-2",
        prerequisiteLessonId: "lesson-11",
        title: "Asset Allocation",
        description:
          "Learn how investors divide capital across different asset categories.",
        concept: "Asset Allocation",
        order: 6,
        xp: 150,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is Asset Allocation?",
            content:
              "Asset allocation is the process of deciding how capital should be distributed among different asset classes.",
          },
          {
            title: "Risk Profile",
            content:
              "An allocation should consider the investor's objectives, time horizon and tolerance for risk.",
          },
          {
            title: "Rebalancing",
            content:
              "Portfolio weights can change as asset prices move, so investors may periodically review and rebalance their intended allocation.",
          },
        ],
        game: {
          id: "game-allocation-architect",
          title: "Allocation Architect",
          description:
            "Construct portfolios for different investor profiles and observe how market events affect each allocation.",
          concept: "Asset Allocation",
          type: "strategy",
        },
      },
    ],
  },

  // ============================================================
  // WORLD 3 — FUNDAMENTAL ANALYSIS
  // ============================================================
  {
    id: "world-3",
    title: "Fundamental Analysis",
    description:
      "Learn how investors study businesses, financial statements, industries and valuation.",
    order: 3,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-13",
        worldId: "world-3",
        title: "Introduction to Fundamental Analysis",
        description:
          "Learn how investors evaluate the underlying strength of a company.",
        concept: "Fundamental Analysis",
        order: 1,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is Fundamental Analysis?",
            content:
              "Fundamental analysis involves studying a company's business, financial performance, industry and other factors to assess its value and prospects.",
          },
          {
            title: "Business Quality",
            content:
              "Investors can study a company's products, customers, competitive position, growth opportunities and risks.",
          },
          {
            title: "Investment Decision",
            content:
              "Fundamental analysis provides information for decision-making but cannot guarantee future investment performance.",
          },
        ],
        game: {
          id: "game-company-detective",
          title: "Company Detective",
          description:
            "Investigate a company using business and financial clues before making an investment decision.",
          concept: "Fundamental Analysis",
          type: "analysis",
        },
      },

      {
        id: "lesson-14",
        worldId: "world-3",
        prerequisiteLessonId: "lesson-13",
        title: "Understanding the Income Statement",
        description:
          "Learn revenue, expenses, operating profit and net profit.",
        concept: "Income Statement",
        order: 2,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Revenue",
            content:
              "Revenue represents the income generated from a company's business activities.",
          },
          {
            title: "Expenses and Profit",
            content:
              "A company incurs different costs while operating. Profit represents the amount remaining after relevant expenses.",
          },
          {
            title: "Profitability",
            content:
              "Studying changes in revenue and profit can help investors understand business growth and operating performance.",
          },
        ],
      },

      {
        id: "lesson-15",
        worldId: "world-3",
        prerequisiteLessonId: "lesson-14",
        title: "Balance Sheet",
        description:
          "Understand assets, liabilities and shareholders' equity.",
        concept: "Balance Sheet",
        order: 3,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "quiz"],
        sections: [
          {
            title: "Assets",
            content:
              "Assets are resources controlled by a company that have economic value.",
          },
          {
            title: "Liabilities",
            content:
              "Liabilities represent obligations that the company needs to settle.",
          },
          {
            title: "Equity",
            content:
              "Shareholders' equity represents the residual interest in the company's assets after liabilities.",
          },
        ],
      },

      {
        id: "lesson-16",
        worldId: "world-3",
        prerequisiteLessonId: "lesson-15",
        title: "Cash Flow Statement",
        description:
          "Learn why cash generation matters even when a company reports accounting profits.",
        concept: "Cash Flow",
        order: 4,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Operating Cash Flow",
            content:
              "Operating cash flow relates to cash generated or used by the company's core operations.",
          },
          {
            title: "Investing Cash Flow",
            content:
              "Investing cash flow includes cash movements related to investments and long-term assets.",
          },
          {
            title: "Financing Cash Flow",
            content:
              "Financing cash flow relates to activities involving capital providers, such as borrowing, repayment or equity financing.",
          },
        ],
        game: {
          id: "game-cashflow-survival",
          title: "Cash Flow Survival",
          description:
            "Manage a company's cash position while handling operations, investments and financing decisions.",
          concept: "Cash Flow",
          type: "strategy",
        },
      },

      {
        id: "lesson-17",
        worldId: "world-3",
        prerequisiteLessonId: "lesson-16",
        title: "Financial Ratios",
        description:
          "Learn how ratios help compare profitability, efficiency, leverage and valuation.",
        concept: "Financial Ratios",
        order: 5,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Profitability Ratios",
            content:
              "Profitability ratios help evaluate how efficiently a company generates profit relative to relevant financial measures.",
          },
          {
            title: "ROE and ROCE",
            content:
              "Return on Equity and Return on Capital Employed are commonly used measures for evaluating returns generated relative to capital bases.",
          },
          {
            title: "Margins",
            content:
              "Margins help investors understand how much revenue remains at different stages after considering costs.",
          },
        ],
        game: {
          id: "game-ratio-racer",
          title: "Ratio Racer",
          description:
            "Compare companies using financial ratios and identify strengths and weaknesses.",
          concept: "Financial Ratios",
          type: "analysis",
        },
      },

      {
        id: "lesson-18",
        worldId: "world-3",
        prerequisiteLessonId: "lesson-17",
        title: "EPS and Valuation",
        description:
          "Understand earnings per share and common valuation concepts.",
        concept: "EPS and Valuation",
        order: 6,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "EPS",
            content:
              "Earnings per share expresses a company's earnings attributable to each share according to the relevant calculation.",
          },
          {
            title: "P/E Ratio",
            content:
              "The price-to-earnings ratio compares a company's market price with its earnings per share.",
          },
          {
            title: "Valuation is Relative",
            content:
              "A valuation ratio should be interpreted in context, including growth, profitability, industry conditions and comparable companies.",
          },
        ],
        game: {
          id: "game-valuation-detective",
          title: "Valuation Detective",
          description:
            "Compare companies using earnings, growth and valuation clues instead of blindly choosing the cheapest stock.",
          concept: "Valuation",
          type: "analysis",
        },
      },

      {
        id: "lesson-19",
        worldId: "world-3",
        prerequisiteLessonId: "lesson-18",
        title: "Industry and Economic Analysis",
        description:
          "Learn how industries and the wider economy can affect companies.",
        concept: "Industry Analysis",
        order: 7,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Industry Structure",
            content:
              "Investors can examine competition, demand, regulation, suppliers and barriers to entry.",
          },
          {
            title: "Economic Factors",
            content:
              "Interest rates, inflation, economic growth and other macroeconomic conditions can influence businesses and markets.",
          },
          {
            title: "Business Cycle",
            content:
              "Different industries may perform differently during different stages of the economic cycle.",
          },
        ],
      },

      {
        id: "lesson-20",
        worldId: "world-3",
        prerequisiteLessonId: "lesson-19",
        title: "Management and Company Quality",
        description:
          "Learn how qualitative factors can complement financial analysis.",
        concept: "Management Analysis",
        order: 8,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Management",
            content:
              "Management quality can be evaluated through factors such as strategy, execution, governance and capital allocation.",
          },
          {
            title: "Competitive Advantage",
            content:
              "A sustainable competitive advantage can help a company maintain its position over time.",
          },
          {
            title: "Research Mindset",
            content:
              "Strong analysis combines quantitative information with qualitative investigation and critical thinking.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // WORLD 4 — TECHNICAL ANALYSIS
  // ============================================================
  {
    id: "world-4",
    title: "Technical Analysis",
    description:
      "Learn how traders study price, volume, trends and indicators using charts.",
    order: 4,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-21",
        worldId: "world-4",
        title: "Reading Price Charts",
        description:
          "Understand how price data is displayed on charts.",
        concept: "Price Charts",
        order: 1,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "OHLC",
            content:
              "OHLC represents Open, High, Low and Close prices for a selected time period.",
          },
          {
            title: "Timeframes",
            content:
              "Charts can display price movement across different time intervals, from short periods to longer periods.",
          },
          {
            title: "Price Action",
            content:
              "Price action refers to the study of how price moves over time.",
          },
        ],
      },

      {
        id: "lesson-22",
        worldId: "world-4",
        prerequisiteLessonId: "lesson-21",
        title: "Candlestick Charts",
        description:
          "Learn how candlesticks communicate open, high, low and close prices.",
        concept: "Candlesticks",
        order: 2,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Anatomy of a Candlestick",
            content:
              "A candlestick displays the open, high, low and close price for a selected period.",
          },
          {
            title: "Body and Wicks",
            content:
              "The candle body represents the relationship between opening and closing prices, while the wicks show the high and low reached during the period.",
          },
          {
            title: "Reading Price Behaviour",
            content:
              "Candlesticks can provide information about buying and selling behaviour, but individual patterns do not guarantee future price movement.",
          },
        ],
        game: {
          id: "game-chart-detective",
          title: "Chart Detective",
          description:
            "Analyze historical charts, identify candlestick behaviour and discover what happened next.",
          concept: "Candlestick Analysis",
          type: "analysis",
        },
      },

      {
        id: "lesson-23",
        worldId: "world-4",
        prerequisiteLessonId: "lesson-22",
        title: "Trends and Support & Resistance",
        description:
          "Learn how traders identify market direction and important price zones.",
        concept: "Trends and Levels",
        order: 3,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Uptrend",
            content:
              "An uptrend generally describes a sequence of rising price structure.",
          },
          {
            title: "Downtrend",
            content:
              "A downtrend generally describes a sequence of declining price structure.",
          },
          {
            title: "Support and Resistance",
            content:
              "Support and resistance are price areas where buying or selling pressure may become significant.",
          },
        ],
        game: {
          id: "game-level-hunter",
          title: "Level Hunter",
          description:
            "Find important support and resistance zones on historical charts.",
          concept: "Support and Resistance",
          type: "analysis",
        },
      },

      {
        id: "lesson-24",
        worldId: "world-4",
        prerequisiteLessonId: "lesson-23",
        title: "Chart Patterns",
        description:
          "Learn common chart structures and how traders interpret them.",
        concept: "Chart Patterns",
        order: 4,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Reversal Patterns",
            content:
              "Some chart structures are studied as possible signs of changing market direction.",
          },
          {
            title: "Continuation Patterns",
            content:
              "Some structures are studied as possible temporary pauses within an existing trend.",
          },
          {
            title: "Pattern Confirmation",
            content:
              "Patterns should be interpreted with context rather than treated as guaranteed predictions.",
          },
        ],
      },

      {
        id: "lesson-25",
        worldId: "world-4",
        prerequisiteLessonId: "lesson-24",
        title: "Moving Averages",
        description:
          "Understand how moving averages can help identify trends.",
        concept: "Moving Averages",
        order: 5,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Simple Moving Average",
            content:
              "A simple moving average calculates the average price over a selected number of periods.",
          },
          {
            title: "Exponential Moving Average",
            content:
              "An exponential moving average gives greater weight to more recent observations.",
          },
          {
            title: "Using Moving Averages",
            content:
              "Moving averages can help visualize trend direction and are often combined with other forms of analysis.",
          },
        ],
      },

      {
        id: "lesson-26",
        worldId: "world-4",
        prerequisiteLessonId: "lesson-25",
        title: "RSI and Momentum",
        description:
          "Learn how momentum indicators are used to study price behaviour.",
        concept: "RSI",
        order: 6,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is RSI?",
            content:
              "The Relative Strength Index is a momentum oscillator commonly used to study the strength and speed of price movements.",
          },
          {
            title: "Overbought and Oversold",
            content:
              "RSI levels are often interpreted as potential overbought or oversold conditions, but these readings should not be treated as automatic buy or sell signals.",
          },
          {
            title: "Momentum",
            content:
              "Momentum analysis attempts to understand the strength and persistence of price movement.",
          },
        ],
        game: {
          id: "game-momentum-master",
          title: "Momentum Master",
          description:
            "Analyze price and RSI together and decide whether momentum is strengthening or weakening.",
          concept: "Momentum",
          type: "analysis",
        },
      },

      {
        id: "lesson-27",
        worldId: "world-4",
        prerequisiteLessonId: "lesson-26",
        title: "Bollinger Bands and Volatility",
        description:
          "Understand volatility and how Bollinger Bands visualize it.",
        concept: "Volatility",
        order: 7,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Volatility",
            content:
              "Volatility describes the degree to which prices fluctuate over time.",
          },
          {
            title: "Bollinger Bands",
            content:
              "Bollinger Bands use a moving average and measures of variability to create dynamic upper and lower bands.",
          },
          {
            title: "Volatility Expansion",
            content:
              "Changes in band width can help traders visualize changing volatility conditions.",
          },
        ],
      },

      {
        id: "lesson-28",
        worldId: "world-4",
        prerequisiteLessonId: "lesson-27",
        title: "Volume and Market Confirmation",
        description:
          "Learn how trading volume can provide additional context to price movement.",
        concept: "Volume Analysis",
        order: 8,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is Volume?",
            content:
              "Trading volume represents the number of units or contracts traded during a specified period, depending on the market.",
          },
          {
            title: "Price and Volume",
            content:
              "Traders may compare price movement with volume to evaluate the strength or confirmation of a move.",
          },
          {
            title: "Context Matters",
            content:
              "Volume should be interpreted alongside price behaviour and the characteristics of the particular security and market.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // WORLD 5 — TRADING & RISK MANAGEMENT
  // ============================================================
  {
    id: "world-5",
    title: "Trading and Risk Management",
    description:
      "Build disciplined trading skills using position sizing, stop-losses and risk-reward planning.",
    order: 5,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-29",
        worldId: "world-5",
        title: "Building a Trading Plan",
        description:
          "Learn why traders need rules before entering a position.",
        concept: "Trading Plan",
        order: 1,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Entry",
            content:
              "A trading plan should define the conditions under which a trader considers entering a position.",
          },
          {
            title: "Exit",
            content:
              "A plan should also define conditions for taking profits or limiting losses.",
          },
          {
            title: "Rules",
            content:
              "Written rules can reduce impulsive decisions and make trading behaviour easier to evaluate.",
          },
        ],
      },

      {
        id: "lesson-30",
        worldId: "world-5",
        prerequisiteLessonId: "lesson-29",
        title: "Position Sizing",
        description:
          "Learn how position size can be determined based on acceptable risk.",
        concept: "Position Sizing",
        order: 2,
        xp: 225,
        completed: false,
        types: ["theory", "interactive", "game", "simulation", "quiz"],
        sections: [
          {
            title: "Risk Per Trade",
            content:
              "Traders can define the amount of capital they are willing to risk on an individual trade.",
          },
          {
            title: "Position Size",
            content:
              "Position size can be adjusted according to the distance between entry and the planned stop-loss.",
          },
          {
            title: "Why Position Size Matters",
            content:
              "Even a good trading idea can produce excessive losses if the position is too large.",
          },
        ],
        game: {
          id: "game-risk-commander-advanced",
          title: "Risk Commander Pro",
          description:
            "Set your entry, stop-loss and position size while staying within a defined risk budget.",
          concept: "Position Sizing",
          type: "strategy",
        },
      },

      {
        id: "lesson-31",
        worldId: "world-5",
        prerequisiteLessonId: "lesson-30",
        title: "Stop-Loss and Risk Control",
        description:
          "Understand how predefined loss limits can be incorporated into a trading plan.",
        concept: "Stop-Loss",
        order: 3,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Stop-Loss",
            content:
              "A stop-loss approach defines a price or condition at which a trader intends to exit to limit a planned loss.",
          },
          {
            title: "Risk Control",
            content:
              "Risk management aims to control the amount of capital exposed to adverse outcomes.",
          },
          {
            title: "No Guaranteed Protection",
            content:
              "Execution conditions can vary, especially during fast-moving or illiquid markets, so risk controls do not eliminate all risk.",
          },
        ],
      },

      {
        id: "lesson-32",
        worldId: "world-5",
        prerequisiteLessonId: "lesson-31",
        title: "Risk-Reward Ratio",
        description:
          "Learn how traders compare potential reward with planned risk.",
        concept: "Risk Reward",
        order: 4,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Risk",
            content:
              "Risk represents the amount a trader plans to lose if the trade moves against the intended setup.",
          },
          {
            title: "Reward",
            content:
              "Reward represents the potential gain targeted by the trading plan.",
          },
          {
            title: "Probability Matters",
            content:
              "A favourable risk-reward relationship does not guarantee profitability because trade outcomes and probabilities still matter.",
          },
        ],
        game: {
          id: "game-risk-reward-arena",
          title: "Risk-Reward Arena",
          description:
            "Choose between trading setups and discover how reward, risk and probability interact.",
          concept: "Risk Reward",
          type: "decision",
        },
      },

      {
        id: "lesson-33",
        worldId: "world-5",
        prerequisiteLessonId: "lesson-32",
        title: "Swing Trading",
        description:
          "Understand the basic framework of holding positions for multi-day or multi-week price movements.",
        concept: "Swing Trading",
        order: 5,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Swing Trading",
            content:
              "Swing trading generally attempts to capture shorter-to-medium-term price movements.",
          },
          {
            title: "Setup",
            content:
              "A swing trading setup may combine trend, support/resistance, momentum and risk management.",
          },
          {
            title: "Trade Management",
            content:
              "A planned entry, exit and position size are important components of managing a swing trade.",
          },
        ],
      },

      {
        id: "lesson-34",
        worldId: "world-5",
        prerequisiteLessonId: "lesson-33",
        title: "Drawdown and Capital Protection",
        description:
          "Learn why surviving losing periods is a critical trading skill.",
        concept: "Drawdown",
        order: 6,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Drawdown",
            content:
              "Drawdown measures a decline in portfolio or account value from a previous high point.",
          },
          {
            title: "Capital Protection",
            content:
              "Managing losses helps preserve capital for future opportunities.",
          },
          {
            title: "Recovery Mathematics",
            content:
              "Large losses require disproportionately larger gains to recover, making loss control an important part of risk management.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // WORLD 6 — TRADING PSYCHOLOGY
  // ============================================================
  {
    id: "world-6",
    title: "Trading Psychology",
    description:
      "Master the emotional and behavioural challenges that influence financial decisions.",
    order: 6,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-35",
        worldId: "world-6",
        title: "Fear and Greed",
        description:
          "Understand how emotions can influence market decisions.",
        concept: "Fear and Greed",
        order: 1,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Fear",
            content:
              "Fear can cause investors or traders to exit positions too quickly or avoid opportunities without sufficient analysis.",
          },
          {
            title: "Greed",
            content:
              "Greed can encourage excessive risk-taking or unrealistic expectations.",
          },
          {
            title: "Discipline",
            content:
              "A predefined process can help reduce emotional decision-making.",
          },
        ],
        game: {
          id: "game-traders-mind",
          title: "Trader's Mind",
          description:
            "Face emotional market situations and choose disciplined responses.",
          concept: "Trading Psychology",
          type: "decision",
        },
      },

      {
        id: "lesson-36",
        worldId: "world-6",
        prerequisiteLessonId: "lesson-35",
        title: "FOMO and Herd Behaviour",
        description:
          "Learn why following the crowd can lead to poor decisions.",
        concept: "FOMO",
        order: 2,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "FOMO",
            content:
              "Fear of missing out can cause people to enter investments without sufficient research because prices are moving quickly.",
          },
          {
            title: "Herd Behaviour",
            content:
              "Herd behaviour occurs when individuals follow the actions of others instead of independently evaluating information.",
          },
          {
            title: "Independent Thinking",
            content:
              "A structured decision process can help separate evidence from market excitement.",
          },
        ],
      },

      {
        id: "lesson-37",
        worldId: "world-6",
        prerequisiteLessonId: "lesson-36",
        title: "Loss Aversion and Panic Selling",
        description:
          "Understand why losses can influence decisions differently from gains.",
        concept: "Loss Aversion",
        order: 3,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Loss Aversion",
            content:
              "People may experience losses as more psychologically significant than equivalent gains.",
          },
          {
            title: "Panic Selling",
            content:
              "Panic can lead to decisions made primarily to escape discomfort rather than according to an investment plan.",
          },
          {
            title: "Process Over Emotion",
            content:
              "Decision rules and predefined risk limits can help investors respond more consistently.",
          },
        ],
      },

      {
        id: "lesson-38",
        worldId: "world-6",
        prerequisiteLessonId: "lesson-37",
        title: "Overtrading and Revenge Trading",
        description:
          "Learn how repeated emotional trades can damage performance.",
        concept: "Overtrading",
        order: 4,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Overtrading",
            content:
              "Overtrading involves taking more trades than justified by a trader's strategy or plan.",
          },
          {
            title: "Revenge Trading",
            content:
              "Revenge trading occurs when a trader attempts to recover losses through emotionally driven trades.",
          },
          {
            title: "Trading Discipline",
            content:
              "Knowing when not to trade is an important part of risk management.",
          },
        ],
        game: {
          id: "game-discipline-challenge",
          title: "Discipline Challenge",
          description:
            "Survive a sequence of wins and losses without breaking your trading rules.",
          concept: "Trading Discipline",
          type: "decision",
        },
      },
    ],
  },

  // ============================================================
  // WORLD 7 — MUTUAL FUNDS & ETFs
  // ============================================================
  {
    id: "world-7",
    title: "Mutual Funds and ETFs",
    description:
      "Understand pooled investments, index investing and exchange-traded funds.",
    order: 7,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-39",
        worldId: "world-7",
        title: "What are Mutual Funds?",
        description:
          "Learn how mutual funds pool money from multiple investors.",
        concept: "Mutual Funds",
        order: 1,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "quiz"],
        sections: [
          {
            title: "Pooled Investment",
            content:
              "A mutual fund pools money from multiple investors and invests according to its stated strategy.",
          },
          {
            title: "Fund Management",
            content:
              "Funds are managed according to their investment mandate and strategy.",
          },
          {
            title: "Diversification",
            content:
              "A fund can provide exposure to multiple securities depending on its investment objective.",
          },
        ],
      },

      {
        id: "lesson-40",
        worldId: "world-7",
        prerequisiteLessonId: "lesson-39",
        title: "NAV and Expense Ratio",
        description:
          "Understand important mutual fund concepts used by investors.",
        concept: "NAV",
        order: 2,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "quiz"],
        sections: [
          {
            title: "NAV",
            content:
              "Net Asset Value represents the value per unit of a mutual fund based on the value of its assets and liabilities according to applicable methodology.",
          },
          {
            title: "Expense Ratio",
            content:
              "The expense ratio represents expenses charged for managing and operating a fund.",
          },
          {
            title: "Comparing Funds",
            content:
              "Investors should evaluate funds using multiple factors rather than relying on a single metric.",
          },
        ],
      },

      {
        id: "lesson-41",
        worldId: "world-7",
        prerequisiteLessonId: "lesson-40",
        title: "SIP and Long-Term Investing",
        description:
          "Understand systematic investing and disciplined contributions.",
        concept: "SIP",
        order: 3,
        xp: 175,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Systematic Investment",
            content:
              "A systematic investment approach involves investing a predetermined amount at regular intervals.",
          },
          {
            title: "Consistency",
            content:
              "Regular contributions can create an investment habit and provide exposure across different market conditions.",
          },
          {
            title: "No Guaranteed Return",
            content:
              "Systematic investing does not eliminate market risk and does not guarantee profits.",
          },
        ],
        game: {
          id: "game-sip-journey",
          title: "SIP Journey",
          description:
            "Manage regular investments across changing market conditions and observe the long-term effect.",
          concept: "Systematic Investing",
          type: "simulation",
        },
      },

      {
        id: "lesson-42",
        worldId: "world-7",
        prerequisiteLessonId: "lesson-41",
        title: "ETFs and Index Investing",
        description:
          "Learn how ETFs and index strategies provide market exposure.",
        concept: "ETFs",
        order: 4,
        xp: 200,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is an ETF?",
            content:
              "An exchange-traded fund is a pooled investment vehicle whose units trade on an exchange.",
          },
          {
            title: "Index Investing",
            content:
              "Index strategies generally seek to track the performance of a specified market index.",
          },
          {
            title: "ETF vs Individual Stock",
            content:
              "An ETF can provide exposure to a basket of securities, while an individual stock represents exposure to a particular company.",
          },
        ],
        game: {
          id: "game-index-builder",
          title: "Index Builder",
          description:
            "Construct and compare portfolios to understand how index-based investing works.",
          concept: "Index Investing",
          type: "strategy",
        },
      },
    ],
  },

  // ============================================================
  // WORLD 8 — DERIVATIVES & OPTIONS
  // ============================================================
  {
    id: "world-8",
    title: "Derivatives and Options",
    description:
      "Understand futures, options, calls, puts, premiums, expiry and derivatives risk.",
    order: 8,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-43",
        worldId: "world-8",
        title: "Introduction to Derivatives",
        description:
          "Understand what derivatives are and why they are used.",
        concept: "Derivatives",
        order: 1,
        xp: 225,
        completed: false,
        types: ["theory", "interactive", "quiz"],
        sections: [
          {
            title: "What is a Derivative?",
            content:
              "A derivative is a financial contract whose value is linked to an underlying asset or reference.",
          },
          {
            title: "Uses",
            content:
              "Derivatives can be used for hedging, speculation and other financial purposes.",
          },
          {
            title: "Risk",
            content:
              "Derivatives can involve significant risk and leverage, making risk management particularly important.",
          },
        ],
      },

      {
        id: "lesson-44",
        worldId: "world-8",
        prerequisiteLessonId: "lesson-43",
        title: "Futures Contracts",
        description:
          "Learn the basic mechanics of futures contracts.",
        concept: "Futures",
        order: 2,
        xp: 225,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Futures",
            content:
              "A futures contract creates an obligation associated with buying or selling an underlying according to specified contract terms.",
          },
          {
            title: "Leverage",
            content:
              "Futures can provide exposure larger than the initial capital deposited, which can amplify both gains and losses.",
          },
          {
            title: "Margin",
            content:
              "Participants are generally required to maintain margin according to applicable market rules.",
          },
        ],
        game: {
          id: "game-futures-arena",
          title: "Futures Arena",
          description:
            "Experience how changes in an underlying asset can affect a leveraged futures position.",
          concept: "Futures",
          type: "simulation",
        },
      },

      {
        id: "lesson-45",
        worldId: "world-8",
        prerequisiteLessonId: "lesson-44",
        title: "Calls and Puts",
        description:
          "Understand the two basic types of options.",
        concept: "Call and Put Options",
        order: 3,
        xp: 225,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Call Option",
            content:
              "A call option generally gives the buyer the right, but not the obligation, to buy the underlying at specified terms.",
          },
          {
            title: "Put Option",
            content:
              "A put option generally gives the buyer the right, but not the obligation, to sell the underlying at specified terms.",
          },
          {
            title: "Option Buyer and Seller",
            content:
              "The rights and obligations of option buyers and sellers are different, creating different risk profiles.",
          },
        ],
        game: {
          id: "game-options-lab",
          title: "Options Lab",
          description:
            "Experiment with calls and puts and observe how different market outcomes affect positions.",
          concept: "Options",
          type: "simulation",
        },
      },

      {
        id: "lesson-46",
        worldId: "world-8",
        prerequisiteLessonId: "lesson-45",
        title: "Strike Price, Premium and Expiry",
        description:
          "Learn the essential components of an options contract.",
        concept: "Option Contract",
        order: 4,
        xp: 225,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Strike Price",
            content:
              "The strike price is the specified price at which the option's underlying transaction is defined.",
          },
          {
            title: "Premium",
            content:
              "The premium is the price paid by the option buyer to acquire the option.",
          },
          {
            title: "Expiry",
            content:
              "Options have defined expiration terms after which the contract is handled according to its specifications and applicable rules.",
          },
        ],
      },

      {
        id: "lesson-47",
        worldId: "world-8",
        prerequisiteLessonId: "lesson-46",
        title: "Intrinsic Value and Time Value",
        description:
          "Understand the major components that influence an option's premium.",
        concept: "Option Value",
        order: 5,
        xp: 225,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Intrinsic Value",
            content:
              "Intrinsic value represents the value an option would have based on its immediate exercise value under the relevant definition.",
          },
          {
            title: "Time Value",
            content:
              "Time value reflects the possibility that the option may gain additional value before expiry.",
          },
          {
            title: "Time Decay",
            content:
              "As expiry approaches, the time component of an option's value can decline, all else equal.",
          },
        ],
      },

      {
        id: "lesson-48",
        worldId: "world-8",
        prerequisiteLessonId: "lesson-47",
        title: "Open Interest and Implied Volatility",
        description:
          "Learn two important concepts used when analysing options markets.",
        concept: "OI and IV",
        order: 6,
        xp: 250,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Open Interest",
            content:
              "Open interest represents the number of outstanding derivative contracts according to the applicable market methodology.",
          },
          {
            title: "Implied Volatility",
            content:
              "Implied volatility is a market-derived measure related to expected future volatility embedded in option prices.",
          },
          {
            title: "Reading the Options Chain",
            content:
              "Traders can study strike prices, premiums, open interest and implied volatility together to understand market positioning.",
          },
        ],
        game: {
          id: "game-options-chain",
          title: "Options Chain Detective",
          description:
            "Analyse an options chain and identify how strike, premium, OI and volatility interact.",
          concept: "Options Chain",
          type: "analysis",
        },
      },
    ],
  },

  // ============================================================
  // WORLD 9 — ADVANCED STRATEGIES
  // ============================================================
  {
    id: "world-9",
    title: "Advanced Strategies",
    description:
      "Explore portfolio construction, hedging, backtesting and systematic decision-making.",
    order: 9,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-49",
        worldId: "world-9",
        title: "Portfolio Construction",
        description:
          "Learn how to combine investments into a portfolio based on objectives and risk.",
        concept: "Portfolio Construction",
        order: 1,
        xp: 250,
        completed: false,
        types: ["theory", "interactive", "game", "simulation", "quiz"],
        sections: [
          {
            title: "Portfolio",
            content:
              "A portfolio is a collection of investments held according to an investor's objectives.",
          },
          {
            title: "Diversification",
            content:
              "Portfolio construction considers how different holdings interact rather than evaluating every investment in isolation.",
          },
          {
            title: "Portfolio Review",
            content:
              "Investors can periodically evaluate allocation, risk, performance and whether holdings still fit their objectives.",
          },
        ],
        game: {
          id: "game-portfolio-architect",
          title: "Portfolio Architect",
          description:
            "Build a complete portfolio and respond to changing market conditions.",
          concept: "Portfolio Construction",
          type: "strategy",
        },
      },

      {
        id: "lesson-50",
        worldId: "world-9",
        prerequisiteLessonId: "lesson-49",
        title: "Hedging",
        description:
          "Understand how investors and traders can use strategies to reduce specific risks.",
        concept: "Hedging",
        order: 2,
        xp: 250,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "What is Hedging?",
            content:
              "Hedging involves taking a position intended to reduce the impact of an adverse movement in another position.",
          },
          {
            title: "Cost of Hedging",
            content:
              "Reducing one type of risk can involve costs or introduce other trade-offs.",
          },
          {
            title: "Hedging is Not Free",
            content:
              "A hedge does not necessarily eliminate all risk and may reduce potential gains depending on the strategy.",
          },
        ],
        game: {
          id: "game-hedge-defender",
          title: "Hedge Defender",
          description:
            "Protect a portfolio against different market scenarios while managing the cost of the hedge.",
          concept: "Hedging",
          type: "strategy",
        },
      },

      {
        id: "lesson-51",
        worldId: "world-9",
        prerequisiteLessonId: "lesson-50",
        title: "Backtesting Strategies",
        description:
          "Learn how historical data can be used to evaluate a trading strategy.",
        concept: "Backtesting",
        order: 3,
        xp: 275,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "What is Backtesting?",
            content:
              "Backtesting evaluates how a defined strategy would have performed on historical data.",
          },
          {
            title: "Rules Matter",
            content:
              "A meaningful backtest requires clearly defined entry, exit, position sizing and cost assumptions.",
          },
          {
            title: "Limitations",
            content:
              "Historical performance does not guarantee future results. Backtests can also be affected by data quality and unrealistic assumptions.",
          },
        ],
        game: {
          id: "game-strategy-lab",
          title: "Strategy Lab",
          description:
            "Build a rule-based strategy and test it against historical market scenarios.",
          concept: "Backtesting",
          type: "simulation",
        },
      },

      {
        id: "lesson-52",
        worldId: "world-9",
        prerequisiteLessonId: "lesson-51",
        title: "Probability and Expected Value",
        description:
          "Learn how probability can improve decision-making under uncertainty.",
        concept: "Probability",
        order: 4,
        xp: 250,
        completed: false,
        types: ["theory", "interactive", "game", "simulation", "quiz"],
        sections: [
          {
            title: "Probability",
            content:
              "Probability represents the likelihood associated with possible outcomes under a defined model or assumption.",
          },
          {
            title: "Expected Value",
            content:
              "Expected value combines possible outcomes with their assumed probabilities to estimate an average outcome over repeated trials.",
          },
          {
            title: "Uncertainty",
            content:
              "Financial markets contain uncertainty, so probability-based decisions should be treated as estimates rather than guarantees.",
          },
        ],
        game: {
          id: "game-probability-casino",
          title: "Probability Arena",
          description:
            "Make repeated investment decisions and learn why a good process can still produce individual losses.",
          concept: "Expected Value",
          type: "simulation",
        },
      },

      {
        id: "lesson-53",
        worldId: "world-9",
        prerequisiteLessonId: "lesson-52",
        title: "Systematic and Algorithmic Trading",
        description:
          "Understand how trading rules can be converted into systematic processes.",
        concept: "Algorithmic Trading",
        order: 5,
        xp: 275,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Rule-Based Trading",
            content:
              "A systematic strategy defines trading decisions using explicit rules.",
          },
          {
            title: "Automation",
            content:
              "Software can execute predefined rules automatically when the required conditions occur.",
          },
          {
            title: "Risks of Automation",
            content:
              "Automated strategies can fail because of flawed logic, poor assumptions, unexpected market conditions or technical problems.",
          },
        ],
        game: {
          id: "game-bot-builder",
          title: "Bot Builder",
          description:
            "Create a simple rule-based trading system and observe how it behaves across different market regimes.",
          concept: "Algorithmic Trading",
          type: "strategy",
        },
      },
    ],
  },

  // ============================================================
  // WORLD 10 — REAL MARKET MASTERY
  // ============================================================
  {
    id: "world-10",
    title: "Real Market Mastery",
    description:
      "Put everything together through research, paper trading, portfolio management and realistic market challenges.",
    order: 10,
    locked: true,
    completed: false,

    lessons: [
      {
        id: "lesson-54",
        worldId: "world-10",
        title: "Market Research Workflow",
        description:
          "Learn how to move from a market question to a structured investment decision.",
        concept: "Investment Research",
        order: 1,
        xp: 300,
        completed: false,
        types: ["theory", "interactive", "game", "quiz"],
        sections: [
          {
            title: "Research",
            content:
              "Start with a clear question and gather relevant information about the company, market and investment thesis.",
          },
          {
            title: "Analysis",
            content:
              "Use fundamental, technical or other appropriate tools to evaluate the evidence.",
          },
          {
            title: "Decision",
            content:
              "A decision should include an investment thesis, expected scenario, risks and invalidation conditions.",
          },
        ],
        game: {
          id: "game-investment-investigator",
          title: "Investment Investigator",
          description:
            "Research a company using multiple information sources and construct an investment thesis.",
          concept: "Investment Research",
          type: "analysis",
        },
      },

      {
        id: "lesson-55",
        worldId: "world-10",
        prerequisiteLessonId: "lesson-54",
        title: "Paper Trading Challenge",
        description:
          "Use virtual money with market-based prices and apply your knowledge.",
        concept: "Paper Trading",
        order: 2,
        xp: 300,
        completed: false,
        types: ["theory", "interactive", "game", "simulation"],
        sections: [
          {
            title: "Virtual Capital",
            content:
              "Paper trading allows learners to practice decisions using virtual capital instead of risking real money.",
          },
          {
            title: "Market Prices",
            content:
              "StockMate will use market-based price data for its simulation so learners can experience realistic price movement.",
          },
          {
            title: "Performance",
            content:
              "The learner can track holdings, portfolio value, profit and loss and trading history.",
          },
        ],
        game: {
          id: "game-paper-trading",
          title: "Paper Trading Arena",
          description:
            "Trade with virtual capital while market prices move and manage your portfolio in real time.",
          concept: "Paper Trading",
          type: "simulation",
        },
      },

      {
        id: "lesson-56",
        worldId: "world-10",
        prerequisiteLessonId: "lesson-55",
        title: "Portfolio Performance Analysis",
        description:
          "Learn how to review your decisions instead of focusing only on profit.",
        concept: "Portfolio Analytics",
        order: 3,
        xp: 300,
        completed: false,
        types: ["theory", "interactive", "simulation", "quiz"],
        sections: [
          {
            title: "Profit and Loss",
            content:
              "Portfolio analysis should consider realised and unrealised profit or loss according to the relevant positions.",
          },
          {
            title: "Risk",
            content:
              "Performance should be evaluated alongside drawdown, concentration and other relevant risk measures.",
          },
          {
            title: "Decision Quality",
            content:
              "A profitable outcome does not always mean the decision process was good, and a losing outcome does not automatically mean the process was bad.",
          },
        ],
      },

      {
        id: "lesson-57",
        worldId: "world-10",
        prerequisiteLessonId: "lesson-56",
        title: "The Market Crash Challenge",
        description:
          "Test your knowledge when the market suddenly falls.",
        concept: "Crisis Management",
        order: 4,
        xp: 350,
        completed: false,
        types: ["interactive", "game", "simulation"],
        sections: [
          {
            title: "Scenario",
            content:
              "A sudden market decline creates uncertainty and large changes in portfolio values.",
          },
          {
            title: "Your Decision",
            content:
              "You must evaluate your portfolio, risk exposure and investment thesis before deciding what to do.",
          },
          {
            title: "Review",
            content:
              "After the scenario, StockMate explains the consequences of each decision and connects them to risk-management concepts.",
          },
        ],
        game: {
          id: "game-market-crash",
          title: "Market Crash Challenge",
          description:
            "Survive a simulated market crash while managing risk, psychology and portfolio decisions.",
          concept: "Crisis Management",
          type: "simulation",
        },
      },

      {
        id: "lesson-58",
        worldId: "world-10",
        prerequisiteLessonId: "lesson-57",
        title: "StockMate Final Investment Mission",
        description:
          "Combine fundamental analysis, technical analysis, risk management and portfolio construction.",
        concept: "Integrated Investing",
        order: 5,
        xp: 500,
        completed: false,
        types: ["interactive", "game", "simulation", "quiz"],
        sections: [
          {
            title: "Research",
            content:
              "Analyse the company, industry, financial information and market conditions.",
          },
          {
            title: "Plan",
            content:
              "Create an investment or trading plan with an entry idea, risk limits and portfolio allocation.",
          },
          {
            title: "Execute",
            content:
              "Use virtual capital to execute the decision and monitor the market.",
          },
          {
            title: "Review",
            content:
              "Evaluate the outcome, risk, decision quality and lessons learned.",
          },
        ],
        game: {
          id: "game-stockmate-final-mission",
          title: "StockMate Final Mission",
          description:
            "Complete a full investment journey from research to decision, execution, portfolio management and post-trade analysis.",
          concept: "Integrated Investing",
          type: "strategy",
        },
      },
    ],
  },
];
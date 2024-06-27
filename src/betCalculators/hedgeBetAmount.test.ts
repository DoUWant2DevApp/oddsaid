import { hedgeBetAmount } from "./hedgeBetAmount"

const hedgeTestExamples = [
  [
    100,
    { odds: 2, oddsFormat: "Decimal" },
    { odds: 3, oddsFormat: "Decimal" },
    "Equal Profit",
    66.67,
  ],
  [
    100,
    { odds: 100, oddsFormat: "American" },
    { odds: 200, oddsFormat: "American" },
    "Equal Profit",
    66.67,
  ],
  [
    100,
    { odds: 100, oddsFormat: "American" },
    { odds: -200, oddsFormat: "American" },
    "Equal Profit",
    133.33,
  ],
  [
    100,
    { odds: "+100", oddsFormat: "American" },
    { odds: "-200", oddsFormat: "American" },
    "Equal Profit",
    133.33,
  ],
  [
    undefined,
    { odds: "+100", oddsFormat: "American" },
    { odds: "-200", oddsFormat: "American" },
    "Equal Profit",
    null,
  ],
  [
    100,
    { odds: "+10", oddsFormat: "American" },
    { odds: "-200", oddsFormat: "American" },
    "Equal Profit",
    null,
  ],
  [
    100,
    { odds: 100, oddsFormat: "American" },
    { odds: 200, oddsFormat: "American" },
    "Prevent Loss",
    50,
  ],
  [100, { odds: 2, oddsFormat: "Decimal" }, { odds: 3, oddsFormat: "Decimal" }, "Prevent Loss", 50],
  [
    100,
    { odds: undefined, oddsFormat: "Decimal" },
    { odds: 3, oddsFormat: "Decimal" },
    "Prevent Loss",
    null,
  ],
]

test.each(hedgeTestExamples)(
  "hedgeBetAmount test",
  // @ts-ignore
  (originalBetAmount, originalOdds, hedgeOdds, strategy, expectedResult) => {
    // @ts-ignore
    expect(hedgeBetAmount(originalBetAmount, originalOdds, hedgeOdds, strategy)).toBe(
      expectedResult,
    )
  },
)

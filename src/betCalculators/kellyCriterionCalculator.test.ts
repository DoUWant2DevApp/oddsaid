import { kellyCriterionCalculator } from "./kellyCriterionCalculator"

const kellyTests = [
  [
    "American",
    110,
    60,
    1,
    5000,
    {
      expectedValue: 307.27,
      expectedROI: "26%",
      amountToBet: 1181.82,
      percentageOfBankrollToBet: "23.64%",
    },
  ],
  [
    "American",
    110,
    60,
    undefined,
    5000,
    {
      expectedValue: 307.27,
      expectedROI: "26%",
      amountToBet: 1181.82,
      percentageOfBankrollToBet: "23.64%",
    },
  ],
  [
    "American",
    110,
    "",
    undefined,
    5000,
    {
      expectedValue: null,
      expectedROI: null,
      amountToBet: null,
      percentageOfBankrollToBet: null,
    },
  ],
  [
    "American",
    "+110",
    60,
    0.5,
    5000,
    {
      expectedValue: 153.64,
      expectedROI: "26%",
      amountToBet: 590.91,
      percentageOfBankrollToBet: "11.82%",
    },
  ],
  [
    "American",
    110,
    60,
    1,
    undefined,
    {
      expectedValue: null,
      expectedROI: "26%",
      amountToBet: null,
      percentageOfBankrollToBet: "23.64%",
    },
  ],
  [
    "Probability",
    "50%",
    "55%",
    0.4,
    undefined,
    {
      expectedValue: null,
      expectedROI: "10%",
      amountToBet: null,
      percentageOfBankrollToBet: "4%",
    },
  ],
  [
    "Probability",
    50,
    55,
    0.4,
    undefined,
    {
      expectedValue: null,
      expectedROI: "10%",
      amountToBet: null,
      percentageOfBankrollToBet: "4%",
    },
  ],
  [
    "Decimal",
    "3.35",
    40,
    1,
    939.65,
    {
      expectedValue: 46.22,
      expectedROI: "34%",
      amountToBet: 135.95,
      percentageOfBankrollToBet: "14.47%",
    },
  ],
  [
    "America",
    110,
    60,
    1,
    5000,
    {
      expectedValue: null,
      expectedROI: null,
      amountToBet: null,
      percentageOfBankrollToBet: null,
    },
  ],
  [
    "American",
    11,
    60,
    1,
    5000,
    {
      expectedValue: null,
      expectedROI: null,
      amountToBet: null,
      percentageOfBankrollToBet: null,
    },
  ],
  [
    "American",
    110,
    "f",
    1,
    5000,
    {
      expectedValue: null,
      expectedROI: null,
      amountToBet: null,
      percentageOfBankrollToBet: null,
    },
  ],
]

test.each(kellyTests)(
  "kellyCriterionCalculator test",
  //   @ts-ignore
  (oddsFormat, odds, winProbability, kellyMultiplier, bankroll, expectedReturn) => {
    const res = kellyCriterionCalculator(
      //   @ts-ignore
      oddsFormat,
      odds,
      winProbability,
      kellyMultiplier,
      bankroll,
    )
    //   @ts-ignore
    expect(res.expectedValue).toBe(expectedReturn.expectedValue)
    //   @ts-ignore
    expect(res.expectedROI).toBe(expectedReturn.expectedROI)
    //   @ts-ignore
    expect(res.amountToBet).toBe(expectedReturn.amountToBet)
    //   @ts-ignore
    expect(res.percentageOfBankrollToBet).toBe(expectedReturn.percentageOfBankrollToBet)
  },
)

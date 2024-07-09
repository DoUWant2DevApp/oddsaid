import { parlayOddsCalc } from "./parlayOddsCalc"

const parlayOddsTestExamples: {
  odds: { odds: string; oddsFormat: string }[]
  outputOddsFormat: string
  roundDecimals?: number
  calculatedResult: string | null
}[] = [
  {
    odds: [
      { odds: "-200", oddsFormat: "American" },
      { odds: "-200", oddsFormat: "American" },
    ],
    outputOddsFormat: "American",
    calculatedResult: "+125",
  },
  {
    odds: [],
    outputOddsFormat: "American",
    calculatedResult: null,
  },
  {
    odds: [
      { odds: "133", oddsFormat: "American" },
      { odds: "133", oddsFormat: "American" },
    ],
    outputOddsFormat: "American",
    roundDecimals: 2,
    calculatedResult: "+442.89",
  },
  {
    odds: [
      { odds: "1.5", oddsFormat: "Decimal" },
      { odds: "1.5", oddsFormat: "Decimal" },
    ],
    outputOddsFormat: "American",
    calculatedResult: "+125",
  },
  {
    odds: [
      { odds: "1.5", oddsFormat: "Decimal" },
      { odds: "1.5", oddsFormat: "Decimal" },
    ],
    outputOddsFormat: "Decimal",
    calculatedResult: "2.25",
  },
  {
    odds: [
      { odds: "1.5", oddsFormat: "Decima" },
      { odds: "1.5", oddsFormat: "Decimal" },
    ],
    outputOddsFormat: "Decimal",
    calculatedResult: null,
  },
  {
    odds: [
      { odds: "1.5%", oddsFormat: "Decimal" },
      { odds: "1.5", oddsFormat: "Decimal" },
    ],
    outputOddsFormat: "Decimal",
    calculatedResult: null,
  },
]

test.each(parlayOddsTestExamples)(
  "parlayOdds Test",
  ({ odds, outputOddsFormat, roundDecimals, calculatedResult }) => {
    // @ts-ignore
    const res = parlayOddsCalc(odds, outputOddsFormat, roundDecimals)
    // console.log(res, calculatedResult, "!!!!!!!!!!!!!!!!!!!!!!")
    expect(res).toBe(calculatedResult)
  },
)

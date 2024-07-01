import { holdCalculator } from "./holdCalculator"

const holdTests = [
  ["American", "+110", "+110", 2, "-4.76%"],
  ["American", "-110", "+110", undefined, "0%"],
  ["American", -110, 110, undefined, "0%"],
  ["Decimal", 2, 2, undefined, "0%"],
  ["Probability", "50%", "50%", undefined, "0%"],
  ["Probability", "50", "50", undefined, "0%"],
  ["American", "-11", "+110", undefined, null],
  ["America", "-110", "+110", undefined, null],
  ["America", "-110", "+110", undefined, null],
]

test.each(holdTests)(
  "holdCalculator test",
  //   @ts-ignore
  (oddsFormat, odds1, odds2, roundDecimals, expectedResult) => {
    //   @ts-ignore
    expect(holdCalculator(oddsFormat, odds1, odds2, roundDecimals)).toBe(expectedResult)
  },
)

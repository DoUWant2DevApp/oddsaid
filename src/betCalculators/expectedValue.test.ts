import { expectedValue } from "./expectedValue"

test.each([
  [169.34, 285.56, "American", 32.67, 43.96],
  [169.34, "+285.56", "American", "32.67%", 43.96],
  [100, "2.5", "Decimal", "48%", 20],
  [100, "3/2", "Fractional", "48%", 20],
  [100, "3/2", "Fractional", "f", null],
  [100, "3/2", "Fractionalzz", "48%", null],
  [100, undefined, "Fractional", "48%", null],
  [null, "3/2", "Fractional", "48%", null],
])("expectedValue test", (betAmount, odds, oddsFormat, winProbability, result) => {
  // @ts-ignore
  expect(expectedValue(betAmount, odds, oddsFormat, winProbability)).toBe(result)
})

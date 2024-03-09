import { singleBetCalc } from "./singleBetCalc"

test.each([
  [100, "1.9", "Decimal", undefined, { profit: "90", totalPayout: "190" }],
  [100, "2.2", "Decimal", undefined, { profit: "120", totalPayout: "220" }],
  [100, "0.2", "Decimal", undefined, { profit: null, totalPayout: null }],
  ["$100", "2.2", "Decimal", undefined, { profit: null, totalPayout: null }],
  ["6.67", "3/5", "Fractional", 2, { profit: "4.00", totalPayout: "10.67" }],
  ["4.56845", "-333", "American/Moneyline", 2, { profit: "1.37", totalPayout: "5.94" }],
])("singleBetCalc test", (betAmount, odds, oddsFormat, toFixed, correctOutput) => {
  //@ts-ignore
  let res = singleBetCalc(betAmount, odds, oddsFormat, toFixed)
  expect(res.profit).toBe(correctOutput.profit)
  expect(res.totalPayout).toBe(correctOutput.totalPayout)
})

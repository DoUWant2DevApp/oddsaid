import { whatOddsFormats } from "./whatOddsFormats"

test.each([
  ["3/5", ["Fractional"]],
  ["3/-5", []],
  ["-100", ["American", "Indonesian"]],
  [100, ["American", "Indonesian", "Decimal", "Hong Kong"]],
  [1, ["Hong Kong", "Malaysian", "Indonesian"]],
  ["1%", ["Probability"]],
])("whatOddsFormat test", (input, outputArr) => {
  expect(whatOddsFormats(input).sort()).toEqual(outputArr.sort())
})

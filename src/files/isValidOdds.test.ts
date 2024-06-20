import {
  isValidAmericanOdds,
  isValidDecimalOdds,
  isValidFractionalOdds,
  isValidHongKongOdds,
  isValidIndonesianOdds,
  isValidMalaysianOdds,
  isValidOdds,
  isValidProbability,
} from "./isValidOdds"

//isValidOdds
test.each([
  [0.1, true],
  [-2, true],
  [-1, true],
  [0.99, true],
  [2, true],
  [1, true],
  [11, true],
  [1.51, true],
  [6.54, true],
  ["0.1", true],
  ["-2", true],
  ["-1", true],
  ["0.99", true],
  ["2", true],
  ["1", true],
  ["11", true],
  ["1.51", true],
  ["6.54", true],
  ["5/3", true],
  ["5/0", false],
  [null, false],
  [undefined, false],
  [false, false],
  [true, false],
  ["99.9%", true],
  ["", false],
])("isValidOdds test", (input, output) => {
  //@ts-ignore
  expect(isValidOdds(input)).toBe(output)
})
//Decimal
test.each([
  [0.1, false],
  [-2, false],
  [-1, false],
  [0.99, false],
  [2, true],
  [1, false],
  [11, true],
  [1.51, true],
  [6.54, true],
  ["0.1", false],
  ["-2", false],
  ["-1", false],
  ["0.99", false],
  ["2", true],
  ["1", false],
  ["11", true],
  ["1.51", true],
  ["6.54", true],
  [null, false],
  [undefined, false],
  [false, false],
  [true, false],
  ["", false],
])("isValidDecimalOdds test", (input, output) => {
  //@ts-ignore
  expect(isValidDecimalOdds(input)).toBe(output)
})

//Hong Kong
test.each([
  [0, false],
  [1, true],
  [0.1, true],
  [1.1, true],
  [999, true],
  ["0", false],
  ["1", true],
  ["0.1", true],
  ["1.1", true],
  ["999", true],
  [-0, false],
  ["-999", false],
  [-999, false],
  [-0.1, false],
  [NaN, false],
  [null, false],
  [false, false],
  [true, false],
  [undefined, false],
  ["", false],
])("isValidHongKongOdds test", (input, output) => {
  //@ts-ignore
  expect(isValidHongKongOdds(input)).toBe(output)
})

//Malaysian
test.each([
  [-1, true],
  [-0.1, true],
  [0.1, true],
  [1, true],
  ["-1", true],
  ["-0.1", true],
  ["0.1", true],
  ["1", true],
  ["-1.01", false],
  ["1.01", false],
  [-1.01, false],
  [1.01, false],
  [0, false],
  [null, false],
  ["", false],
])("isValidMalaysianOdds test", (input, output) => {
  //@ts-ignore
  expect(isValidMalaysianOdds(input)).toBe(output)
})
//Indonesian
test.each([
  [1, true],
  [1.15, true],
  [-1.01, true],
  [-100, true],
  [999, true],
  ["1", true],
  ["1.15", true],
  ["-1.01", true],
  ["-100", true],
  ["999", true],
  [0, false],
  [0.99, false],
  [-0.99, false],
  [null, false],
  ["", false],
])("isValidIndonesianOdds test", (input, output) => {
  //@ts-ignore
  expect(isValidIndonesianOdds(input)).toBe(output)
})
//American
test.each([
  [100, true],
  [-100, true],
  [-1000, true],
  [1000, true],
  ["1000", true],
  ["100", true],
  ["-100", true],
  ["1000", true],
  ["99", false],
  ["0", false],
  ["-99", false],
  [99, false],
  [-99, false],
  [-0, false],
  [false, false],
  [true, false],
  [NaN, false],
  ["", false],
])("isValidAmericanOdds test", (input, output) => {
  //@ts-ignore
  expect(isValidAmericanOdds(input)).toBe(output)
})
//Fractional
test.each([
  ["1/1", true],
  ["5/1", true],
  ["5/5", true],
  ["1/5", true],
  [1, false],
  [true, false],
  [null, false],
  [undefined, false],
  [NaN, false],
  [false, false],
  ["0/5", false],
  ["5/0", false],
  ["-1/5", false],
  ["1/-5", false],
  ["1/", false],
  ["/5", false],
  ["", false],
])("isValidFractionalOdds test", (input, output) => {
  //@ts-ignore
  expect(isValidFractionalOdds(input)).toBe(output)
})

//Probability
test.each([
  ["100%", true],
  ["0.1%", true],
  ["0%", false],
  ["101%", false],
  ["101%", false],
  [10, false],
  ["", false],
])("isValidProbability test", (input, output) => {
  //@ts-ignore
  expect(isValidProbability(input)).toBe(output)
})

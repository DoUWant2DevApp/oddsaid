import {
  americanToDecimalOdds,
  americanToFractionalOdds,
  americanToHongKongOdds,
  americanToIndonesianOdds,
  americanToMalaysianOdds,
  americanToProbability,
  convertOddsFromXToY,
  decimalToAmericanOdds,
  decimalToFractionalOdds,
  decimalToHongKongOdds,
  decimalToIndonesianOdds,
  decimalToMalaysianOdds,
  decimalToProbability,
  fractionalToAmericanOdds,
  fractionalToDecimalOdds,
  fractionalToHongKongOdds,
  fractionalToIndonesianOdds,
  fractionalToMalaysianOdds,
  fractionalToProbability,
  hongKongToAmericanOdds,
  hongKongToDecimalOdds,
  hongKongToFractionalOdds,
  hongKongToIndonesianOdds,
  hongKongToMalaysianOdds,
  hongKongToProbability,
  indonesianToAmericanOdds,
  indonesianToDecimalOdds,
  indonesianToFractionalOdds,
  indonesianToHongKongOdds,
  indonesianToMalaysianOdds,
  indonesianToProbability,
  malaysianToAmericanOdds,
  malaysianToDecimalOdds,
  malaysianToFractionalOdds,
  malaysianToHongKongOdds,
  malaysianToIndonesianOdds,
  malaysianToProbability,
  probabilityToAmericanOdds,
  probabilityToDecimalOdds,
  probabilityToFractionalOdds,
  probabilityToHongKongOdds,
  probabilityToIndonesianOdds,
  probabilityToMalaysianOdds,
} from "./convertOdds"

//decimalToAmericanOdds
test.each([
  [2, "+100"],
  [3, "+200"],
  [3.3, "+230"],
  [5, "+400"],
  ["1.5", "-200"],
  ["1.01", "-10000"],
  [-1, null],
  [1, null],
])("decimalToAmericanOdds test", (input, output) => {
  //@ts-ignore
  expect(Number(decimalToAmericanOdds(input)).toFixed(0)).toBe(Number(output).toFixed(0))
})
//decimalToHongKongOdds
test.each([
  [2, "1"],
  ["2.2", "1.2"],
  ["1.2", "0.2"],
  ["1.1", "0.1"],
  [999, "998"],
  [999.9999, "998.9999"],
  [false, null],
])("decimalToHongKongOdds test", (input, output) => {
  //@ts-ignore
  expect(Number(decimalToHongKongOdds(input))).toBe(Number(output))
})

//decimalToMalaysianOdds
test.each([
  [2, "1"],
  ["1.25", "0.25"],
  ["2.25", "-0.8"],
  ["1.1", "0.1"],
  [11, "-0.1"],

  [false, null],
])("decimalToMalaysianOdds test", (input, output) => {
  //@ts-ignore
  expect(Number(decimalToMalaysianOdds(input))).toBe(Number(output))
})

//decimalToIndonesianOdds
test.each([
  ["11", "10"],
  ["1.1", "-10"],
  ["1.25", "-4"],
  ["3", "2"],
  [1, null],
  [false, null],
])("decimalToIndonesianOdds test", (input, output) => {
  //@ts-ignore
  expect(Number(decimalToIndonesianOdds(input))).toBe(Number(output))
})

//decimalToFractionalOdds
test.each([
  ["11", "10/1"],
  ["2", "1/1"],
  ["1.2", "1/5"],
  ["1.33", "33/100"],
  ["1.67", "67/100"],
  ["1.75", "3/4"],
  ["1.666666666666667", "2/3"],
  ["1.6667", "2/3"],
  [null, null],
  [true, null],
])("decimalToFractionalOdds test", (input, output) => {
  //@ts-ignore
  expect(decimalToFractionalOdds(input)).toBe(output)
})

//decimalToProbability
test.each([
  ["10", "10%"],
  ["1.250", "80%"],
  [false, null],
  [undefined, null],
])("decimalToProbability test", (input, output) => {
  //@ts-ignore
  expect(decimalToProbability(input)).toBe(output)
})

//americanToDecimal
test.each([
  ["-100", "2"],
  ["100", "2"],
  [200, "3"],
  [-125, "1.8"],
  [10, null],
  [false, null],
  [undefined, null],
])("americanToDecimal test", (input, output) => {
  //@ts-ignore
  expect(americanToDecimalOdds(input)).toBe(output)
})
//americanToHongKong
test.each([
  ["-100", "1"],
  ["+100", "1"],
  [200, "2"],
  [-125, "0.8"],
  [10, null],
  [false, null],
  ["", null],
])("americanToHongKong test", (input, output) => {
  //@ts-ignore
  expect(americanToHongKongOdds(input)).toBe(output)
})
//americanToMalaysian
test.each([
  ["-100", "1"],
  ["100", "1"],
  [200, "-0.5"],
  [-125, "0.8"],
  [10, null],
  [false, null],
  ["", null],
])("americanToMalaysian test", (input, output) => {
  //@ts-ignore
  expect(americanToMalaysianOdds(input)).toBe(output)
})
//americanToIndonesian
test.each([
  ["-100", "1"],
  ["100", "1"],
  [200, "2"],
  [-125, "-1.25"],
  [10, null],
  [false, null],
  ["", null],
])("americanToIndonesian test", (input, output) => {
  //@ts-ignore
  expect(americanToIndonesianOdds(input)).toBe(output)
})

//americanToFractional
test.each([
  ["-100", "1/1"],
  ["100", "1/1"],
  [200, "2/1"],
  [-125, "4/5"],
  [10, null],
  [false, null],
  ["", null],
])("americanToFractional test", (input, output) => {
  //@ts-ignore
  expect(americanToFractionalOdds(input)).toBe(output)
})

//americanToProbability
test.each([
  ["-100", "50%"],
  ["100", "50%"],
  [300, "25%"],
  [-150, "60%"],
  [10, null],
  [false, null],
  ["", null],
])("americanToProbability test", (input, output) => {
  //@ts-ignore
  expect(americanToProbability(input)).toBe(output)
})

//hongKongToDecimalOdds
test.each([
  ["1", "2"],
  ["1.25", "2.25"],
  [true, null],
  ["", null],
])("hongKongToDecimalOdds test", (input, output) => {
  //@ts-ignore
  expect(hongKongToDecimalOdds(input)).toBe(output)
})
//hongKongToAmericanOdds
test.each([
  ["1", "+100"],
  ["1.25", "+125"],
  [".5", "-200"],
  [true, null],
  ["", null],
])("hongKongToAmericanOdds test", (input, output) => {
  //@ts-ignore
  expect(hongKongToAmericanOdds(input)).toBe(output)
})
//hongKongToMalaysianOdds
test.each([
  [1, "1"],
  [1.25, "-0.8"],
  [".5", "0.5"],
  [true, null],
  ["", null],
])("hongKongToMalaysianOdds test", (input, output) => {
  //@ts-ignore
  expect(hongKongToMalaysianOdds(input)).toBe(output)
})
//hongKongToIndonesianOdds
test.each([
  [1, "1"],
  [1.25, "1.25"],
  [".5", "-2"],
  [undefined, null],
  ["", null],
])("hongKongToIndonesianOdds test", (input, output) => {
  //@ts-ignore
  expect(hongKongToIndonesianOdds(input)).toBe(output)
})
//hongKongToFractionalOdds
test.each([
  [1, "1/1"],
  [1.25, "5/4"],
  [".5", "1/2"],
  [undefined, null],
  ["", null],
])("hongKongToFractionalOdds test", (input, output) => {
  //@ts-ignore
  expect(hongKongToFractionalOdds(input)).toBe(output)
})
//hongKongToFractionalOdds
test.each([
  [1, "50%"],
  [1.5, "40%"],
  [".6", "62.5%"],
  [undefined, null],
  ["", null],
])("hongKongToFractionalOdds test", (input, output) => {
  //@ts-ignore
  expect(hongKongToProbability(input)).toBe(output)
})
//malaysianToDecimalOdds
test.each([
  [1, "2"],
  [0.1, "1.1"],
  [-0.1, "11"],
  [".6", "1.6"],
  ["-.8", "2.25"],
  ["0.99", "1.99"],
  [undefined, null],
  ["", null],
])("malaysianToDecimalOdds test", (input, output) => {
  //@ts-ignore
  expect(malaysianToDecimalOdds(input)).toBe(output)
})
//malaysianToDecimalOdds
test.each([
  [1, "+100"],
  [0.1, "-1000"],
  [-0.1, "+1000"],
  ["-.8", "+125"],
  ["0.8", "-125"],
  [undefined, null],
  ["", null],
])("malaysianToDecimalOdds test", (input, output) => {
  //@ts-ignore
  expect(malaysianToAmericanOdds(input)).toBe(output)
})
//malaysianToHongKongOdds
test.each([
  [1, "1"],
  [0.1, "0.1"],
  [-0.1, "10"],
  ["-0.8", "1.25"],
  ["0.8", "0.8"],
  [undefined, null],
  ["", null],
])("malaysianToHongKongOdds test", (input, output) => {
  //@ts-ignore
  expect(malaysianToHongKongOdds(input)).toBe(output)
})
//malaysianToIndonesianOdds
test.each([
  [1, "1"],
  [0.1, "-10"],
  [-0.1, "10"],
  ["-0.8", "1.25"],
  ["0.8", "-1.25"],
  [undefined, null],
  ["", null],
])("malaysianToIndonesianOdds test", (input, output) => {
  //@ts-ignore
  expect(malaysianToIndonesianOdds(input)).toBe(output)
})
//malaysianToFractionalOdds
test.each([
  [1, "1/1"],
  [0.1, "1/10"],
  [-0.1, "10/1"],
  ["-0.8", "5/4"],
  ["0.8", "4/5"],
  [undefined, null],
  ["", null],
])("malaysianToFractionalOdds test", (input, output) => {
  //@ts-ignore
  expect(malaysianToFractionalOdds(input)).toBe(output)
})
//malaysianToProbability
test.each([
  [1, "50%"],
  [0.25, "80%"],
  [-0.25, "20%"],
  [undefined, null],
  ["", null],
])("malaysianToProbability test", (input, output) => {
  //@ts-ignore
  expect(malaysianToProbability(input)).toBe(output)
})
//indonesianToDecimalOdds
test.each([
  [1, "2"],
  [-10, "1.1"],
  [-1.25, "1.8"],
  [1.25, "2.25"],
  [false, null],
  ["", null],
])("indonesianToDecimalOdds test", (input, output) => {
  //@ts-ignore
  expect(indonesianToDecimalOdds(input)).toBe(output)
})
//indonesianToAmericanOdds
test.each([
  [1, "+100"],
  [-10, "-1000"],
  [-1.25, "-125"],
  [1.25, "+125"],
  [false, null],
  ["", null],
])("indonesianToAmericanOdds test", (input, output) => {
  //@ts-ignore
  expect(indonesianToAmericanOdds(input)).toBe(output)
})
//indonesianToHongKongOdds
test.each([
  [1, "1"],
  [-10, "0.1"],
  [-1.25, "0.8"],
  [1.25, "1.25"],
  [false, null],
  ["", null],
])("indonesianToHongKongOdds test", (input, output) => {
  //@ts-ignore
  expect(indonesianToHongKongOdds(input)).toBe(output)
})
//indonesianToMalaysianOdds
test.each([
  [1, "1"],
  [-10, "0.1"],
  [-1.25, "0.8"],
  [1.25, "-0.8"],
  [false, null],
  ["", null],
])("indonesianToMalaysianOdds test", (input, output) => {
  //@ts-ignore
  expect(indonesianToMalaysianOdds(input)).toBe(output)
})
//indonesianToFractionalOdds
test.each([
  [1, "1/1"],
  [-10, "1/10"],
  [-1.25, "4/5"],
  [1.25, "5/4"],
  [false, null],
  ["", null],
])("indonesianToFractionalOdds test", (input, output) => {
  //@ts-ignore
  expect(indonesianToFractionalOdds(input)).toBe(output)
})
//indonesianToProbability
test.each([
  [1, "50%"],
  [9, "10%"],
  [-9, "90%"],
  [-1.5, "60%"],
  [1.5, "40%"],
  [false, null],
  ["", null],
])("indonesianToProbability test", (input, output) => {
  //@ts-ignore
  expect(indonesianToProbability(input)).toBe(output)
})
//fractionalToDecimalOdds
test.each([
  ["1/1", "2"],
  ["3/5", "1.6"],
  ["5/2", "3.5"],
  [false, null],
  ["", null],
])("fractionalToDecimalOdds test", (input, output) => {
  //@ts-ignore
  expect(fractionalToDecimalOdds(input)).toBe(output)
})
//fractionalToAmericanOdds
test.each([
  ["1/1", "+100"],
  ["4/5", "-125"],
  ["5/4", "+125"],
  [false, null],
  ["", null],
])("fractionalToAmericanOdds test", (input, output) => {
  //@ts-ignore
  expect(fractionalToAmericanOdds(input)).toBe(output)
})
//fractionalToHongKongOdds
test.each([
  ["1/1", "1"],
  ["4/5", "0.8"],
  ["5/4", "1.25"],
  [false, null],
  ["", null],
])("fractionalToHongKongOdds test", (input, output) => {
  //@ts-ignore
  expect(fractionalToHongKongOdds(input)).toBe(output)
})
//fractionalToMalaysianOdds
test.each([
  ["1/1", "1"],
  ["4/5", "0.8"],
  ["5/4", "-0.8"],
  [false, null],
  ["", null],
])("fractionalToMalaysianOdds test", (input, output) => {
  //@ts-ignore
  expect(fractionalToMalaysianOdds(input)).toBe(output)
})
//fractionalToIndonesianOdds
test.each([
  ["1/1", "1"],
  ["4/5", "-1.25"],
  ["5/4", "1.25"],
  [false, null],
  ["", null],
])("fractionalToIndonesianOdds test", (input, output) => {
  //@ts-ignore
  expect(fractionalToIndonesianOdds(input)).toBe(output)
})
//fractionalToProbability
test.each([
  ["1/1", "50%"],
  ["3/5", "62.5%"],
  ["7/3", "30%"],
  [false, null],
  ["", null],
])("fractionalToProbability test", (input, output) => {
  //@ts-ignore
  expect(fractionalToProbability(input)).toBe(output)
})
//probabilityToDecimalOdds
test.each([
  ["50%", "2"],
  ["10%", "10"],
  ["62.5%", "1.6"],
  [false, null],
  ["", null],
])("probabilityToDecimalOdds test", (input, output) => {
  //@ts-ignore
  expect(probabilityToDecimalOdds(input)).toBe(output)
})
//probabilityToAmericanOdds
test.each([
  ["50%", "+100"],
  ["10%", "+900"],
  ["80%", "-400"],
  [false, null],
  ["", null],
])("probabilityToAmericanOdds test", (input, output) => {
  //@ts-ignore
  expect(probabilityToAmericanOdds(input)).toBe(output)
})
//probabilityToHongKongOdds
test.each([
  ["50%", "1"],
  ["10%", "9"],
  ["80%", "0.25"],
  [false, null],
  ["", null],
])("probabilityToHongKongOdds test", (input, output) => {
  //@ts-ignore
  expect(probabilityToHongKongOdds(input)).toBe(output)
})
//probabilityToMalaysianOdds
test.each([
  ["50%", "1"],
  ["20%", "-0.25"],
  ["80%", "0.25"],
  [false, null],
  ["", null],
])("probabilityToMalaysianOdds test", (input, output) => {
  //@ts-ignore
  expect(probabilityToMalaysianOdds(input)).toBe(output)
})
//probabilityToIndonesianOdds
test.each([
  ["50%", "1"],
  ["20%", "4"],
  ["80%", "-4"],
  [false, null],
  ["", null],
])("probabilityToIndonesianOdds test", (input, output) => {
  //@ts-ignore
  expect(probabilityToIndonesianOdds(input)).toBe(output)
})
//probabilityToFractionalOdds
test.each([
  ["50%", "1/1"],
  ["20%", "4/1"],
  ["80%", "1/4"],
  [false, null],
  ["", null],
])("probabilityToFractionalOdds test", (input, output) => {
  //@ts-ignore
  expect(probabilityToFractionalOdds(input)).toBe(output)
})

//convertOddsFromXToY
test.each([
  //From Decimal
  [undefined, "Decimal", "Decimal", null],
  ["1.25", "Decimal", "Decimal", "1.25"],
  ["1.25", "Decimal", "American", "-400"],
  ["1.25", "Decimal", "Hong Kong", "0.25"],
  ["1.25", "Decimal", "Malaysian", "0.25"],
  ["1.25", "Decimal", "Indonesian", "-4"],
  ["1.25", "Decimal", "Fractional", "1/4"],
  ["1.25", "Decimal", "Probability", "80%"],
  //From American
  ["", "American", "Decimal", null],
  ["+125", "American", "Decimal", "2.25"],
  ["125", "American", "Hong Kong", "1.25"],
  ["125", "American", "Malaysian", "-0.8"],
  ["125", "American", "Indonesian", "1.25"],
  ["125", "American", "Fractional", "5/4"],
  ["-150", "American", "Probability", "60%"],
  //From Hong Kong
  ["", "Hong Kong", "Decimal", null],
  ["1.5", "Hong Kong", "Decimal", "2.5"],
  ["1.5", "Hong Kong", "American", "+150"],
  [".75", "Hong Kong", "Malaysian", "0.75"],
  [".5", "Hong Kong", "Indonesian", "-2"],
  [".5", "Hong Kong", "Fractional", "1/2"],
  ["1", "Hong Kong", "Probability", "50%"],
  //From Malaysian
  ["-0.5", "Malaysian", "Ame", null],
  ["", "Malaysian", "American", null],
  ["-0.5", "Malaysian", "Decimal", "3"],
  ["-0.5", "Malaysian", "American", "+200"],
  ["0.75", "Malaysian", "Hong Kong", "0.75"],
  ["0.5", "Malaysian", "Indonesian", "-2"],
  ["0.5", "Malaysian", "Fractional", "1/2"],
  ["0.6", "Malaysian", "Probability", "62.5%"],
  //From Indonesian
  [null, "Indonesian", "Decimal", null],
  ["1.5", "Indonesian", "Decimal", "2.5"],
  ["-2", "Indonesian", "American", "-200"],
  ["-2", "Indonesian", "Hong Kong", "0.5"],
  ["-2", "Indonesian", "Malaysian", "0.5"],
  ["2", "Indonesian", "Fractional", "2/1"],
  ["1.5", "Indonesian", "Probability", "40%"],
  //From Fractional
  ["1", "Fractional", "Fractional", null],
  ["1", "Fractional", "Decimal", null],
  ["5/4", "Fractional", "Decimal", "2.25"],
  ["5/4", "Fractional", "American", "+125"],
  ["5/4", "Fractional", "Hong Kong", "1.25"],
  ["5/4", "Fractional", "Malaysian", "-0.8"],
  ["5/3", "Fractional", "Probability", "37.5%"],
  //From Probability
  ["1", "Probability", "Fractional", null],
  ["50%", "Probability", "Decimal", "2"],
  ["40%", "Probability", "American", "+150"],
  ["40%", "Probability", "Hong Kong", "1.5"],
  ["80%", "Probability", "Malaysian", "0.25"],
  ["80%", "Probability", "Indonesian", "-4"],
  ["80%", "Probability", "Fractional", "1/4"],
  ["80%", "Probabi", "Fractional", null],
])("convertOddsFromXToY test", (odds, convertFrom, convertTo, output) => {
  //@ts-ignore
  expect(convertOddsFromXToY(odds, convertFrom, convertTo)).toBe(output)
})
test.each([
  // from decimal
  ["2.6777", "Decimal", "American", 2, "+167.77"],
  ["1.23", "Decimal", "American", 1, "-434.8"],
  ["-2", "Decimal", "American", 1, null],
  ["2.62", "Decimal", "Probability", 3, "38.168%"],
  ["2.62", "Decimal", "Probbility", 3, null],
  ["2.6767", "Decimal", "Hong Kong", 3, "1.677"],
  ["1.26723", "Decimal", "Malaysian", 3, "0.267"],
  ["1.26723", "Decimal", "Indonesian", 3, "-3.742"],
  ["1.5", "Decimal", "American", 2, "-200.00"],
  ["1.5", "Decimal", "Fractional", 2, "1/2"],
  [NaN, "American", "Fractional", 2, null],
  [NaN, "American", "Fractio", 2, null],
])("convertOddsFromXToY toFixed test", (odds, convertFrom, convertTo, toFixed, output) => {
  //@ts-ignore
  expect(convertOddsFromXToY(odds, convertFrom, convertTo, toFixed)).toBe(output)
})

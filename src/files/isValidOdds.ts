export const oddsFormatting = {
  ["Decimal"]: {
    name: "Decimal",
    min: 1,
    midPoint: 2,
    max: Infinity,
  },
  "Hong Kong": {
    name: "Hong Kong",
    min: 0,
    midPoint: 1,
    max: Infinity,
  },
  Malaysian: {
    name: "Malaysian",
    min: -1,
    midPoint: [0, 1, -1],
    max: 1,
  },
  Indonesian: {
    name: "Indonesian",
    range: {
      dogMin: 1,
      dogMax: Infinity,
      midPoints: [1, -1],
      favMin: -Infinity,
      favMax: -1,
    },
  },
  American: {
    name: "American",
    range: {
      dogMin: 100,
      dogMax: Infinity,
      midPoints: [100, -100],
      favMin: -Infinity,
      favMax: -100,
    },
  },
  Fractional: {
    name: "Fractional",
  },
  Probability: {
    name: "Probability",
  },
}

export function isValidOdds(odds: string | number) {
  if (
    isValidDecimalOdds(odds) ||
    isValidHongKongOdds(odds) ||
    isValidMalaysianOdds(odds) ||
    isValidIndonesianOdds(odds) ||
    isValidAmericanOdds(odds) ||
    (typeof odds === "string" && isValidFractionalOdds(odds)) ||
    (typeof odds === "string" && isValidProbability(odds))
  ) {
    return true
  }
  return false
}

export function isValidDecimalOdds(odds: string | number) {
  if (!["string", "number"].includes(typeof odds)) {
    return false
  }

  const numberOdds = Number(odds)
  const info = oddsFormatting.Decimal

  if (!isNaN(numberOdds) && numberOdds > info.min && numberOdds <= info.max) {
    return true
  }
  return false
}

export function isValidHongKongOdds(odds: string | number) {
  if (!["string", "number"].includes(typeof odds)) {
    return false
  }

  const numberOdds = Number(odds)
  const info = oddsFormatting["Hong Kong"]

  if (!isNaN(numberOdds) && numberOdds > info.min && numberOdds <= info.max) {
    return true
  }
  return false
}

export function isValidMalaysianOdds(odds: string | number) {
  if (!["string", "number"].includes(typeof odds)) {
    return false
  }

  const numberOdds = Number(odds)
  const info = oddsFormatting.Malaysian

  if (!isNaN(numberOdds) && numberOdds >= info.min && numberOdds <= info.max && numberOdds !== 0) {
    return true
  }
  return false
}

export function isValidIndonesianOdds(odds: string | number) {
  if (!["string", "number"].includes(typeof odds)) {
    return false
  }

  const numberOdds = Number(odds)
  const info = oddsFormatting.Indonesian.range

  if (
    !isNaN(numberOdds) &&
    ((numberOdds >= info.dogMin && numberOdds <= info.dogMax) ||
      (numberOdds >= info.favMin && numberOdds <= info.favMax))
  ) {
    return true
  }
  return false
}

export function isValidAmericanOdds(odds: string | number) {
  if (!["string", "number"].includes(typeof odds)) {
    return false
  }

  const numberOdds = Number(odds)
  const info = oddsFormatting["American"].range

  if (
    !isNaN(numberOdds) &&
    ((numberOdds >= info.dogMin && numberOdds <= info.dogMax) ||
      (numberOdds >= info.favMin && numberOdds <= info.favMax))
  ) {
    return true
  }
  return false
}

export function isValidFractionalOdds(odds: string) {
  if (typeof odds !== "string") {
    return false
  }
  const splitString = odds.split("/")
  const numerator = splitString[0]
  const denominator = splitString[1]

  if (!numerator || !denominator) {
    return false
  }

  const numberNumerator = Number(numerator)
  const numberDenominator = Number(denominator)

  if (
    !isNaN(numberNumerator) &&
    numberNumerator > 0 &&
    !isNaN(numberDenominator) &&
    numberDenominator > 0
  ) {
    return true
  }
  return false
}

export function isValidProbability(odds: string) {
  if (typeof odds !== "string") {
    return false
  }
  let oddsSplit = odds.split("")
  let oddsSplitPercentSign = odds.split("%")
  if (
    oddsSplit[oddsSplit.length - 1] === "%" &&
    oddsSplitPercentSign.length === 2 &&
    oddsSplitPercentSign[1] === "" &&
    oddsSplitPercentSign[0] &&
    !isNaN(Number(oddsSplitPercentSign[0])) &&
    Number(oddsSplitPercentSign[0]) > 0 &&
    Number(oddsSplitPercentSign[0]) <= 100
  ) {
    return true
  }

  return false
}

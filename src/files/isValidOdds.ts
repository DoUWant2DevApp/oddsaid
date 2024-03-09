import { oddsFormatsInfo } from "./oddFormatInfo"

export function isValidOdds(odds: string | number) {
  if (
    isValidDecimalOdds(odds) ||
    isValidHongKongOdds(odds) ||
    isValidMalaysianOdds(odds) ||
    isValidIndonesianOdds(odds) ||
    isValidAmericanMoneylineOdds(odds) ||
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
  const info = oddsFormatsInfo.Decimal

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
  const info = oddsFormatsInfo["Hong Kong"]

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
  const info = oddsFormatsInfo.Malaysian

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
  const info = oddsFormatsInfo.Indonesian.range

  if (
    !isNaN(numberOdds) &&
    ((numberOdds >= info.dogMin && numberOdds <= info.dogMax) ||
      (numberOdds >= info.favMin && numberOdds <= info.favMax))
  ) {
    return true
  }
  return false
}

export function isValidAmericanMoneylineOdds(odds: string | number) {
  if (!["string", "number"].includes(typeof odds)) {
    return false
  }

  const numberOdds = Number(odds)
  const info = oddsFormatsInfo["American/Moneyline"].range

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

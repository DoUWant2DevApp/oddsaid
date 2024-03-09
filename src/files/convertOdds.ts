import Big from "big.js"
import {
  isValidAmericanMoneylineOdds,
  isValidDecimalOdds,
  isValidFractionalOdds,
  isValidHongKongOdds,
  isValidIndonesianOdds,
  isValidMalaysianOdds,
  isValidProbability,
} from "./isValidOdds"
import { OddsTypeNameType } from "./oddFormatInfo"

export function convertOddsFromXToY(
  odds: string,
  convertFrom: OddsTypeNameType,
  convertTo: OddsTypeNameType,
): string | null {
  let decimalOdds: string | null = convertToDecimalFromFormat(odds, convertFrom)

  if (decimalOdds) {
    switch (convertTo) {
      case "Decimal":
        return decimalOdds
      case "American/Moneyline":
        return decimalToAmericanOdds(decimalOdds)
      case "Hong Kong":
        return decimalToHongKongOdds(decimalOdds)
      case "Malaysian":
        return decimalToMalaysianOdds(decimalOdds)
      case "Indonesian":
        return decimalToIndonesianOdds(decimalOdds)
      case "Fractional":
        return decimalToFractionalOdds(decimalOdds)
      case "Probability":
        return decimalToProbability(decimalOdds)
      default:
        return null
    }
  }
  return null
}
export function convertToDecimalFromFormat(odds: string, convertFrom: OddsTypeNameType) {
  let decimalOdds: string | null
  switch (convertFrom) {
    case "Decimal":
      decimalOdds = isValidDecimalOdds(odds) ? odds : null
      break
    case "American/Moneyline":
      decimalOdds = americanToDecimalOdds(odds)
      break
    case "Hong Kong":
      decimalOdds = hongKongToDecimalOdds(odds)
      break
    case "Malaysian":
      decimalOdds = malaysianToDecimalOdds(odds)
      break
    case "Indonesian":
      decimalOdds = indonesianToDecimalOdds(odds)
      break
    case "Fractional":
      decimalOdds = fractionalToDecimalOdds(odds)
      break
    case "Probability":
      decimalOdds = probabilityToDecimalOdds(odds)
      break
    default:
      return null
  }
  return decimalOdds
}

export function decimalToAmericanOdds(odds: string | number): string | null {
  if (!isValidDecimalOdds(odds)) {
    return null
  }

  const numberOdds = new Big(odds)

  if (numberOdds.eq(2)) {
    return "+100"
  } else if (numberOdds.lt(2)) {
    return new Big(-100).div(numberOdds.minus(1)).toString()
  } else {
    return "+" + numberOdds.minus(1).times(100).toString()
  }
}

export function decimalToHongKongOdds(odds: string | number): string | null {
  if (!isValidDecimalOdds(odds)) {
    return null
  }

  const numberOdds = new Big(odds)
  return numberOdds.minus(1).toString()
}

export function decimalToMalaysianOdds(odds: string | number): string | null {
  if (!isValidDecimalOdds(odds)) {
    return null
  }

  const numberOdds = new Big(odds)
  if (numberOdds.lte(2)) {
    return numberOdds.minus(1).toString()
  } else {
    return new Big(-1).div(numberOdds.minus(1)).toString()
  }
}

export function decimalToIndonesianOdds(odds: string | number): string | null {
  if (!isValidDecimalOdds(odds)) {
    return null
  }

  const numberOdds = new Big(odds)
  if (numberOdds.gte(2)) {
    return numberOdds.minus(1).toString()
  } else {
    return new Big(-1).div(numberOdds.minus(1)).toString()
  }
}

export function decimalToFractionalOdds(odds: string | number): string | null {
  if (!isValidDecimalOdds(odds)) {
    return null
  }

  const numberOdds = new Big(odds).minus(1)
  const fractionalOdds = bigToFraction(numberOdds)
  return `${fractionalOdds.numerator}/${fractionalOdds.denominator}`
}

export function decimalToProbability(odds: string | number): string | null {
  if (!isValidDecimalOdds(odds)) {
    return null
  }

  const numberOdds = new Big(odds)
  const probability = new Big(1).div(numberOdds).times(100).toString()
  return `${probability}%`
}

function bigToFraction(decimal: Big): { numerator: number; denominator: number } {
  // Convert to fraction with a common denominator of 10^decimal places
  const denominator = new Big(10).pow(decimal.toString().split(".")[1]?.length || 0)
  const numerator = decimal.mul(denominator)
  const commonDivisor = gcd(numerator, denominator)

  const simplifiedNumerator = numerator.div(commonDivisor).round()
  const simplifiedDenominator = denominator.div(commonDivisor).round()

  return {
    numerator: simplifiedNumerator.toNumber(),
    denominator: simplifiedDenominator.toNumber(),
  }
}

function gcd(a: Big, b: Big): Big {
  while (!b.eq(0)) {
    let temp = b
    b = a.mod(b)
    a = temp
  }
  return a
}

export function americanToDecimalOdds(odds: string | number): string | null {
  if (!isValidAmericanMoneylineOdds(odds)) {
    return null
  }
  const bigOdds = new Big(Number(odds))

  if (bigOdds.gte(0)) {
    // Positive American Odds
    return bigOdds.div(100).plus(1).toString() // Keeping two decimal places for consistency
  } else {
    // Negative American Odds
    return new Big(100).div(bigOdds.abs()).plus(1).toString()
  }
}
export function americanToHongKongOdds(odds: string | number): string | null {
  return decimalToHongKongOdds(americanToDecimalOdds(Number(odds)) || "")
}
export function americanToMalaysianOdds(odds: string | number): string | null {
  return decimalToMalaysianOdds(americanToDecimalOdds(Number(odds)) || "")
}
export function americanToIndonesianOdds(odds: string | number): string | null {
  return decimalToIndonesianOdds(americanToDecimalOdds(Number(odds)) || "")
}
export function americanToFractionalOdds(odds: string | number): string | null {
  return decimalToFractionalOdds(americanToDecimalOdds(Number(odds)) || "")
}
export function americanToProbability(odds: string | number): string | null {
  return decimalToProbability(americanToDecimalOdds(Number(odds)) || "")
}
export function hongKongToDecimalOdds(odds: string | number): string | null {
  if (!isValidHongKongOdds(odds)) {
    return null
  }
  const bigOdds = new Big(odds)
  return bigOdds.plus(1).toString()
}
export function hongKongToAmericanOdds(odds: string | number): string | null {
  return decimalToAmericanOdds(hongKongToDecimalOdds(odds) || "")
}
export function hongKongToMalaysianOdds(odds: string | number): string | null {
  return decimalToMalaysianOdds(hongKongToDecimalOdds(odds) || "")
}
export function hongKongToIndonesianOdds(odds: string | number): string | null {
  return decimalToIndonesianOdds(hongKongToDecimalOdds(odds) || "")
}
export function hongKongToFractionalOdds(odds: string | number): string | null {
  return decimalToFractionalOdds(hongKongToDecimalOdds(odds) || "")
}
export function hongKongToProbability(odds: string | number): string | null {
  return decimalToProbability(hongKongToDecimalOdds(odds) || "")
}
export function malaysianToDecimalOdds(odds: string | number): string | null {
  if (!isValidMalaysianOdds(odds)) {
    return null
  }
  const bigOdds = new Big(odds)
  if (bigOdds.gte(0)) {
    return bigOdds.plus(1).toString()
  } else {
    return new Big(1).plus(new Big(1).div(bigOdds.abs())).toString()
  }
}
export function malaysianToAmericanOdds(odds: string | number): string | null {
  return decimalToAmericanOdds(malaysianToDecimalOdds(odds) || "")
}
export function malaysianToHongKongOdds(odds: string | number): string | null {
  return decimalToHongKongOdds(malaysianToDecimalOdds(odds) || "")
}
export function malaysianToIndonesianOdds(odds: string | number): string | null {
  return decimalToIndonesianOdds(malaysianToDecimalOdds(odds) || "")
}
export function malaysianToFractionalOdds(odds: string | number): string | null {
  return decimalToFractionalOdds(malaysianToDecimalOdds(odds) || "")
}
export function malaysianToProbability(odds: string | number): string | null {
  return decimalToProbability(malaysianToDecimalOdds(odds) || "")
}
export function indonesianToDecimalOdds(odds: string | number): string | null {
  if (!isValidIndonesianOdds(odds)) {
    return null
  }
  const bigOdds = new Big(odds)
  if (bigOdds.gte(0)) {
    return bigOdds.plus(1).toString()
  } else {
    return new Big(1).div(bigOdds.abs()).plus(new Big(1)).toString()
  }
}
export function indonesianToAmericanOdds(odds: string | number): string | null {
  return decimalToAmericanOdds(indonesianToDecimalOdds(odds) || "")
}
export function indonesianToHongKongOdds(odds: string | number): string | null {
  return decimalToHongKongOdds(indonesianToDecimalOdds(odds) || "")
}
export function indonesianToMalaysianOdds(odds: string | number): string | null {
  return decimalToMalaysianOdds(indonesianToDecimalOdds(odds) || "")
}
export function indonesianToFractionalOdds(odds: string | number): string | null {
  return decimalToFractionalOdds(indonesianToDecimalOdds(odds) || "")
}
export function indonesianToProbability(odds: string | number): string | null {
  return decimalToProbability(indonesianToDecimalOdds(odds) || "")
}
export function fractionalToDecimalOdds(odds: string): string | null {
  if (typeof odds !== "string" || !isValidFractionalOdds(odds)) {
    return null
  }
  return new Big(odds.split("/")[0])
    .div(new Big(odds.split("/")[1]))
    .plus(1)
    .toString()
}
export function fractionalToAmericanOdds(odds: string): string | null {
  return decimalToAmericanOdds(fractionalToDecimalOdds(odds) || "")
}
export function fractionalToHongKongOdds(odds: string): string | null {
  return decimalToHongKongOdds(fractionalToDecimalOdds(odds) || "")
}
export function fractionalToMalaysianOdds(odds: string): string | null {
  return decimalToMalaysianOdds(fractionalToDecimalOdds(odds) || "")
}
export function fractionalToIndonesianOdds(odds: string): string | null {
  return decimalToIndonesianOdds(fractionalToDecimalOdds(odds) || "")
}
export function fractionalToProbability(odds: string): string | null {
  return decimalToProbability(fractionalToDecimalOdds(odds) || "")
}
export function probabilityToDecimalOdds(odds: string): string | null {
  if (!isValidProbability(odds)) {
    return null
  }
  const bigOdds = new Big(odds.split("%")[0])
  return new Big(1).div(bigOdds.div(new Big(100))).toString()
}
export function probabilityToAmericanOdds(odds: string): string | null {
  return decimalToAmericanOdds(probabilityToDecimalOdds(odds) || "")
}
export function probabilityToHongKongOdds(odds: string): string | null {
  return decimalToHongKongOdds(probabilityToDecimalOdds(odds) || "")
}
export function probabilityToMalaysianOdds(odds: string): string | null {
  return decimalToMalaysianOdds(probabilityToDecimalOdds(odds) || "")
}
export function probabilityToIndonesianOdds(odds: string): string | null {
  return decimalToIndonesianOdds(probabilityToDecimalOdds(odds) || "")
}
export function probabilityToFractionalOdds(odds: string): string | null {
  return decimalToFractionalOdds(probabilityToDecimalOdds(odds) || "")
}

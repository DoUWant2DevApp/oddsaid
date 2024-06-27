//Odds Types: American, Decimal, Fractional, Probability, Hong Kong, Malay, Indonesian

import {
  isValidAmericanOdds,
  isValidDecimalOdds,
  isValidFractionalOdds,
  isValidHongKongOdds,
  isValidIndonesianOdds,
  isValidMalaysianOdds,
  isValidProbability,
  oddsFormatting,
} from "./isValidOdds"

export type OddsTypeNameType =
  | "American"
  | "Decimal"
  | "Fractional"
  | "Hong Kong"
  | "Probability"
  | "Malaysian"
  | "Indonesian"

export const oddsTypesNames: [
  "American",
  "Decimal",
  "Fractional",
  "Probability",
  "Hong Kong",
  "Malaysian",
  "Indonesian",
] = ["American", "Decimal", "Fractional", "Probability", "Hong Kong", "Malaysian", "Indonesian"]

export const oddsFormatsInfo = {
  ["Decimal"]: {
    ...oddsFormatting.Decimal,
    validationFunction: isValidDecimalOdds,
  },
  "Hong Kong": {
    ...oddsFormatting["Hong Kong"],
    validationFunction: isValidHongKongOdds,
  },
  Malaysian: {
    ...oddsFormatting.Malaysian,
    validationFunction: isValidMalaysianOdds,
  },
  Indonesian: {
    ...oddsFormatting.Indonesian,
    validationFunction: isValidIndonesianOdds,
  },
  American: {
    ...oddsFormatting.American,
    validationFunction: isValidAmericanOdds,
  },
  Fractional: {
    ...oddsFormatting.Fractional,
    validationFunction: isValidFractionalOdds,
  },
  Probability: {
    ...oddsFormatting.Probability,
    validationFunction: isValidProbability,
  },
}

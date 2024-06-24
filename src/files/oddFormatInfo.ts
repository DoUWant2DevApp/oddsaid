//Odds Types: American, Decimal, Fractional, Probability, Hong Kong, Malay, Indonesian

import {
  isValidAmericanOdds,
  isValidDecimalOdds,
  isValidFractionalOdds,
  isValidHongKongOdds,
  isValidIndonesianOdds,
  isValidMalaysianOdds,
  isValidProbability,
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
    name: "Decimal",
    min: 1,
    midPoint: 2,
    max: Infinity,
    validationFunction: isValidDecimalOdds,
  },
  "Hong Kong": {
    name: "Hong Kong",
    min: 0,
    midPoint: 1,
    max: Infinity,
    validationFunction: isValidHongKongOdds,
  },
  Malaysian: {
    name: "Malaysian",
    min: -1,
    midPoint: [0, 1, -1],
    max: 1,
    validationFunction: isValidMalaysianOdds,
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
    validationFunction: isValidIndonesianOdds,
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
    validationFunction: isValidAmericanOdds,
  },
  Fractional: {
    name: "Fractional",
    validationFunction: isValidFractionalOdds,
  },
  Probability: {
    name: "Probability",
    validationFunction: isValidProbability,
  },
}

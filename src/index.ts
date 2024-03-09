import {
  isValidOdds,
  isValidDecimalOdds,
  isValidHongKongOdds,
  isValidMalaysianOdds,
  isValidIndonesianOdds,
  isValidAmericanMoneylineOdds,
  isValidFractionalOdds,
  isValidProbability,
} from "./files/isValidOdds"

import { whatOddsFormats } from "./files/whatOddsFormats"

import {
  //decimal to
  decimalToAmericanOdds,
  decimalToHongKongOdds,
  decimalToMalaysianOdds,
  decimalToIndonesianOdds,
  decimalToFractionalOdds,
  decimalToProbability,
  //american to
  americanToDecimalOdds,
  americanToHongKongOdds,
  americanToMalaysianOdds,
  americanToIndonesianOdds,
  americanToFractionalOdds,
  americanToProbability,
  //hong kong to
  hongKongToDecimalOdds,
  hongKongToAmericanOdds,
  hongKongToMalaysianOdds,
  hongKongToIndonesianOdds,
  hongKongToFractionalOdds,
  hongKongToProbability,
  //malaysian to
  malaysianToDecimalOdds,
  malaysianToAmericanOdds,
  malaysianToHongKongOdds,
  malaysianToIndonesianOdds,
  malaysianToFractionalOdds,
  malaysianToProbability,
  //indonesian to
  indonesianToDecimalOdds,
  indonesianToAmericanOdds,
  indonesianToHongKongOdds,
  indonesianToMalaysianOdds,
  indonesianToFractionalOdds,
  indonesianToProbability,
  //fractional to
  fractionalToDecimalOdds,
  fractionalToAmericanOdds,
  fractionalToHongKongOdds,
  fractionalToMalaysianOdds,
  fractionalToIndonesianOdds,
  fractionalToProbability,
  //probability to
  probabilityToDecimalOdds,
  probabilityToAmericanOdds,
  probabilityToHongKongOdds,
  probabilityToMalaysianOdds,
  probabilityToIndonesianOdds,
  probabilityToFractionalOdds,
  convertOddsFromXToY,
  convertToDecimalFromFormat,
} from "./files/convertOdds"

export const oddsAid = {
  //validation
  validate: {
    isValidOdds,
    isValidDecimalOdds,
    isValidHongKongOdds,
    isValidMalaysianOdds,
    isValidIndonesianOdds,
    isValidAmericanMoneylineOdds,
    isValidFractionalOdds,
    isValidProbability,
  },

  //what potential odds formats
  whatOddsFormats,

  //convert odds
  convertOdds: {
    //decimal to
    decimalToAmericanOdds,
    decimalToHongKongOdds,
    decimalToMalaysianOdds,
    decimalToIndonesianOdds,
    decimalToFractionalOdds,
    decimalToProbability,
    //american to
    americanToDecimalOdds,
    americanToHongKongOdds,
    americanToMalaysianOdds,
    americanToIndonesianOdds,
    americanToFractionalOdds,
    americanToProbability,
    //hong kong to
    hongKongToDecimalOdds,
    hongKongToAmericanOdds,
    hongKongToMalaysianOdds,
    hongKongToIndonesianOdds,
    hongKongToFractionalOdds,
    hongKongToProbability,
    //malaysian to
    malaysianToDecimalOdds,
    malaysianToAmericanOdds,
    malaysianToHongKongOdds,
    malaysianToIndonesianOdds,
    malaysianToFractionalOdds,
    malaysianToProbability,
    //indonesian to
    indonesianToDecimalOdds,
    indonesianToAmericanOdds,
    indonesianToHongKongOdds,
    indonesianToMalaysianOdds,
    indonesianToFractionalOdds,
    indonesianToProbability,
    //fractional to
    fractionalToDecimalOdds,
    fractionalToAmericanOdds,
    fractionalToHongKongOdds,
    fractionalToMalaysianOdds,
    fractionalToIndonesianOdds,
    fractionalToProbability,
    //probability to
    probabilityToDecimalOdds,
    probabilityToAmericanOdds,
    probabilityToHongKongOdds,
    probabilityToMalaysianOdds,
    probabilityToIndonesianOdds,
    probabilityToFractionalOdds,
  },
  convertOddsFromXToY,
}

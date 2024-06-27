import {
  isValidOdds,
  isValidDecimalOdds,
  isValidHongKongOdds,
  isValidMalaysianOdds,
  isValidIndonesianOdds,
  isValidAmericanOdds,
  isValidFractionalOdds,
  isValidProbability,
} from "./files/isValidOdds"

import { whatOddsFormats } from "./files/whatOddsFormats"
import { oddsFormatsInfo, oddsTypesNames } from "./files/oddFormatInfo"
import type { OddsTypeNameType } from "./files/oddFormatInfo"
import { singleBet } from "./betCalculators/singleBetCalc"
import { noVigOddsConversion } from "./betCalculators/noVigOddsConversion"
import { parlayOddsCalc } from "./betCalculators/parlayOddsCalc"
import { hedgeBetAmount } from "./betCalculators/hedgeBetAmount"

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
    isValidAmericanOdds,
    isValidFractionalOdds,
    isValidProbability,
  },

  //what potential odds formats
  whatOddsFormats,
  betCalculators: {
    singleBet,
    noVigOddsConversion,
    parlayOddsCalc,
    hedgeBetAmount,
  },
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

export {
  // validation
  isValidOdds,
  isValidDecimalOdds,
  isValidHongKongOdds,
  isValidMalaysianOdds,
  isValidIndonesianOdds,
  isValidAmericanOdds,
  isValidFractionalOdds,
  isValidProbability,
  //bet calculators
  singleBet,
  noVigOddsConversion,
  parlayOddsCalc,
  hedgeBetAmount,
  //what potential odds formats
  whatOddsFormats,

  //convertFromXtoY
  convertOddsFromXToY,
  //info
  oddsFormatsInfo,
  oddsTypesNames,
}

export {
  //conversion
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
} from "./files/convertOdds"
export type { OddsTypeNameType }

import Big from "big.js"
import { convertOddsFromXToY } from "../files/convertOdds"
import { oddsFormatsInfo, OddsTypeNameType, oddsTypesNames } from "../files/oddFormatInfo"

export function holdCalculator(
  oddsFormat: OddsTypeNameType,
  odds1: string | number,
  odds2: string | number,
  roundDecimals?: number,
): string | null {
  if (
    !oddsTypesNames.includes(oddsFormat) ||
    !["number", "string"].includes(typeof odds1) ||
    !["number", "string"].includes(typeof odds2)
  ) {
    return null
  }
  odds1 = odds1 + ""
  odds2 = odds2 + ""

  odds1 = oddsFormat === "Probability" && !odds1.includes("%") ? odds1 + "%" : odds1
  odds2 = oddsFormat === "Probability" && !odds2.includes("%") ? odds2 + "%" : odds2

  if (
    oddsFormatsInfo[oddsFormat].validationFunction(odds1) &&
    oddsFormatsInfo[oddsFormat].validationFunction(odds2)
  ) {
    const impliedProbability1 = convertOddsFromXToY(odds1, oddsFormat, "Probability")
    const impliedProbability2 = convertOddsFromXToY(odds2, oddsFormat, "Probability")
    if (impliedProbability1 && impliedProbability2) {
      const hold = Big(impliedProbability1.replace("%", ""))
        .plus(Big(impliedProbability2.replace("%", "")))
        .minus(100)

      return typeof roundDecimals === "number"
        ? hold.round(roundDecimals).toString() + "%"
        : hold.toString() + "%"
    }
  }

  return null
}

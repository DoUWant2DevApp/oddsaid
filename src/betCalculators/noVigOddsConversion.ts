import Big from "big.js"
import { convertOddsFromXToY } from "../files/convertOdds"
import { OddsTypeNameType, oddsTypesNames } from "../files/oddFormatInfo"

export function noVigOddsConversion(
  oddsFormat: OddsTypeNameType,
  odds1: number | string,
  odds2: number | string,
  options?: { roundOddsDecimals?: number; roundPercentageDecimals?: number },
): {
  noVigOdds1: string | null
  noVigProbability1: string | null
  noVigOdds2: string | null
  noVigProbability2: string | null
} {
  odds1 = odds1 + ""
  odds2 = odds2 + ""
  if (oddsTypesNames.includes(oddsFormat)) {
    const impliedProbability1 = convertOddsFromXToY(odds1, oddsFormat, "Probability")
    const impliedProbability2 = convertOddsFromXToY(odds2, oddsFormat, "Probability")
    if (impliedProbability1 && impliedProbability2) {
      const bigImpliedProbability1 = new Big(impliedProbability1.replace("%", ""))
      const bigImpliedProbability2 = new Big(impliedProbability2.replace("%", ""))

      const totalImpliedProbability = bigImpliedProbability1.plus(bigImpliedProbability2)

      const bigNoVigProb1 = bigImpliedProbability1.div(totalImpliedProbability).times(100)
      const bigNoVigProb2 = bigImpliedProbability2.div(totalImpliedProbability).times(100)
      const noVigOdds1 = convertOddsFromXToY(
        bigNoVigProb1.toString() + "%",
        "Probability",
        oddsFormat,
        options?.roundOddsDecimals,
      )
      const noVigOdds2 = convertOddsFromXToY(
        bigNoVigProb2.toString() + "%",
        "Probability",
        oddsFormat,
        options?.roundOddsDecimals,
      )

      if (bigNoVigProb1 && bigNoVigProb2 && noVigOdds1 && noVigOdds2) {
        return {
          noVigOdds1,
          noVigProbability1:
            (typeof options?.roundPercentageDecimals === "number"
              ? bigNoVigProb1.round(options.roundPercentageDecimals).toString()
              : bigNoVigProb1.toString()) + "%",
          noVigOdds2,
          noVigProbability2:
            (typeof options?.roundPercentageDecimals === "number"
              ? bigNoVigProb2.round(options.roundPercentageDecimals).toString()
              : bigNoVigProb2.toString()) + "%",
        }
      }
    }
  }

  return { noVigOdds1: null, noVigProbability1: null, noVigOdds2: null, noVigProbability2: null }
}

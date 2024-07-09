import Big from "big.js"
import { convertOddsFromXToY } from "../files/convertOdds"
import { OddsTypeNameType } from "../files/oddFormatInfo"
import { singleBet } from "./singleBetCalc"

export type HedgeStrategiesType = "Equal Profit" | "Prevent Loss"

export function hedgeBetAmount(
  originalBetAmount: number,
  originalOdds: { odds: string | number; oddsFormat: OddsTypeNameType },
  hedgeOdds: { odds: string | number; oddsFormat: OddsTypeNameType },
  strategy: HedgeStrategiesType,
): number | null {
  const originalOddsDecimalFormat = convertOddsFromXToY(
    originalOdds.odds + "",
    originalOdds.oddsFormat,
    "Decimal",
  )
  const hedgeOddsDecimalFormat = convertOddsFromXToY(
    hedgeOdds.odds + "",
    hedgeOdds.oddsFormat,
    "Decimal",
  )

  if (typeof originalOddsDecimalFormat === "string" && typeof hedgeOddsDecimalFormat === "string") {
    let originalBetWinOutcome = singleBet(originalBetAmount, originalOddsDecimalFormat, "Decimal")
    if (typeof originalBetWinOutcome.profit === "number") {
      if (strategy === "Equal Profit") {
        return new Big(originalBetWinOutcome.profit)
          .plus(new Big(originalBetAmount))
          .div(new Big(hedgeOddsDecimalFormat))
          .round(2)
          .toNumber()
      } else if (strategy === "Prevent Loss") {
        return new Big(originalBetAmount)
          .div(new Big(hedgeOddsDecimalFormat).minus(1))
          .round(2)
          .toNumber()
      }
    }
  }

  return null
}

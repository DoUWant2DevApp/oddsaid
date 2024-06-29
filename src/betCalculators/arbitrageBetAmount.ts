import { OddsTypeNameType } from "../files/oddFormatInfo"
import { hedgeBetAmount } from "./hedgeBetAmount"

export function arbitrageBetAmount(
  originalBetAmount: number,
  originalOdds: { odds: string | number; oddsFormat: OddsTypeNameType },
  hedgeOdds: { odds: string | number; oddsFormat: OddsTypeNameType },
) {
  return hedgeBetAmount(originalBetAmount, originalOdds, hedgeOdds, "Equal Profit")
}

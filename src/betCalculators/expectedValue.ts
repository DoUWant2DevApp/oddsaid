import Big from "big.js"
import { OddsTypeNameType } from "../files/oddFormatInfo"
import { singleBet } from "./singleBetCalc"

export function expectedValue(
  betAmount: number,
  odds: string | number,
  oddsFormat: OddsTypeNameType,
  winProbability: number | string,
): number | null {
  winProbability = winProbability + ""
  winProbability = winProbability.includes("%") ? winProbability.replace("%", "") : winProbability

  const { profit } = singleBet(betAmount, odds + "", oddsFormat)

  if (
    typeof betAmount == "number" &&
    !isNaN(betAmount) &&
    !isNaN(Number(winProbability)) &&
    typeof profit === "string" &&
    !isNaN(Number(profit))
  ) {
    const fairWinAsDecimal = Big(winProbability).div(100)
    const par1 = fairWinAsDecimal.times(Big(profit))
    let fairLossAsDecimal = Big(1).minus(fairWinAsDecimal)
    let par2 = Big(fairLossAsDecimal).times(betAmount)

    return par1.minus(par2).round(2).toNumber()
  }
  return null
}

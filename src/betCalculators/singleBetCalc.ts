import Big from "big.js"
import { convertToDecimalFromFormat } from "../files/convertOdds"
import { OddsTypeNameType } from "../files/oddFormatInfo"

export function singleBetCalc(
  betAmount: number | string,
  odds: string,
  oddsFormat: OddsTypeNameType,
  toFixed?: number,
): { profit: string | null; totalPayout: string | null } {
  const decimalOdds = convertToDecimalFromFormat(odds, oddsFormat)
  betAmount = betAmount
  if (
    decimalOdds &&
    (typeof betAmount === "number" ||
      (typeof betAmount === "string" && betAmount.length > 0 && !isNaN(Number(betAmount))))
  ) {
    let bigBetAmount = Big(betAmount)
    const totalPayout = bigBetAmount.mul(new Big(decimalOdds))
    const profit = totalPayout.minus(bigBetAmount)
    const isToFixedValid = !isNaN(Number(toFixed))
    return {
      profit: isToFixedValid ? profit.toFixed(toFixed) : profit.toString(),
      totalPayout: isToFixedValid ? totalPayout.toFixed(toFixed) : totalPayout.toString(),
    }
  }
  return { profit: null, totalPayout: null }
}

import Big from "big.js"
import { convertToDecimalFromFormat } from "../files/convertOdds"
import { OddsTypeNameType } from "../files/oddFormatInfo"

export function singleBet(
  betAmount: number | string,
  odds: string,
  oddsFormat: OddsTypeNameType,
  toFixed?: number,
): { profit: number | null; totalPayout: number | null } {
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
      profit: isToFixedValid ? profit.round(toFixed).toNumber() : profit.toNumber(),
      totalPayout: isToFixedValid ? totalPayout.round(toFixed).toNumber() : totalPayout.toNumber(),
    }
  }
  return { profit: null, totalPayout: null }
}

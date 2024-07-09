import Big from "big.js"
import { oddsFormatsInfo, OddsTypeNameType, oddsTypesNames } from "../files/oddFormatInfo"
import { singleBet } from "./singleBetCalc"
import { expectedValue } from "./expectedValue"

type KellyCriterionCalculatorReturnType = {
  expectedValue: number | null
  expectedROI: string | null
  amountToBet: number | null
  percentageOfBankrollToBet: string | null
}

export function kellyCriterionCalculator(
  oddsFormat: OddsTypeNameType,
  odds: number | string,
  winProbability: number | string,
  kellyMultiplier?: number,
  bankroll?: number,
): KellyCriterionCalculatorReturnType {
  kellyMultiplier = typeof kellyMultiplier === "number" ? kellyMultiplier : 1
  //
  let calc: KellyCriterionCalculatorReturnType = {
    expectedValue: null,
    expectedROI: null,
    amountToBet: null,
    percentageOfBankrollToBet: null,
  }
  odds = odds + ""
  odds = oddsFormat === "Probability" && !odds.includes("%") ? odds + "%" : odds
  winProbability = (winProbability + "").replace("%", "")

  if (
    oddsTypesNames.includes(oddsFormat) &&
    oddsFormatsInfo[oddsFormat].validationFunction(odds) &&
    winProbability !== "" &&
    !isNaN(Number(winProbability))
  ) {
    const profitFrom1000000Bet = singleBet(1000000, odds, oddsFormat).profit
    if (typeof profitFrom1000000Bet === "number") {
      const winProbabilityAsDecimal = Big(winProbability).div(100)
      const probabilityOfLossAsDecimal = Big(1).minus(winProbabilityAsDecimal)
      const proportionOfBetGainedWithWin = Big(profitFrom1000000Bet).div(1000000)
      const fractionOfBankrollToWagerAsDecimal = winProbabilityAsDecimal
        .minus(probabilityOfLossAsDecimal.div(proportionOfBetGainedWithWin))
        .times(kellyMultiplier)

      const standardBetAmount = 1000000

      let betAmount =
        typeof bankroll === "number"
          ? Big(bankroll).times(fractionOfBankrollToWagerAsDecimal).round(2).toNumber()
          : 1000000

      betAmount = betAmount > 0 ? betAmount : standardBetAmount

      let ev = expectedValue(betAmount, odds, oddsFormat, winProbability)
      if (ev) {
        const bigRoi = Big(ev).div(betAmount).times(100)
        calc.expectedROI = bigRoi.round(2).toNumber() + "%"
        calc.expectedValue = typeof bankroll === "number" && bigRoi.gt(0) ? ev : null
        calc.amountToBet = typeof bankroll === "number" ? (bigRoi.gt(0) ? betAmount : 0) : null
        calc.percentageOfBankrollToBet = bigRoi.lte(0)
          ? "0%"
          : fractionOfBankrollToWagerAsDecimal.times(100).round(2).toNumber() + "%"
      }
    }
  }
  return calc
}

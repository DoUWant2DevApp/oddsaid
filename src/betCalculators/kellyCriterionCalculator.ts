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
    !isNaN(Number(winProbability))
  ) {
    const profitFrom100Bet = singleBet(100, odds, oddsFormat).profit
    if (profitFrom100Bet) {
      const winProbabilityAsDecimal = Big(winProbability).div(100)
      const probabilityOfLossAsDecimal = Big(1).minus(winProbabilityAsDecimal)
      const proportionOfBetGainedWithWin = Big(profitFrom100Bet).div(100)
      const fractionOfBankrollToWagerAsDecimal = winProbabilityAsDecimal
        .minus(probabilityOfLossAsDecimal.div(proportionOfBetGainedWithWin))
        .times(kellyMultiplier)

      calc.percentageOfBankrollToBet =
        fractionOfBankrollToWagerAsDecimal.times(100).round(2).toNumber() + "%"

      const betAmount =
        typeof bankroll === "number"
          ? Big(bankroll).times(fractionOfBankrollToWagerAsDecimal).round(2).toNumber()
          : 100

      const ev = expectedValue(betAmount, odds, oddsFormat, winProbability)

      calc.amountToBet = typeof bankroll === "number" ? betAmount : null

      if (ev) {
        calc.expectedValue = bankroll ? ev : null
        calc.expectedROI = Big(ev).div(betAmount).times(100).round(2).toNumber() + "%"
      }
    }
  }
  return calc
}

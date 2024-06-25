import Big from "big.js"
import { convertOddsFromXToY } from "../files/convertOdds"
import { OddsTypeNameType } from "../files/oddFormatInfo"

export function parlayOddsCalc(
  odds: { odds: string; oddsFormat: OddsTypeNameType }[],
  outputOddsFormat: OddsTypeNameType,
  roundDecimals?: number,
): string | null {
  const decimalOddsArr: (Big | null)[] = odds.map((o) => {
    const decimalOddsOrNull = convertOddsFromXToY(o.odds, o.oddsFormat, "Decimal")
    if (decimalOddsOrNull !== null) {
      return new Big(decimalOddsOrNull)
    }
    return null
  })
  if (decimalOddsArr.includes(null)) {
    return null
  }
  const parlayDecimalOdds = (decimalOddsArr as Big[]).reduce((accumulator, currentValue) => {
    return new Big(accumulator).times(new Big(currentValue))
  })

  return convertOddsFromXToY(
    parlayDecimalOdds.toString(),
    "Decimal",
    outputOddsFormat,
    roundDecimals,
  )
}

import { OddsTypeNameType, oddsFormatsInfo, oddsTypesNames } from "./oddFormatInfo"

export function whatOddsFormats(odds: number | string): Array<OddsTypeNameType> {
  const possibleOdds: OddsTypeNameType[] = []
  odds = odds + ""
  for (let str of oddsTypesNames) {
    if (oddsFormatsInfo[str].validationFunction(odds)) {
      possibleOdds.push(str)
    }
  }

  return possibleOdds
}

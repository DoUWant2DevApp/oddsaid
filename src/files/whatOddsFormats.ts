import { OddsTypeNameType, oddsFormatsInfo } from "./oddFormatInfo"

export function whatOddsFormats(odds: number | string): Array<OddsTypeNameType> {
  const possibleOdds: OddsTypeNameType[] = []
  odds = odds + ""
  for (let str of Object.keys(oddsFormatsInfo)) {
    // @ts-ignore
    if (oddsFormatsInfo[str].validationFunction(odds)) {
      // @ts-ignore
      possibleOdds.push(oddsFormatsInfo[str].name)
    }
  }

  return possibleOdds
}

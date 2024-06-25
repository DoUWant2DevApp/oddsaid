import { noVigOddsConversion } from "./noVigOddsConversion"

test.each([
  [
    "American",
    "+100",
    "-100",
    undefined,
    {
      noVigOdds1: "+100",
      noVigProbability1: "50%",
      noVigOdds2: "+100",
      noVigProbability2: "50%",
    },
  ],
  [
    "American",
    "+110",
    "+110",
    undefined,
    {
      noVigOdds1: "+100",
      noVigProbability1: "50%",
      noVigOdds2: "+100",
      noVigProbability2: "50%",
    },
  ],
  [
    "American",
    "+110",
    "-110",
    {
      roundOddsDecimals: 0,
      roundPercentageDecimals: 2,
    },
    {
      noVigOdds1: "+110",
      noVigProbability1: "47.62%",
      noVigOdds2: "-110",
      noVigProbability2: "52.38%",
    },
  ],
  [
    "American",
    -192,
    160,
    {
      roundOddsDecimals: 2,
      roundPercentageDecimals: 0,
    },
    {
      noVigOdds1: "-170.96",
      noVigProbability1: "63%",
      noVigOdds2: "+170.96",
      noVigProbability2: "37%",
    },
  ],
  [
    "American",
    null,
    160,
    {
      roundOddsDecimals: 2,
      roundPercentageDecimals: 0,
    },
    { noVigOdds1: null, noVigProbability1: null, noVigOdds2: null, noVigProbability2: null },
  ],
  [
    "Decimal",
    2.2,
    1.8,
    undefined,
    {
      noVigOdds1: "2.22222222222222222222",
      noVigProbability1: "45%",
      noVigOdds2: "1.81818181818181818182",
      noVigProbability2: "55%",
    },
  ],
  [
    "Probability",
    "45.45%",
    "55.56%",
    { roundOddsDecimals: 0, roundPercentageDecimals: 2 },
    {
      noVigOdds1: "45%",
      noVigProbability1: "45%",
      noVigOdds2: "55%",
      noVigProbability2: "55%",
    },
  ],
])("noVigOddsConversion test", (oddsFormat, odds1, odds2, roundOptions, correctResult) => {
  //   @ts-ignore
  let res = noVigOddsConversion(oddsFormat, odds1, odds2, roundOptions)
  // console.log("____", res, correctResult, "____")
  expect(res.noVigOdds1).toBe(correctResult.noVigOdds1)
  expect(res.noVigProbability1).toBe(correctResult.noVigProbability1)
  expect(res.noVigOdds2).toBe(correctResult.noVigOdds2)
  expect(res.noVigProbability2).toBe(correctResult.noVigProbability2)
})

# TODO

- This package is under development. I **do NOT recommend using it currently**.
- Implement More Bet Calculators
- Minify Build
- Fix Fraction Simplification

## Exported Functions

| Name                     | Description                                                                                                 | Output                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| singleBetCalc            | Returns profit and totalPayout as strings or null                                                           | {profit: number or null totalPayout: string or null;}                                                                                |
| parlayOddsCalc           | Returns parlay odds as string or null                                                                       | string or null                                                                                                                       |
| noVigOddsConversion      | Returns no-vig odds and no-vig probabilities as string or null                                              | {noVigOdds1: string or null;noVigProbability1: string or null;noVigOdds2: string or null;noVigProbability2: string or null;}         |
| hedgeBetAmount           | Returns hedge bet amount as number or null                                                                  | number or null                                                                                                                       |
| arbitrageBetAmount       | Returns arbitrage bet amount as number or null                                                              | number or null                                                                                                                       |
| expectedValue            | Returns expected value as number or null                                                                    | number or null                                                                                                                       |
| convertOddsFromXToY      | Returns converted odds as string or null                                                                    | string or null                                                                                                                       |
| kellyCriterionCalculator | Returns expectedValue, expectedROi, amountToBet, and percentageOfBankrollToBet based on the Kelly criterion | {expectedValue: number or null, expectedROI: string or null, amountToBet: number or null, percentageOfBankrollToBet: string or null} |
| holdCalculator           | returns hold % as a string or null                                                                          | string or null                                                                                                                       |
| vigCalculator            | returns vig % as a string or null                                                                           | string or null                                                                                                                       |

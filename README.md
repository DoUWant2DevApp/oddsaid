# TODO

- This package is under development. I **do NOT recommend using it currently**.
- Implement More Bet Calculators
- Minify Build
- Fix Fraction Simplification

## Exported Functions

| Name                | Description                                                    | Output                                                                                                                       |
| ------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| singleBetCalc       | Returns profit and totalPayout as strings or null              | {profit: string or null totalPayout: string or null;}                                                                        |
| parlayOddsCalc      | Returns parlay odds as string or null                          | string or null                                                                                                               |
| noVigOddsConversion | Returns no-vig odds and no-vig probabilities as string or null | {noVigOdds1: string or null;noVigProbability1: string or null;noVigOdds2: string or null;noVigProbability2: string or null;} |
| hedgeBetAmount      | Returns hedge bet amount as number or null                     | string or null                                                                                                               |

export type RankingType = 'MoneyRankings'

export type RankingInfo = {
  ID: number,
  Position: number,
  PlayerID: number,
  Season: number,
  Sum: number,
  Type: RankingType
}
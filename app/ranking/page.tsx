import getRanking from "@/lib/getRanking"
import { RankingInfo } from "@/types/Ranking"

export default async function RankingPage() {
  const rankingDataPromise: Promise<RankingInfo[]> = getRanking()
  const rankingData = await rankingDataPromise

  return (
    <main>
      <h1 className='text-3xl font-bold underline'>Ranking page</h1>
      {rankingData.map(data => {
        return (
          <div>{`${data.Position} - ${data.PlayerID} - ${data.Sum}`}</div>
        )
      })}
    </main>
  )
}

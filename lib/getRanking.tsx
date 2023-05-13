export default async function getRanking() {
  const res = await fetch('https://api.snooker.org/?rt=MoneyRankings&s=2022')

  if (!res.ok) throw new Error('failed to fetch data')

  return res.json()
}
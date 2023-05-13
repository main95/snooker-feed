import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-bold underline'>Home page</h1>
      <Link href={'/ranking'}>Go to ranking</Link>
    </main>
  )
}

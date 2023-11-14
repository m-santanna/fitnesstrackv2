import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const { userId } = auth()
  const href = userId ? '/dashboard' : '/log-user'

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-2 p-6">Welcome to FitnessTrack!</h1>
        <div>
          <Link href={href} className="">
            <button className="rounded-lg text-xl bg-stone-400 hover:bg-stone-700 px-4 py-2">
              Let's go!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

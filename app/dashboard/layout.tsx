import Calendar from '@/components/Calendar'
import ExerciseGroupContainer from '@/components/ExerciseGroupContainer'
import { getUserByClerkId } from '@/utils/auth'
import { UserButton } from '@clerk/nextjs'

const DashboardLayout = async ({ children }: any) => {
  const user = await getUserByClerkId()
  return (
    <div className="h-screen w-screen">
      <header className="top-0 left-0 sticky w-full h-[60px] components-background border-b border-white/40">
        <nav className="h-full flex justify-between items-center p-4">
          <div className="text-xl font-semibold">FitnessTrack</div>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
      </header>
      <div className="w-full h-[calc(100vh-60px)] flex">
        <aside className="h-full w-[600px] p-4">
          <Calendar userId={user.id} />
          <ExerciseGroupContainer user={user} />
        </aside>
        <div className="h-full w-full p-4">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout

import Dropdown from './Dropdown'
import { getExerciseGroups } from '@/utils/api'
import Link from 'next/link'

const ExerciseGroupContainer = async ({ userId }: { userId: string }) => {
  const exerciseGroups = await getExerciseGroups(userId)
  return (
    <div className="w-full h-[calc(100vh-410px)] border border-white/40 components-background overflow-auto rounded-3xl mt-4">
      <div className="flex-col justify-center mt-4">
        <div className="m-2 flex justify-center items-center">
          <Link
            href="/dashboard/create-exercise-group"
            className="border border-white/40 text-center p-4 mt-2 mb-4 rounded-lg bg-stone-900 hover:bg-stone-950 hover:text-white/80"
          >
            Create New Exercise Group
          </Link>
        </div>
        {exerciseGroups.map((exerciseGroup) => (
          <Dropdown
            key={exerciseGroup.id}
            name={exerciseGroup.groupName}
            exercises={exerciseGroup.exercisesName}
            className="flex flex-col items-center"
          />
        ))}
      </div>
    </div>
  )
}

export default ExerciseGroupContainer

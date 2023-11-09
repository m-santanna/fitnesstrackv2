import Dropdown from './Dropdown'
import { getExerciseGroups } from '@/utils/api'
import { User } from '@prisma/client'
import Link from 'next/link'

const ExerciseGroupContainer = async (user: User) => {
  const exerciseGroups = await getExerciseGroups(user)
  return (
    <div className="w-full h-[calc(100vh-410px)] border border-white/40 components-background overflow-auto rounded-3xl mt-4">
      <div className="flex-col justify-center mt-4">
        <div className="m-2 flex justify-center items-center">
          <Link
            href="/dashboard/create-exercise-group"
            className="border border-white/40 text-center p-2 mt-2 mb-4 rounded-lg bg-orange-900 hover:bg-orange-950"
            children="Create Exercise Group"
          />
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

import { prisma } from '@/utils/db'
import Dropdown from './Dropdown'
import CreateEgForm from './CreateEgForm'
import { getExerciseGroups } from '@/utils/api'
import { User } from '@prisma/client'

const ExerciseGroupContainer = async (user: User) => {
  const exerciseGroups = await getExerciseGroups(user)
  return (
    <div className="w-full h-[calc(100vh-410px)] border border-white/40 components-background overflow-auto rounded-3xl mt-4">
      <div className="flex-col justify-center mt-4">
        <CreateEgForm />
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

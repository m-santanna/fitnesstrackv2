import { prisma } from '@/utils/db'
import { User } from '@prisma/client'
import Dropdown from './Dropdown'
import CreateEgForm from './CreateEgForm'

const getExerciseGroups = async (user: User) => {
  const exerciseGroup = await prisma.exerciseGroup.findMany({
    where: {
      userId: user?.id,
    },
  })
  return exerciseGroup
}

const ExerciseGroupContainer = async (user: User) => {
  const exerciseGroups = await getExerciseGroups(user)
  return (
    <div className="w-full h-[calc(100vh-410px)] border border-white/40 components-background overflow-auto rounded-3xl mt-4">
      <div className="flex justify-center mt-4">
        <CreateEgForm />
        {exerciseGroups.map((exerciseGroup) => (
          <Dropdown
            name={exerciseGroup.groupName}
            exercises={exerciseGroup.exercisesName}
          />
        ))}
      </div>
    </div>
  )
}

export default ExerciseGroupContainer

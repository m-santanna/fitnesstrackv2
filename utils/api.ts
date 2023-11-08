import { prisma } from "./db";
import { User } from '@prisma/client'


export const getSetsByDay = async (date: string, userId: string) => {
  const sets = await prisma.exerciseSet.findMany({
    where: {
      timestamp: date,
      userId: userId,
    },
  });

  return sets;
}

export const createExerciseGroup = async (exerciseList: any, clerkId: any) => {
  const user = await prisma.user.findUnique({
    where: {
      clerkId: clerkId as string
    }
  })
  const groupName = exerciseList[0].groupName
  const exercisesName = exerciseList.map((exercise: any) => exercise.exerciseName)
  const exerciseGroup = await prisma.exerciseGroup.create({
    data: {
      groupName: groupName,
      userId: user.id,
      exercisesName: exercisesName,
    },
  });
  return exerciseGroup
}

export const getExerciseGroups = async (user: User) => {
  const exerciseGroup = await prisma.exerciseGroup.findMany({
    where: {
      userId: user?.id,
    },
  })
  return exerciseGroup
}

import { getUserByClerkId } from "./auth";
import { prisma } from "./db";

export const getSetsByDay = async (date, userId) => {
  const sets = await prisma.exerciseSet.findMany({
    where: {
      timestamp: date,
      userId: userId,
    },
  });

  return sets;
}

export const createExerciseGroup = async (props) => {
  const user = await getUserByClerkId()
  const exerciseGroup = await prisma.exerciseGroup.create({
    data: {
      groupName: props.groupName,
      userId: user.id,
      exercisesName: props.exercisesName,
    },
  });
  return exerciseGroup
}



import { format } from "date-fns";
import { getUserByClerkId } from "./auth";
import { prisma } from "./db";

export const getSetsByDay = async (date) => {
  const user = await getUserByClerkId()
  const sets = await prisma.exerciseSet.findMany({
    where: {
      timestamp: date,
      userId: user?.id,
    },
  });

  return sets;
}
'use server'
import { revalidatePath } from "next/cache"
import { getUserByClerkId } from "./auth"
import { prisma } from "./db"

export const createExerciseGroup = async (formData: FormData) => {
    const user = await getUserByClerkId()
   
    const exerciseGroup = await prisma.exerciseGroup.create({
        data: {
            groupName: formData.get("groupName"),
            userId: user.id,
            exercisesName: formData.getAll("exercisesName"),
        }
    })
    revalidatePath("/dashboard")
    
}
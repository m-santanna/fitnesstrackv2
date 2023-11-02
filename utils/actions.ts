"use server"

import { revalidatePath } from "next/cache"
import { getUserByClerkId } from "./auth"
import { prisma } from "./db"

export const createExerciseGroup = async (prevState: any, formData: FormData) => {
    const user = await getUserByClerkId()
    try {

        const exerciseGroup = await prisma.exerciseGroup.create({
            data: {
                groupName: formData.get("groupName"),
                userId: user.id,
                exercisesName: formData.getAll("exercisesName"),
            }
        })
        return revalidatePath("/dashboard")
    } 
    catch (e) {
        return {message: 'Failed to create exercise group'}
    }
}
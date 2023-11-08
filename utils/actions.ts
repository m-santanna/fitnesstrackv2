'use server'
import { revalidatePath } from "next/cache"
import { getUserByClerkId } from "./auth"
import { prisma } from "./db"
import { redirect } from "next/navigation"
import z from "zod"

const schema = z.object({
    groupName: z.string().min(1),
    exercisesName: z.array(z.string().min(1)),
})

export const createExerciseGroup = async (formData: FormData) => {
    const parsed = schema.parse({
            groupName: formData.get("groupName"),
            exercisesName: formData.getAll("exercisesName"),
    })

    const user = await getUserByClerkId()
    const exerciseGroup = await prisma.exerciseGroup.create({
        data: {
            groupName: parsed.groupName,
            userId: user.id,
            exercisesName: parsed.exercisesName,
        }
    })
    revalidatePath("/dashboard")
    redirect("/dashboard")
}
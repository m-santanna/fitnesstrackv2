'use server'
import { revalidatePath } from "next/cache"
import { getUserByClerkId } from "./auth"
import { prisma } from "./db"
import { redirect } from "next/navigation"
import z from "zod"

const schemaEG = z.object({
    groupName: z.string().min(1),
    exercisesName: z.array(z.string().min(1)),
})


const schemaSet = z.object({
    exercisesName: z.array(z.string().min(1)),
    setCount: z.array(z.string().min(1)),
    currentWeightArray: z.array(z.string().min(1)),
    repsArray: z.array(z.string().min(1)),
    timestamp: z.string().min(1),
})


export const createExerciseGroup = async (formData: FormData) => {
    const parsed = schemaEG.parse({
            groupName: formData.get("groupName"),
            exercisesName: formData.getAll("exercisesName"),
    })

    const user = await getUserByClerkId()
    await prisma.exerciseGroup.create({
        data: {
            groupName: parsed.groupName,
            userId: user.id,
            exercisesName: parsed.exercisesName,
        }
    })
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

export const updateExerciseGroup = async (formData: FormData) => {
    const parsed = schemaEG.parse({
            groupName: formData.get("groupName"),
            exercisesName: formData.getAll("exercisesName"),
    })

    const user = await getUserByClerkId()
    await prisma.exerciseGroup.delete({
        where: {
            id: formData.get("exerciseGroupId"),
        }
    })
    await prisma.exerciseGroup.create({
        data: {
            groupName: parsed.groupName,
            userId: user.id,
            exercisesName: parsed.exercisesName,
        }
    })
    revalidatePath("/dashboard")
    redirect("/dashboard")
}


export const deleteExerciseGroup = async (formData: FormData) => {
    const parsed = schemaEG.parse({
            groupName: formData.get("groupName"),
            exercisesName: formData.getAll("exercisesName"),
    })

    const user = await getUserByClerkId()
    await prisma.exerciseGroup.delete({
        where: {
            userId_groupName: {
                userId: user.id,
                groupName: parsed.groupName,
            }
        }
    })
    revalidatePath("/dashboard")
    redirect("/dashboard")
}


export const createWorkout = async (formData: FormData) => {
    const user = await getUserByClerkId()
    const parsed = schemaSet.parse({
            exercisesName: formData.getAll("exerciseName"),
            setCount: formData.getAll("setCount"),
            currentWeightArray: formData.getAll("currentWeight"),
            repsArray: formData.getAll("reps"),
            timestamp: formData.get("timestamp"),
    })
    
    let index = 0;
    for (let i = 0; i < parsed.exercisesName.length; i++) {
        const exerciseName = parsed.exercisesName[i]
        const setCount = Number(parsed.setCount[i])
        const currentWeight = parsed.currentWeightArray.slice(index, index + setCount).map(Number)
        const reps = parsed.repsArray.slice(index, index + setCount).map(Number)
        index += setCount
        await prisma.exerciseSet.create({
            data: {
                exerciseName: exerciseName,
                currentWeight: currentWeight,
                reps: reps,
                userId: user.id,
                timestamp: parsed.timestamp,
            }
        })
    }
    revalidatePath(`/dashboard/${parsed.timestamp}`)
}


export const deleteWorkout = async (formData: FormData) => {
    const user = await getUserByClerkId()
    await prisma.exerciseSet.deleteMany({
        where: {
            timestamp: formData.get("timestamp"),
            userId: user.id,
        }
    })
    revalidatePath(`/dashboard/${formData.get("timestamp")}`)
}


export const editWorkout = async (formData: FormData) => {
    const user = await getUserByClerkId()
    const parsed = schemaSet.parse({
            exercisesName: formData.getAll("exerciseName"),
            setCount: formData.getAll("setCount"),
            currentWeightArray: formData.getAll("currentWeight"),
            repsArray: formData.getAll("reps"),
            timestamp: formData.get("timestamp"),
    })
    
    let index = 0;
    await prisma.exerciseSet.deleteMany({
        where: {
            userId: user.id,
            timestamp: parsed.timestamp,
        }
    })
    for (let i = 0; i < parsed.exercisesName.length; i++) {
        const exerciseName = parsed.exercisesName[i]
        const setCount = Number(parsed.setCount[i])
        const currentWeight = parsed.currentWeightArray.slice(index, index + setCount).map(Number)
        const reps = parsed.repsArray.slice(index, index + setCount).map(Number)
        index += setCount
        await prisma.exerciseSet.create({
            data: {
                exerciseName: exerciseName,
                currentWeight: currentWeight,
                reps: reps,
                userId: user.id,
                timestamp: parsed.timestamp,
            }
        })
    }
    revalidatePath(`/dashboard/${parsed.timestamp}`)
    redirect(`/dashboard/${parsed.timestamp}`)
}
import { createExerciseGroup } from "@/utils/api"
import { NextResponse } from "next/server"
import { z } from "zod"

const createExerciseGroupSchema = z.object({
    groupName: z.string().min(1).max(50),
    exercisesName: z.string().array().min(1).max(100),

})

export const POST = async (req: Request, {params}: any) => {
    const body = await req.json()
    const validatedBody = createExerciseGroupSchema.safeParse(body)
    if (!validatedBody.success) {
        return NextResponse.json(validatedBody.error, {status: 400})
    }
    const eg = await createExerciseGroup(validatedBody)
    return NextResponse.json(eg, {status: 201})
}
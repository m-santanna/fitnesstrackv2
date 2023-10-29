import { auth } from "@clerk/nextjs"
import { prisma } from "./db"

export const getUserByClerkId = async () => {
    const clerkId = auth().userId
    const user = await prisma.user.findUnique({
        where: {
            clerkId: clerkId as string
        }
    })
    return user
}
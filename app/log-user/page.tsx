import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const syncClerkWithDatabase = async () => {
  const clerkUser = await currentUser()
  const match = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser?.id,
    },
  })

  if (!match) {
    const user = await prisma.user.create({
      data: {
        clerkId: clerkUser?.id,
        email: clerkUser?.emailAddresses[0].emailAddress,
      },
    })
  }
  redirect('/dashboard')
}

const new_user = async () => {
  await syncClerkWithDatabase()
}

export default new_user

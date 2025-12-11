"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const schema = z.object({
  message: z.string().min(1).max(500),
})

export async function saveGuestbookEntry(formData: FormData) {
  const session = await auth()
  if (!session?.user?.email) {
    throw new Error("Unauthorized")
  }

  const message = formData.get("message")
  const result = schema.safeParse({ message })

  if (!result.success) {
    throw new Error("Invalid input")
  }

  const userId = session.user.id

  if (!userId) throw new Error("User ID missing")

  await db.guestbookEntry.create({
    data: {
      message: result.data.message,
      userId: userId,
    },
  })

  revalidatePath("/guestbook")
}

export async function deleteGuestbookEntry(entryId: string) {
  const session = await auth()
  if (!session?.user?.email) {
    throw new Error("Unauthorized")
  }

  const entry = await db.guestbookEntry.findUnique({
    where: { id: entryId },
    select: { userId: true },
  })

  if (!entry) {
    throw new Error("Entry not found")
  }

  if (entry.userId !== session.user.id) {
    throw new Error("Unauthorized to delete this entry")
  }

  await db.guestbookEntry.delete({
    where: { id: entryId },
  })

  revalidatePath("/guestbook")
}

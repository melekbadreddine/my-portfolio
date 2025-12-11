"use client"

import { useRef } from "react"
import { useFormStatus } from "react-dom"
import { saveGuestbookEntry } from "@/app/actions/guestbook"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Signing..." : "Sign Guestbook"}
    </Button>
  )
}

export function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await saveGuestbookEntry(formData)
        formRef.current?.reset()
      }}
      className="flex w-full items-center space-x-2"
    >
      <Input
        type="text"
        name="message"
        placeholder="Leave a message..."
        required
        className="flex-1"
      />
      <SubmitButton />
    </form>
  )
}
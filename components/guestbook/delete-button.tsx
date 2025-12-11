"use client"

import { useFormStatus } from "react-dom"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DeleteButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={pending}
      className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/20"
      type="submit"
    >
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">Delete</span>
    </Button>
  )
}

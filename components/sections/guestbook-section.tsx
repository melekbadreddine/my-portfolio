import { GuestbookForm } from "@/components/guestbook/guestbook-form"
import { DeleteButton } from "@/components/guestbook/delete-button"
import { deleteGuestbookEntry } from "@/app/actions/guestbook"
import { signIn } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { Session } from "next-auth"

interface GuestbookSectionProps {
  session: Session | null
  entries: any[]
}

export function GuestbookSection({ session, entries }: GuestbookSectionProps) {
  return (
    <section id="guestbook" className="space-y-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground dark:text-white">Guestbook</h2>
        <p className="max-w-[700px] text-muted-foreground dark:text-slate-400">
          Leave a comment, feedback, or just say hello!
        </p>
      </div>

      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Sign the Guestbook</CardTitle>
        </CardHeader>
        <CardContent>
          {session?.user ? (
            <div className="flex flex-col space-y-4">
               <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={session.user.image || ""} />
                    <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">{session.user.name}</p>
                    <p className="text-muted-foreground">Posting as {session.user.email}</p>
                  </div>
               </div>
               <GuestbookForm />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 py-6">
              <p className="text-muted-foreground">You must be logged in to post.</p>
              <form
                action={async () => {
                  "use server"
                  await signIn("github")
                }}
              >
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  Login with GitHub
                </Button>
              </form>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="flex items-start space-x-4 p-4 border rounded-lg bg-card text-card-foreground shadow-sm">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={entry.user.image || ""} alt={entry.user.name || "User"} />
              <AvatarFallback>{entry.user.name?.[0] || "?"}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium leading-none">{entry.user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {session?.user?.id === entry.userId && (
                  <form action={deleteGuestbookEntry.bind(null, entry.id)}>
                    <DeleteButton />
                  </form>
                )}
              </div>
              <p className="text-sm text-foreground/90 break-words">{entry.message}</p>
            </div>
          </div>
        ))}
        {entries.length === 0 && (
          <p className="text-center text-muted-foreground py-10">No entries yet. Be the first!</p>
        )}
      </div>
    </section>
  )
}

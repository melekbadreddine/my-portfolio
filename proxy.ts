import NextAuth from "next-auth"
import authConfig from "@/auth.config"

const { auth } = NextAuth(authConfig)

export default auth(() => {
  // Logic is now handled in auth.config.ts callbacks or per-page
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
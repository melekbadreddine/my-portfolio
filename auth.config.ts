import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [GitHub],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
    authorized() {
      // We are leaving the guestbook page public, but we can protect sub-routes or actions
      // For now, let the page handle the "Sign In" UI state
      return true 
    },
  },
} satisfies NextAuthConfig

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToyNavbar } from "@/components/toy-navbar";
import { Footer } from "@/components/footer";
import { SessionProvider } from "@/components/session-provider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Melek BADREDDINE | Portfolio",
  description:
    "Computer Engineer specialized in Cloud, DevOps & Systems. Building modern applications with focus on performance and user experience.",
  keywords:
    "DevOps, Cloud, Kubernetes, Docker, Full-Stack Developer, Computer Engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://melekbadreddine.com",
    siteName: "Melek BADREDDINE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen flex flex-col`}
      >
        <SessionProvider>
          <ThemeProvider>
            {/* Top Logo */}
            <header className="fixed top-0 left-0 right-0 p-6 z-40 pointer-events-none">
              <Link href="/" className="pointer-events-auto inline-block font-black text-2xl tracking-tighter text-indigo-600 dark:text-white drop-shadow-lg hover:scale-105 transition-transform">
                MB.
              </Link>
            </header>

            <main className="flex-1">{children}</main>
            <ToyNavbar />
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

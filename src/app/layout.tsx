import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://melekbadreddine.dev"),
  title: "Melek BADREDDINE — Cloud & DevOps Engineer",
  description:
    "Cloud & DevOps Engineer specializing in Kubernetes, cloud infrastructure, GitOps, observability and distributed systems.",
  openGraph: {
    title: "Melek BADREDDINE — Cloud & DevOps Engineer",
    description:
      "Cloud & DevOps Engineer specializing in Kubernetes, cloud infrastructure, GitOps, observability and distributed systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth", "antialiased", "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";

import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Project",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" type="/images/spotify.png" sizes="32x32" href="/images/spotify.png" />
      </head>
      <body className={font.className}>
      <SupabaseProvider>
        <UserProvider>
          <Sidebar>
             {children}
          </Sidebar>
        </UserProvider>
      </SupabaseProvider>
      </body>
    </html>
  );
}

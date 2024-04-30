import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";

import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Project",
  description: "Listen to music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userSongs = await getSongsByUserId();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <head>
         <link rel="icon" type="/images/spotify.png" sizes="32x32" href="/images/spotify.png" />
      </head>
      <body className={font.className}>
        <ToasterProvider />
         <SupabaseProvider>
           <UserProvider>
             <ModalProvider products={products}/>
             <Sidebar songs={userSongs}>
                {children}
             </Sidebar>
             <Player />
           </UserProvider>
         </SupabaseProvider>
      </body>
    </html>
  );
}

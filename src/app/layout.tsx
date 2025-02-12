import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Offer from "@/components/OfferBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./provider";


const inter = Inter({subsets: ["latin"], weight : ["100","200" , "300" ,"400", "500" , "600" ,"700" ,"800", "900"],});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Offer />
        <Header />
        {children}
        <Footer/>
        </Providers>

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";
import {Roboto} from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700" ,"900"],
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative For AI and Web3",
  icons:{
    icon:{url:"/logo.giaic.png" ,type:"image/png"}
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
        
      >
        <Navbar />
        <div className="mt-5 mb-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

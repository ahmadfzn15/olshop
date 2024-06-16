import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Online shop by ahmad fauzan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-hidden`}>
        <Navbar />
        <div className="h-[calc(100vh-7rem)] mt-28 overflow-y-auto overflow-x-hidden">
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

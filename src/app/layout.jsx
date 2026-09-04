import "./globals.css";
import { CartProvider } from '@/context/cartProvider'
import Navbar from '../components/navbar'
import Footer from "@/components/footer";
import { JetBrains_Mono } from "next/font/google"


export const metadata = {
  title: "Icecream Shop",
  description: "Ice cream, chocolates y cake",
};

const mono = JetBrains_Mono({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mono.className} flex flex-col min-h-screen`}>
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}


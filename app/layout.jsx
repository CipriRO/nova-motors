import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Nova Motors",
  description: "Discover the new generation of vehicles!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          montserrat.className + " selection:bg-black selection:text-white"
        }
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

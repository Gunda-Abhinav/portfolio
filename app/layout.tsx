import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ScrollTop from "@/components/scrollTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhinav | Personal Portfolio",
  description: "Software developer with 4+ years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#f4f4f1] text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#181a16] dark:text-gray-50 dark:text-opacity-90`}>
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full bg-transparent">
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div>
        </div>
        <div className="bg-[#dcecc9] fixed top-[-6rem] -z-10 right-[10rem] h-[28rem] w-[28rem] rounded-full blur-[10rem] sm:w-[64rem] dark:bg-[#3d4633] opacity-60"></div>
        <div className="bg-[#f0e6dc] fixed bottom-[-6rem] -z-10 left-[-30rem] h-[28rem] w-[48rem] rounded-full blur-[10rem] sm:w-[64rem] md:left-[-28rem] lg:left-[-20rem] xl:left-[-10rem] 2xl:left-[0rem] dark:bg-[#3c2e2a] opacity-60"></div>
        <ScrollTop />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

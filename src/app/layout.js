import "./globals.css";
import CallButton from "@/components/subcomponents/Buttons/CallButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import LoadingScreen from "@/components/subcomponents/LoadingScreen";

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-screen overflow-x-hidden select-none`}>
        <Navbar />
        <main className="">{children}</main>
        <Reviews />
        <Portfolio />
        <About />
        <Footer />
        <CallButton />
        <div className="fixed bottom-0 left-0 right-0 w-full h-[100px] bg-gradient-to-b from-transparent to-black" />
        <LoadingScreen />
      </body>
    </html>
  );
}

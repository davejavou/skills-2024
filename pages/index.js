import { useEffect } from "react";
import Image from "next/image";
import { VT323 } from "next/font/google";
import gsap from "gsap";

const fontFamily = VT323({ subsets: ["latin"], display: 'swap', weight: '400' }); // https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

const fadeIn = () => {
  gsap.to(".logo", { opacity: 1, duration: 1 });
};

const Logo = () => {
  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Image
      src="/logo.svg"
      alt="Dave Cutter's Logo"
      className="logo dark:invert"
      width={100}
      height={24}
    />
  )
}

export default function Home() {
  return (
    <main
      className={`flex w-screen h-screen items-center justify-center bg-orange-800 ${fontFamily.className}`}
    >
      Font test
      <nav className="h-20 w-screen bg-blue-800">
        <Logo />
      </nav>
    </main>
  );
}
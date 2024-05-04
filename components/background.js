import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Background() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo("#background", { opacity: 0 }, { opacity: 0.5, duration: 1 });
    gsap.to("#background", { scale: 1.3, x: 50, y:50, duration: 60 });
  }, {scope: container});

  return (
    <div ref={container} className="fixed w-screen h-screen bg-black pointer-events-none">
      {/* Background Image */}
      <img
        src="/bg/bg-3.jpeg"
        alt="Background Image"
        id="background"
        className="w-screen h-screen object-cover grayscale-[50%] brightness-50"
      />
      
      {/* Vignette */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-transparent to-black" />
    </div>
  )
  
}
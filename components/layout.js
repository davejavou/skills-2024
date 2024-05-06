import Nav from "./nav";
import Background from "./background";
import { useState, useRef } from "react";
import Contact from "./contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Layout({ children }) {
  // 🤔 This initial state is the opposite of what I think it should be, but works. Something wonky afoot. 
  const [contactToggle, setContactToggle] = useState(true);

  const contactRef = useRef();
  const { contextSafe } = useGSAP({scope: contactRef});

  // 🤔 How might I put this animation in the contact.js file instead of here, yet I must lift the contactToggle state to this file.
  // 🤔 How can I do this with a GSAP revert so I don't have to declare the initial state with Tailwind in the JSX?
  const toggleContactMenu = contextSafe((e) => {
    e.stopPropagation();
    setContactToggle(!contactToggle);
    if (contactToggle) {
      gsap.to("#links", { left: 0, duration: 0.5 });
      gsap.to("#email", { left: "34vw", duration: 0.5 });
      gsap.to("#social", { right: 0, duration: 0.5 });
      gsap.fromTo("#logo", { scale: 1.4, rotation: -45 }, { scale: 1, rotation: 0, duration: 2 });
      gsap.fromTo(".contact-content", {scale: 1.1, y: 50}, { scale: 1, y: 0, duration: 0.5, stagger: 0.05 });
    } else {
      gsap.to("#links, #email", { left: "100vw", duration: 0.3 });
      gsap.to("#social", { right: "-80px", duration: 0.3 });
    }
  });

  return (
    <>
      <Background />
      <main className="relative flex w-screen h-screen">
        {children}
      </main>
      <Nav toggleContactMenu={toggleContactMenu} />
      <Contact contactRef={contactRef} toggleContactMenu={toggleContactMenu} />
    </>
  )
}

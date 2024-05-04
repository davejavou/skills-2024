import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(useGSAP);

const ExploreMenu = () => {
  return (
    <div className="w-40 bg-yellow-800/50">
      <div className="text-xl">Explore</div>
      <ul className="uppercase tracking-widest leading-loose">
        <li><Link href= "/">Skills</Link></li>
        <li><Link href= "/roles">Roles</Link></li>
        <li><Link href= "/places">Places</Link></li>
      </ul>
    </div>
  )
}

const BurgerMenu = () => {
  return (
    <Icon className="hippo btn-icon" icon={faBars} />
    // External Links: Portfolio, LinkedIn, Resume, Cove
    // Contact David
    // Big button to email
  )
}

export default function TopNav() {
  const container = useRef();
  console.log("Test 1");
  useGSAP(() => {
    console.log("Test 2");
    console.log(container)
    gsap.to(".hippo", { opacity: 1, x: 50, y: 50, rotation: 27, duration: 1 });
  }, {scope: container});

  return (
    <nav className="fixed top-0 left-0 flex justify-between w-screen h-20 bg-blue-800/50">
      <ExploreMenu />
      <hr className="h-px flex-grow bg-white" />
      <img
        src="/logo.svg"
        alt="Dave Cutter's Logo"
        className="hippo"
        width={100}
        height={100}
      />
      <hr className="h-px flex-grow bg-white" />
      <BurgerMenu />
    </nav>
  );
}
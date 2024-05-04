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
    <div className="w-40 uppercase tracking-widest leading-loose bg-yellow-800/50">
      <div className="text-xl">Explore</div>
      <ul>
        <li><Link href= "/">Skills</Link></li>
        <li><Link href= "/roles">Roles</Link></li>
        <li><Link href= "/places">Places</Link></li>
      </ul>
    </div>
  )
}

const BurgerMenu = () => {
  return (
    <Icon className="btn-icon" size="2x" icon={faBars} />
    // External Links: Portfolio, LinkedIn, Resume, Cove
    // Contact David
    // Big button to email
  )
}

export default function TopNav() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(".dclogo", { opacity: 0 }, { opacity: 0.5, duration: 1 });
  }, {scope: container});

  return (
    <nav ref={container} className="fixed top-0 left-0 flex justify-between w-screen h-20 bg-blue-700">
      <ExploreMenu />
      <hr className="h-px flex-grow bg-white" />
      <img
        src="/logo.svg"
        alt="Dave Cutter's Logo"
        className="dclogo"
        width={100}
        height={100}
      />
      <hr className="h-px flex-grow bg-white" />
      <BurgerMenu />
    </nav>
  )
}
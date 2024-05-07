import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBars, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { ReactSVG } from "react-svg";
import { usePathname} from 'next/navigation';
import { exploreLinks } from "@/data/content";

gsap.registerPlugin(useGSAP);


// EXPLORE MENU
const ExploreMenu = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  
  // 🤔 This initial state is the opposite of what I think it should be, but works. Something wonky afoot.
  const [exploreToggle, setExploreToggle] = useState(false);

  const container = useRef();
  const { contextSafe } = useGSAP({scope: container});

  const toggleExploreMenu = contextSafe((e) => {
    e.stopPropagation()
    setExploreToggle(!exploreToggle)
    if (exploreToggle) {
      gsap.fromTo("li", { opacity: 0, x: -100 }, { x: 0, opacity: 1, duration: 0.2, stagger: 0.1 });
      gsap.to("ul", { height: "auto", opacity: 1, duration: 0.3 });
    } else {
      gsap.fromTo("li", { opacity: 1, x: 0 }, { x: -100, opacity: 0, duration: 0.2, stagger: 0.1 });
      gsap.to("ul", { height: 0, opacity: 0, duration: 0.2 });
    }
  });

  return (
    <div ref={container} className="flex flex-col gap-2 h-screen pt-8 uppercase tracking-widest leading-loose pointer-events-auto">
      <button className="flex items-center text-xl text-white/50 hover:text-white duration-300" onClick={(e) => toggleExploreMenu(e)}>
        <Icon className="mr-2" size="xs" icon={faGripVertical} />
        Explore
      </button>
      <ul>
        {exploreLinks.map((link) => {
          return (
            <li key={link.id} className={`${isActive(link.path) ? 'text-white' : 'text-white/50'} hover:text-white duration-300`}>
              {isActive(link.path) && <span className="mr-2">&bull;</span>}
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="v-rule mr-10 mt-2 mb-12" />
    </div>
  )
}


// BURGER MENU
const BurgerMenu = ({toggleContactMenu}) => {
  return (
    <div className="flex flex-col w-[80px] h-screen pointer-events-auto">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2796461954. */}
      <button className="self-center w-[80px] h-[80px] mt-1 flex items-center justify-center text-white/50 hover:text-white duration-30" onClick={(e) => toggleContactMenu(e)}>
        <Icon className="btn-icon" size="1x" icon={faBars} />
      </button>
      <div className="v-rule mb-10" />
    </div>
  )
}


// NAV
export default function Nav({toggleContactMenu}) {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo("#logo", { opacity: 0, scale: 1.1, rotation: -45 }, { opacity: 0.8, scale: 1, rotation: 0, duration: 3 });
  }, {scope: container});

  return (
    <nav ref={container} className="fixed top-0 left-0 flex justify-between w-screen h-24 pointer-events-none">
      <div className="flex gap-6 pr-10 pl-6 w-[calc(50%-3rem)]">
        <ExploreMenu />
        <div className="h-rule" />
      </div>
      <ReactSVG
        src="/logo.svg"
        alt="Dave Cutter's Logo"
        id="logo"
        className="fill-white w-20 h-20 mt-2 ml-2"
      />
      <div className="flex pl-10 w-[calc(50%-3rem)]">
        <div className="h-rule" />
        <BurgerMenu toggleContactMenu={toggleContactMenu} />
      </div>
    </nav>
  )
}
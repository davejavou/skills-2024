import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBars, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { ReactSVG } from "react-svg";
import { usePathname} from 'next/navigation';

gsap.registerPlugin(useGSAP);

const ExploreLinks = [
	{ id: 1, name: 'Skills', path: '/' },
	{ id: 2, name: 'Roles', path: '/roles' },
	{ id: 3, name: 'Places', path: '/places' },
];

const ExploreMenu = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  const [exploreToggle, setExploreToggle] = useState(true);

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
        {ExploreLinks.map((link) => {
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

const BurgerMenu = () => {
  return (
    <div className="flex flex-col gap-4 h-screen pt-8 uppercase tracking-widest leading-loose pointer-events-auto text-white/50 hover:text-white duration-300">
      <Icon className="btn-icon self-center mr-4" size="1x" icon={faBars} />
      <div className="v-rule mr-10 mr-4 mb-10" />
    </div>
  )
}

export default function TopNav() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo("#logo", { opacity: 0, rotation: -30 }, { opacity: 0.8, rotation: 0, duration: 1 });
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
      <div className="flex gap-6 pr-6 pl-10 w-[calc(50%-3rem)]">
        <div className="h-rule" />
        <BurgerMenu />
      </div>
    </nav>
  )
}
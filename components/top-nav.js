import { useRef } from "react";
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

  return (
    <div className="mt-8 uppercase tracking-widest leading-loose pointer-events-auto">
      <div className="flex items-center text-xl">
        <Icon className="mr-2" size="xs" icon={faGripVertical} />
        Explore
      </div>
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
        <hr className="h-px flex-grow self-center border-white/50" />
      </div>
      <ReactSVG
        src="/logo.svg"
        alt="Dave Cutter's Logo"
        id="logo"
        className="fill-white w-24 h-24"
      />
      <div className="flex gap-6 pr-6 pl-10 w-[calc(50%-3rem)]">
        <hr className="h-px flex-grow self-center border-white/50" />
        <Icon className="btn-icon self-center" size="1x" icon={faBars} />
      </div>
    </nav>
  )
}
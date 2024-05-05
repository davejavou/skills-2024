import { faX, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { ReactSVG } from "react-svg";

export default function Contact({ contactRef, toggleContactMenu }) {
  const links = [
    { id: 1, label: 'Portfolio', href: 'https://www.davecutter.com/' },
    { id: 2, label: 'Resume', href: 'https://davecutter.com/portfolio/public/David-Cutter-Resume.pdf' },
    { id: 3, label: 'LinkedIn', href: 'https://www.linkedin.com/in/davejavou/' },
    { id: 4, label: 'GitHub', href: 'https://github.com/davejavou' },
    { id: 5, label: 'Cutters Cove', href: 'https://cutterscove.com/' },
  ];

  return (
    <div ref={contactRef} className="fixed w-screen h-screen top-0 right-0 pointer-events-none">
      <div id="contact-window" className="fixed w-screen h-screen top-0 right-0 flex opacity-0 w-[0%] pointer-events-auto">
        <div className="w-1/3 h-full bg-blue-300">
          <ReactSVG
            src="/logo.svg"
            alt="Dave Cutter's Logo"
            id="logo"
            className="fill-white w-40 h-40 mt-8 ml-8"
          />
          <ul className="mt-8 mx-16 text-2xl uppercase tracking-widest leading-loose">
            {links.map((link) => {
              return (
                <li>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center w-full hover:underline">
                    {link.label}
                    <Icon className="btn-icon" size="xs" icon={faArrowUpRightFromSquare} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-grow h-full bg-blue-400">Actions</div>
        <div className="flex flex-col w-[80px] h-full bg-black">
          <button className="mt-4 text-white/50 hover:text-white duration-300" onClick={(e) => toggleContactMenu(e)}>
            <Icon className="btn-icon" size="3x" icon={faX} />
          </button>
        </div>
      </div>
    </div>
  )

}
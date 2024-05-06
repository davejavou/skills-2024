import { faX, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
    <div ref={contactRef}>
      <div id="links" className="fixed top-0 left-0 w-[34vw] h-full flex flex-col flex-none px-16 pt-12 bg-blue-300">
        <ReactSVG
          src="/logo.svg"
          alt="Dave Cutter's Logo"
          id="logo"
          className="fill-white w-32 h-32"
        />
        <ul className="mt-12 text-2xl uppercase tracking-widest leading-relaxed">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center w-full hover:underline">
                  {link.label}
                  <Icon className="btn-icon" size="2xs" icon={faArrowUpRightFromSquare} />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-auto font-sans text-sm">
          I acknowledge creating this work on the land of the Bunurong in Seaford, Victoria, Australia. I acknowledge the history of global colonial oppression, that sovereignty has never been ceded, and I pay my respect to these people and their Elders, past, present, and future.
        </p>
        <p className="text-sm pb-4">
          <div className="h-rule w-full my-4"></div>
          Copyright &copy; Dave Cutter {new Date().getFullYear()}
        </p>
      </div>
      <div id="email" className="fixed top-0 left-[34vw] w-[calc(66vw-80px)] flex-none h-full px-16 pt-16 bg-blue-400">
        <h1 className="text-8xl font-header uppercase">Sign with Dave</h1>
        <p className="font-sans mt-4 py-12 max-w-xl">I’m a product designer and front-end developer with 25 years experience in software product development for startup & enterprise clients. I specialise in human-centred design, intuitive UX & UI, and elegant front-end code. I also study the History & Philosophy of Science and International Politics at the University of Melbourne.</p>
        <a target="_blank" rel="noopener noreferrer" href="mailto:dave@davecutter.com" className="block rounded-full bg-black float-left py-6 px-24 uppercase text-2xl tracking-widest hover:bg-white hover:text-black duration-300">Email Dave</a>
      </div>
      <div id="social" className="fixed top-0 right-0 flex flex-col flex-none items-center justify-center w-[80px] h-full bg-black">
        <a className="mb-auto border-b border-white/50 w-full h-[80px] flex justify-center items-center text-white/50 hover:text-white duration-300" onClick={(e) => toggleContactMenu(e)}>
          <Icon className="btn-icon" size="2x" icon={faX} />
        </a>
        <div className="flex flex-col flex-col-reverse justify-center items-center gap-8 mb-auto">
          <span className="-rotate-90 py-4 uppercase whitespace-nowrap text-xl">Follow Me</span>
          <Icon className="btn-icon" size="2x" icon={faLinkedin} />
          <Icon className="btn-icon" size="2x" icon={faInstagram} />
          <Icon className="btn-icon" size="2x" icon={faFacebook} />
          <Icon className="btn-icon" size="2x" icon={faYoutube} />
        </div>
      </div>
    </div>
  )

}
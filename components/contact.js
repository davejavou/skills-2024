import { faX, faArrowUpRightFromSquare, faBookOpen, faFilePdf, faFish } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { ReactSVG } from "react-svg";

export default function Contact({ contactRef, toggleContactMenu }) {
  const links = [
    { id: 1, icon: faBookOpen, label: 'Portfolio', href: 'https://www.davecutter.com/' },
    { id: 2, icon: faFilePdf, label: 'Resume', href: 'https://davecutter.com/portfolio/public/David-Cutter-Resume.pdf' },
    { id: 3, icon: faLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/davejavou/' },
    { id: 4, icon: faGithub, label: 'GitHub', href: 'https://github.com/davejavou' },
    { id: 5, icon: faFish, label: 'Cutters Cove', href: 'https://cutterscove.com/' },
  ];


  return (
    <div ref={contactRef}>
      <div id="links" className="left-[100vw] contact-box left-0 w-[34vw] px-16 pt-12 bg-sky-900/80">
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
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact-content flex justify-between items-center w-full hover:underline">
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
        <p className="text-sm py-4 mt-4 border-t border-white/50">
          Code by Dave Cutter {new Date().getFullYear()}
          &nbsp;-
          Design by jtb Studios
        </p>
      </div>
      <div id="email" className="left-[100vw] contact-box left-[34vw] w-[calc(66vw-80px)] px-16 pt-16 text-sky-900 bg-white">
        <h1 className="contact-content text-8xl font-header uppercase">Sign with Dave</h1>
        <p className="contact-content font-sans mt-8 max-w-xl">
          I’m a product designer and front-end developer with 25 years experience in software product development for startup & enterprise clients. I specialise in human-centred design, intuitive UX & UI, and elegant front-end code. I also study the History & Philosophy of Science and International Politics at the University of Melbourne.
          <a target="_blank" rel="noopener noreferrer" href="mailto:dave@davecutter.com" className="block rounded-full float-left mt-8 py-6 px-24 uppercase font-serif text-2xl tracking-wides text-white bg-sky-900 hover:bg-sky-300 hover:text-sky-900 duration-300">Email Dave</a>
        </p>
      </div>
      <div id="social" className="right-[-80px] contact-box right-0 w-[80px] items-center justify-center bg-black">
        <button className="mb-auto border-b border-white/50 w-full h-[80px] flex justify-center items-center text-white/50 hover:text-white duration-300" onClick={(e) => toggleContactMenu(e)}>
          <Icon className="btn-icon" size="2x" icon={faX} />
        </button>
        <div className="flex flex-col flex-col-reverse justify-center items-center mb-auto">
          <span className="-rotate-90 uppercase whitespace-nowrap text-xl">Follow Me</span>
          <ul className="flex flex-col just0fy-center items-center mb-8">
            {links.map((link) => {
              return (
                <li key={link.id} className="my-3">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                    <Icon className="btn-icon" size="2x" icon={link.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )

}
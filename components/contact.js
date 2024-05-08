import { faX, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { ReactSVG } from "react-svg";
import { aboutDave, acknowledgment, byline, contactLinks } from "@/data/content";

export default function Contact({ contactRef, toggleContactMenu }) {
  return (
    <div ref={contactRef}>
      <div id="links" className="left-[100vw] contact-box w-[34vw] px-16 pt-12 bg-sky-900/80">
        <ReactSVG
          src="/img/logo.svg"
          alt="Dave Cutter's Logo"
          id="logo"
          className="fill-white w-32 h-32"
        />
        <ul className="mt-12 text-2xl uppercase tracking-widest leading-relaxed">
          {contactLinks.map((link) => {
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
          {acknowledgment}
        </p>
        <p className="text-sm py-4 mt-4 border-t border-white/50">
          {byline}
        </p>
      </div>
      <div id="email" className="left-[100vw] contact-box w-[calc(66vw-80px)] px-16 pt-16 text-sky-900 bg-white">
        <h1 className="contact-content text-8xl font-header uppercase">Sign with Dave</h1>
        <p className="contact-content font-sans mt-8 max-w-xl">
          {aboutDave}
          <a target="_blank" rel="noopener noreferrer" href="mailto:dave@davecutter.com" className="block rounded-full float-left mt-8 py-6 px-24 uppercase font-serif text-2xl tracking-wides text-white bg-sky-900 hover:bg-sky-300 hover:text-sky-900 duration-300">Email Dave</a>
        </p>
      </div>
      <div id="social" className="right-[-80px] contact-box w-[80px] items-center justify-center bg-black">
        <button className="mb-auto border-b border-white/50 w-full h-[80px] flex justify-center items-center text-white/50 hover:text-white duration-300" onClick={(e) => toggleContactMenu(e)}>
          <Icon className="btn-icon" size="xl" icon={faX} />
        </button>
        <div className="flex flex-col flex-col-reverse justify-center items-center mb-auto">
          <span className="-rotate-90 uppercase whitespace-nowrap text-xl">Follow Me</span>
          <ul className="flex flex-col just0fy-center items-center mb-8">
            {contactLinks.map((link) => {
              return (
                <li key={link.id} className="my-3">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                    <Icon className="btn-icon" size="xl" icon={link.icon} />
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
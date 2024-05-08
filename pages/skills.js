import { skills } from "@/data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Section = ({ sectionData }) => {
  return (
    <div className="section">
      <div className="section-details">
        <h2 className="dusty-font mb-12 text-7xl font-header uppercase">{sectionData.title}</h2>
        <p className="mt-4 font-sans text-l">{sectionData.paragraph}</p>
      </div>
      <div className="section-media flex justify-center items-center">
        <img className="object-contain w-2/3" src={sectionData.image} />
      </div>
    </div>
  );
};

export default function Skills() {
  const container = useRef();

  useGSAP(() => {
    // Fade In Each Card onScroll
    gsap.utils.toArray(".section").forEach(layer => {
      gsap.from(layer, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: layer,
          start: "top bottom-=10%",
          end: "top bottom-=50%",
          scrub: true,
        }
      });      
    });

    // Parallax Each Title onScroll
    gsap.utils.toArray("h2").forEach(layer => {
      gsap.from(layer, {
        y: 150,
        scrollTrigger: {
          trigger: layer,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });
    });
  }, {scope: container});

  return (
    <div ref={container}>
      <h1 className="w-full text-center pt-32 text-6xl">Skills</h1>
      <div className="flex flex-col gap-4 py-20 mt-10 w-full">
        {skills.map((skill) => (
          <Section key={`section-${skill.id}`} sectionData={skill} />
        ))}
      </div>
    </div>
  );
};
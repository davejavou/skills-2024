import Carousel from "@/components/carousel";
import { roles } from "@/data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Card = ({ cardIndex, cardData }) => {
  return (
    <div className="card">
      <div className="card-details">
        <h2 className="dusty-font mb-4 text-7xl font-header uppercase">{cardData.client}</h2>
        <div>
          <p>{cardData.title}, {cardData.location}</p>
          <p>{cardData.timeline}</p>
          <p className="mt-4 font-sans text-l">{cardData.description} <a className="underline" href={cardData.link} target="_blank" rel="noopener noreferrer nofollow">Learn More</a></p>
        </div>
      </div>
      <Carousel cardIndex={cardIndex} slides={cardData.slides} />
    </div>
  );
};

export default function Roles() {
  const container = useRef();

  useGSAP(() => {
    // Fade In Each Card onScroll
    gsap.utils.toArray(".card").forEach(layer => {
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
        y: 200,
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
      <h1 className="w-full text-center pt-32 text-6xl">Roles</h1>
      <div className="flex flex-col gap-4 py-20 mt-10 w-full">
        {roles.map((role) => (
          <Card key={`card-${role.id}`} cardIndex={role.id} cardData={role} />
        ))}
      </div>
    </div>
  );
};

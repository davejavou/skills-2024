import Carousel from "@/components/carousel";
import { roles } from "@/data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

// WIP: Header Cards

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }


// function getAllImages(roles) {
//   let allImages = [];
//   roles.forEach((role) => {
//     role.slides.forEach((slide) => {
//       slide.type === "image" && allImages.push(slide.ssrc);
//     });
//   });
//   return shuffle(allImages);
// }

// const ImageCard = ({ src }) => {
//   return (
//     <div className="flex-none w-[200px] h-[300px] bg-red-500 flex justify-center items-center border-white border-2 rounded-lg bg-cover bg-[url('/img/bokeh.jpg')] shadow-xl">
//       <img className="object-contain" src={src} />
//     </div>
//   )
// }

const Section = ({ sectionIndex, sectionData }) => {
  return (
    <div className="section">
      <div className="section-details">
        <h2 className="dusty-font mb-12 text-7xl font-header uppercase">{sectionData.client}</h2>
        <div>
          <p>{sectionData.title}, {sectionData.location}</p>
          <p>{sectionData.timeline}</p>
          <p className="mt-4 font-sans text-l">{sectionData.description} <a className="underline" href={sectionData.link} target="_blank" rel="noopener noreferrer nofollow">Learn More</a></p>
        </div>
      </div>
      <Carousel sectionIndex={sectionIndex} slides={sectionData.slides} />
    </div>
  );
};


export default function Roles() {
  const rolesRef = useRef();
  // const roleImages = getAllImages(roles);


  useGSAP(() => {
    // Animate Header Cards
    // gsap.fromTo(".first-row", {
    //   x: 0
    // }, {
    //   x: "-50%",
    //   duration: 5,
    //   repeat: -1,
    //   ease: "none"
    // });
    // gsap.fromTo(".second-row", {
    //   x: "50%"
    // }, {
    //   x: "-50%",
    //   duration: 60
    // });

    // Fade In Each Section onScroll
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
  }, {scope: rolesRef});

  return (
    <div ref={rolesRef}>
      {/* Header Cards */}
      {/* <div className="relative flex flex-col flex-nowrap gap-8 h-screen w-full">
        <div className="first-row grid grid-rows-1 grid-cols-max grid-flow-col gap-8 w-auto">
          {roleImages.map((src) => (
            <ImageCard src={src} key={`image-card-${src}`} />
          ))}
        </div>
        <div className="second-row flex flex-nowrap flex-row-reverse gap-8">
          {roleImages.map((src) => (
            <ImageCard src={src} key={`image-card-${src}`} />
          ))}
        </div>
        <h1 className="dusty-font absolute top-1/2 -translate-y-1/2 left-0 w-full text-center text-7xl font-header uppercase">Roles</h1>
      </div> */}
      
      {/* Sections */}
      <h1 className="dusty-font w-full text-center text-7xl font-header uppercase">Roles</h1>
      <div className="flex flex-col gap-4 py-20 mt-10 w-full">
        {roles.map((role) => (
          <Section key={`section-${role.id}`} sectionIndex={role.id} sectionData={role} />
        ))}
      </div>
    </div>
  );
};

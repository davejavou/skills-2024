import Carousel from "@/components/carousel";
import { roles } from "@/data/content";

const RoleCard = ({ role }) => {
  return (
    <div className="p-4 mb-4 rounded-xl">
      <h2 className="text-4xl">{role.client}</h2>
      <div>
        <p>{role.title}, {role.location}</p>
        <p>{role.timeline}</p>
        <p>{role.description} <a href={role.link} target="_blank" rel="noopener noreferrer">Learn More</a></p>
      </div>
      <div>
        {role.slides.map((slide, index) => (
          <Carousel sliderRef={index} slides={role.slides} />
        ))}
      </div>
    </div>
  );
};

export default function Roles() {
  return (
    <div>
      <h1 className="w-full text-center pt-32 text-5xl">Roles</h1>
      <div className="p-20">
        {roles.map((role, index) => (
          <RoleCard key={index} role={role} />
        ))}
      </div>
    </div>
  );
};

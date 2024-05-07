import Carousel from "@/components/carousel";
import { roles } from "@/data/content";

const RoleCard = ({ roleIndex, role }) => {
  return (
    <div className="p-4 mb-4 rounded-xl">
      <h2 className="text-4xl">{role.client}</h2>
      <div>
        <p>{role.title}, {role.location}</p>
        <p>{role.timeline}</p>
        <p>{role.description} <a href={role.link} target="_blank" rel="noopener noreferrer">Learn More</a></p>
      </div>
      <div>
        <Carousel roleIndex={roleIndex} slides={role.slides} />
      </div>
    </div>
  );
};

export default function Roles() {
  return (
    <>
      <h1 className="w-full text-center pt-32 text-5xl">Roles</h1>
      <div className="flex flex-col gap-4 py-20 mt-10 w-full">
        {roles.map((role, index) => (
          <RoleCard key={index} roleIndex={index} role={role} />
        ))}
      </div>
    </>
  );
};

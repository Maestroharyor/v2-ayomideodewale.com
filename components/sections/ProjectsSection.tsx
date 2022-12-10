import React from "react";
import Link from "next/link";

// Components
import SectionHeading from "../partials/SectionHeading";
import ProjectCard from "../cards/ProjectCard";
import { Project } from "../../data/dataTypes";

type Props = {
  projects: Project[];
  cta: JSX.Element;
};

const ProjectsSection = ({ projects, cta }: Props) => {
  return (
    <div className="flex flex-col text-left justify-between pb-20 px-5 relative max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:gap-10 md:grid-cols-3 items-start pt-10">
        {projects.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-16 flex items-center justify-center">
        {cta}
      </div>
    </div>
  );
};

export default ProjectsSection;

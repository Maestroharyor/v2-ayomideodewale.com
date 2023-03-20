import Link from "next/link";
import React from "react";

// Components
import SectionHeading from "../partials/SectionHeading";
import ProjectCard from "../cards/ProjectCard";

// Functions and Datas
import { projects } from "../../data/projects";

function HomeProjects() {
  return (
    <div className="flex flex-col text-left justify-between pt-20 pb-20 px-5 relative max-w-[1200px] mx-auto">
      <div>
        <SectionHeading title="Here are some of my favourite projects" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 items-start pt-10">
        {projects
          .filter((project) => project.featured)
          .slice(0, 3)
          .map((item) => {
            return <ProjectCard key={item.id} project={item} />;
          })}
      </div>
      <div className="relative w-full mt-10 flex items-center justify-center">
        <Link legacyBehavior href={"/projects"} passHref>
          <a className="border-2 rounded-full px-5 md:px-32 py-2 border-primary dark:border-white text-lg font-medium text-primary   hover:text-dark-theme hover:border-dark-theme transition duration-400 ease-in-out dark:text-gray-200 dark:hover:text-warning dark:hover:border-warning">
            See More
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HomeProjects;

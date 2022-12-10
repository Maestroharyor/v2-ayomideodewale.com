import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Functions and Data
import { Project } from "../../data/dataTypes";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
      {project.inDevelopment ? (
        <div
          className={`w-full relative rounded-xl border-gray-400 dark:border-gray-600 border-2 p-2 transition hover:scale-95 hover:rotate-6 hover:-translate-y-2 hover:border-primary-hov dark:hover:border-warning `}
        >
          <img
            className="w-full hover:opacity-75 transition rounded-md"
            src={project.img}
          />
        </div>
      ) : (
        <a
          href={project.link || project.github}
          target="_blank"
          className={`w-full relative rounded-xl border-gray-400 dark:border-gray-600 border-2 p-2 transition hover:scale-95 hover:rotate-6 hover:-translate-y-2 hover:border-primary-hov dark:hover:border-warning `}
          rel="noreferrer"
        >
          <img
            className="w-full hover:opacity-75 transition rounded-md"
            src={project.img}
          />
        </a>
      )}

      <div className="w-full mt-5">
        <div className="flex projects-center justify-between mb-1">
          {project.inDevelopment ? (
            <h3 className="text-primary dark:text-warning text-xl font-bold">
              {project.title}
            </h3>
          ) : (
            <a
              href={project.link || project.github}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-primary dark:text-warning text-xl font-bold">
                {project.title}
              </h3>
            </a>
          )}

          <div className="inline-flex items-center gap-3">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-4 list-none gap-3">
          {project.tags.map((tag) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${tag.toLowerCase()}`} passHref>
                  <a className=" rounded-lg text-sm bg-primary text-white dark:bg-primary-hov hover:text-white py-1 px-2 cursor-pointer hover:opacity-75 block">
                    {tag}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;

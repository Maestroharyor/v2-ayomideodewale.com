import type { NextPage } from "next";

// Components
import DefaultLayout from "../../components/layouts/DefaultLayout";
import PageHeading from "../../components/partials/PageHeading";
import ProjectsSection from "../../components/sections/ProjectsSection";

// Functions and Datas
import { projects } from "../../data/projects";

type Props = {};

const Projects: NextPage = ({}: Props) => {
  return (
    <DefaultLayout title="My Dev Projects">
      <main>
        <PageHeading
          title="My Dev Projects"
          description="Here are some of the cool and amazing projects, apps and software I've built with various tech stacks."
        />
        <ProjectsSection
          projects={projects}
          cta={
            <p className="text-2xl text-center">
              Check out more on my{" "}
              <a
                href="https://github.com/maestroharyor"
                target={"_blank"}
                rel="noreferrer"
                className="text-dark-theme underline dark:text-warning font-bold italic"
              >
                GitHub Repo
              </a>{" "}
              .
            </p>
          }
        />
      </main>
    </DefaultLayout>
  );
};

export default Projects;

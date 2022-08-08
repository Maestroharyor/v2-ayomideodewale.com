import type { NextPage } from "next";

// Components
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeProjects from "../components/home/HomeProjects";

type Props = {};

const Projects: NextPage = ({}: Props) => {
  return (
    <DefaultLayout title="My Dev Projects">
      <>
        <HomeProjects />
      </>
    </DefaultLayout>
  );
};

export default Projects;

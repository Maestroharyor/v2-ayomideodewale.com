import type { NextPage } from "next";

// Components
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
import HomeProjects from "../components/home/HomeProjects";
import HomeSkills from "../components/home/HomeSkills";
import HomeConnect from "../components/home/HomeConnect";

type Props = {};

const HomepageIndex: NextPage = ({}: Props) => {
  return (
    <DefaultLayout title="I am Odewale Ayomide">
      <>
        <HomeHero />
        <HomeAbout />
        <HomeProjects />
        <HomeSkills />
        <HomeConnect />
      </>
    </DefaultLayout>
  );
};

export default HomepageIndex;

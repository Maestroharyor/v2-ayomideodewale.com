import type { NextPage } from "next";

// Components
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeHero from "../components/home/HomeHero";
// import HomeAbout from "../components/home/HomeAbout";
// import HomeProjects from "../components/home/HomeProjects";
// import HomeSkills from "../components/home/HomeSkills";
// import HomeConnect from "../components/home/HomeConnect";
import dynamic from "next/dynamic";

// const HomeHero = dynamic(() => import("../components/home/HomeHero"));
const HomeAbout = dynamic(() => import("../components/home/HomeAbout"));
const HomeProjects = dynamic(() => import("../components/home/HomeProjects"));
const HomeSkills = dynamic(() => import("../components/home/HomeSkills"));
const HomeConnect = dynamic(() => import("../components/home/HomeConnect"));

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

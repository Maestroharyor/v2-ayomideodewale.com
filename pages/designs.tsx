import type { NextPage } from "next";

// Components
import ComingSoonLayout from "../components/layouts/ComingSoonLayout";
import HomeProjects from "../components/home/HomeProjects";

type Props = {};

const Designs: NextPage = ({}: Props) => {
  return <ComingSoonLayout title="My UI Design Projects" />;
};

export default Designs;

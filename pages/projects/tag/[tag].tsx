import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

// Components
import DefaultLayout from "../../../components/layouts/DefaultLayout";
import HomeProjects from "../../../components/home/HomeProjects";

// Functions and Datas
import { projects } from "../../../data/projects";
import { Project } from "../../../data/dataTypes";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pathTags: string[] = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      pathTags.push(tag.toLowerCase());
    })
  );

  const uniquePathTags = [...new Set(pathTags)];

  const paths = uniquePathTags.map((path) => ({
    params: { tag: `${path}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as IParams;
  const filteredProjects = projects.filter((project) =>
    project.tags.map((projectTag) => {
      if (projectTag.toLowerCase() === tag) {
        return true;
      }
    })
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        projects: filteredProjects,
        tag,
      })
    ),
  };
};

type Props = {
  projects: Project[];
  tag: string | string[];
};

const ProjectTag = ({ projects, tag }: Props) => {
  return (
    <DefaultLayout title="Tag Projects">
      <>
        <HomeProjects />
      </>
    </DefaultLayout>
  );
};

export default ProjectTag;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import DefaultLayout from "../components/layouts/DefaultLayout";

type Props = {};

function NotFound({}: Props) {
  return (
    <DefaultLayout
      title="404 - Page Not Found"
      desc="This page does not exist."
    >
      <div className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center gap-10">
        <Image
          src="/static/svgs/404.svg"
          className=""
          alt="Page Not Found"
          width={250}
          height={200}
        />
        <div className="text-center pb-6 max-w-[700px] px-5">
          <h1 className="text-4xl font-bold mb-2 dark:text-warning">
            Page Not Found
          </h1>
          <p className="mb-5 text-xl">This page does not exist.</p>
          <Link legacyBehavior href="/" passHref>
            <a className="border-2 rounded-full px-8 py-2 border-primary dark:border-white text-lg font-medium text-primary dark:text-white  hover:text-dark-theme hover:border-dark-theme transition duration-400 ease-in-out dark:text-gray-200 dark:hover:text-warning dark:hover:border-warning inline-flex gap-5 items-center">
              <FaHome />
              <span>Go Home</span>
            </a>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default NotFound;

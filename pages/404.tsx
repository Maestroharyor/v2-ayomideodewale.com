import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import DefaultLayout from "../components/Layouts/DefaultLayout";

type Props = {};

function NotFound({}: Props) {
  return (
    <DefaultLayout
      title="404 - Page Not Found"
      desc="This page does not exist."
    >
      <div className="h-[calc(100vh-52px)] bg-gray-100 dark:bg-dark flex flex-col items-center justify-center gap-10">
        <Image
          src="/svg/404.svg"
          className=""
          alt="Page Not Found"
          width={250}
          height={200}
        />
        <div className="text-center pb-6 max-w-[700px] px-5">
          <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
          <p className="mb-5 text-xl">This page does not exist.</p>
          <Link href="/" passHref>
            <a className="md:col-span-3 px-5 py-2 bg-brand text-white hover:text-white rounded hover:bg-primary-hov transition duration-300 ease-in-out text-lg inline-flex gap-3 items-center justify-center">
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

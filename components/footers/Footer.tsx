import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaExchangeAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { footerMenu, socialMenu } from "../../data/menu";

type Props = {};

const Footer = (props: Props) => {
  const router = useRouter();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-900 dark:text-white pt-20 pb-20 ">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-10">
          <h4 className="uppercase text-lg font-bold text-center dark:text-warning mb-10">
            MENU LINKS:
          </h4>
          <div className="flex flex-col md:flex-row flex-wrap gap-3 justify-between">
            {footerMenu.map((menu) => (
              <div key={menu.title} className="">
                {menu.external ? (
                  <a
                    href={menu.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xl hover:text-primary-hov dark:hover:text-warning"
                  >
                    <span>{menu.title}</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                ) : (
                  <Link href={menu.link} passHref>
                    <a className="text-xl hover:text-primary-hov dark:hover:text-warning">
                      {menu.title}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
          <p className="flex flex-col items-center justify-center">
            <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
              Made with{" "}
              <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
                <span>
                  <Image
                    src="/static/svgs/react.svg"
                    width={40}
                    height={40}
                    className=""
                    title="React"
                    alt="React"
                  />
                  <span className="sr-only">React</span>
                </span>
                <span>
                  <Image
                    src="/static/svgs/nextjs.svg"
                    width={40}
                    height={40}
                    className="dark:invert"
                    title="NextJS"
                    alt="NextJS"
                  />
                  <span className="sr-only">NextJS</span>
                </span>
                <span>
                  <Image
                    src="/static/svgs/tailwindcss.svg"
                    width={40}
                    height={40}
                    className=""
                    title="TailwindCSS"
                    alt="TailwindCSS"
                  />
                  <span className="sr-only">TailwindCSS</span>
                </span>
              </div>
            </div>
            <div className="mt-1">
              <span className="text-gray-500">
                &copy; {new Date().getFullYear()}{" "}
              </span>
              <span>Ayomide Odewale (Maestro)</span>
            </div>
          </p>
        </div>
      </div>

      {/* <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/braydentw/braydentw.io"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />

          <span className="ml-2">View Source Code </span>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;

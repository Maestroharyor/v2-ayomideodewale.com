import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { connect, useDispatch } from "react-redux";

// Components
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
import { loadFull } from "tsparticles";
import Metadata from "../headers/partials/Metadata";
import { FaCode } from "react-icons/fa";

// Functions and Data
import { ModalData, ThemeData } from "../../data/dataTypes";

type Props = {
  title?: string;
  desc?: string;
  theme?: ThemeData;
  modal?: ModalData;
};

const DefaultLayout = (props: Props) => {
  const particlesInit = async (main: any) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <>
      <Metadata title={props.title} metadescription={props.desc} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          background: {
            color: props.theme?.lightMode ? "#f3f4f6" : "#000A1F",
          },
          detectRetina: false,
          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },

          particles: {
            color: {
              value: props.theme?.lightMode ? "#42489E" : "#f3f4f6",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 0.25,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1,
            },
          },
          fullScreen: {
            enable: true,
            zIndex: -1, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
          },
        }}
      />

      <div className="min-h-[100vh] dark:text-light z-[10] overflow-x-hidden flex items-center justify-center relative pb-[80px]">
        <div className="flex flex-col gap-y-10 h-full w-full relative items-center justify-between px-5">
          <Link legacyBehavior href="/" passHref>
            <a className="font-black text-xl flex items-center gap-1.5">
              <Image
                className="transform hover:rotate-[360deg] hover:scale-75 transition-transform duration-500"
                src={
                  props.theme?.lightMode
                    ? "/static/logos/light_logo.svg"
                    : "/static/logos/dark_logo.svg"
                }
                alt="Ayomide Odewale Logo"
                width={40}
                height={40}
              />
              <div>
                {"Maestro".split("").map((letter, index) => {
                  return (
                    <span
                      key={index}
                      className="text-2xl dark:text-white-dark hover:text-primary dark:hover:text-warning hover:-translate-y-2 transition-all duration-500 hover:duration-100 inline-block"
                    >
                      {letter}
                    </span>
                  );
                })}
              </div>
            </a>
          </Link>
          <div className="flex-1 flex flex-col items-center gap-y-10 text-center">
            <h1 className="text-lg dark:text-white">
              THIS PAGE IS{" "}
              <span className="block text-5xl text-primary font-bold mt-1 dark:text-warning">
                Still Cooking...
              </span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-light">
              Now that you&apos;re here, maybe I&apos;ll turn up the heat 🤔...
            </p>
            <Link
              href={"/projects"}
              className="border-2 rounded-full px-8 py-2 border-primary dark:border-white text-lg font-medium text-primary   hover:text-dark-theme hover:border-dark-theme transition duration-400 ease-in-out dark:text-gray-200 dark:hover:text-warning dark:hover:border-warning _floating bottom-[-80px]"
            >
              <FaCode className="hidden md:inline-block" />{" "}
              <span>Checkout my dev projects</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(DefaultLayout);

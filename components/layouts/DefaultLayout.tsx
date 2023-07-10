import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { connect, useDispatch } from "react-redux";

// Components

import Footer from "../footers/Footer";
import DesktopHeader from "../headers/DesktopHeader";
import Mobileheader from "../headers/Mobileheader";
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
import { loadFull } from "tsparticles";
import Metadata from "../headers/partials/Metadata";
import { Spin } from "antd";

// Functions and Data
import { ModalData, ThemeData } from "../../data/dataTypes";
// import Mainheader from "../headers/Mainheader";

type Props = {
  title?: string;
  desc?: string;
  children: JSX.Element;
  theme?: ThemeData;
  modal?: ModalData;
};

const DefaultLayout = (props: Props) => {
  const router = useRouter();
  const [appLoading, setAppLoading] = useState(true);
  const [particlesBackground, setParticlesBackground] = useState("#000A1F");

  useEffect(() => {
    props.theme?.lightMode
      ? setParticlesBackground("#f3f4f6")
      : setParticlesBackground("#000A1F");
  }, [props.theme?.lightMode]);

  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = async (main: any) => {
    setAppLoading(false);
  };

  return (
    <>
      <Metadata title={props.title} metadescription={props.desc} />
      {appLoading && (
        <div className="fixed bg-gray-100 dark:bg-dark-theme top-0 left-0 h-full w-full flex justify-center items-center z-40 text-4xl">
          <Spin size="large" />
        </div>
      )}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: particlesBackground,
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

      <DesktopHeader />
      <Mobileheader />

      <main
        className={`dark:text-white-dark z-[10] overflow-x-hidden  min-h-[100vh]
        }`}
      >
        {props.children}
      </main>
      {<Footer />}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(DefaultLayout);

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import MainHeader from "../headers/Mainheader";
const Mobileheader = dynamic(() => import("../headers/Mobileheader"));
const Footer = dynamic(() => import("../footers/Footer"));
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
import { loadFull } from "tsparticles";

import Metadata from "../headers/partials/Metadata";
import { connect, useDispatch } from "react-redux";

import { ModalData, ThemeData } from "../../data/dataTypes";

type Props = {
  title?: string;
  desc?: string;
  children: JSX.Element;
  theme?: ThemeData;
  modal?: ModalData;
};

const DefaultLayout = (props: Props) => {
  const particlesInit = async (main: any) => {
    console.log(main);

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
              value: props.theme?.lightMode ? "#42489E" : "#fff",
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
            zIndex: 0, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
          },
        }}
      />
      <MainHeader />
      <Mobileheader />

      <div className="min-h-[100vh] bg-gray-100 dark:bg-dark-theme dark:text-light">
        {props.children}
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(DefaultLayout);

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { connect, useDispatch } from "react-redux";

// Components
import MainHeader from "../headers/Mainheader";
const Mobileheader = dynamic(() => import("../headers/Mobileheader"));
const Footer = dynamic(() => import("../footers/Footer"));
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
import { loadFull } from "tsparticles";
import Metadata from "../headers/partials/Metadata";

// Functions and Data
import { ModalData, ThemeData } from "../../data/dataTypes";

type Props = {
  title?: string;
  desc?: string;
  children: JSX.Element;
  theme?: ThemeData;
  modal?: ModalData;
};

const DefaultLayout = (props: Props) => {
  const router = useRouter();
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
      <MainHeader />
      <Mobileheader />

      <div
        className={`dark:text-light z-[10] overflow-x-hidden ${
          router.pathname === "/404" ? "" : "min-h-[100vh] "
        }`}
      >
        {props.children}
      </div>
      {router.pathname !== "/404" && <Footer />}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(DefaultLayout);

import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

// Components
import {
  FaCode,
  FaJs,
  FaPalette,
  FaGit,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        className="relative home_hero w-full pt-20 pb-52 px-5 m-auto flex justify-center text-center flex-col items-center z-1 max-w-[1200px]"
        // style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hello, I&apos;m Ayomide (Maestro).</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold  dark:text-white">
          I love{" "}
          <span className="text-primary dark:text-warning">designing</span> and
          <span className="text-primary dark:text-warning"> building</span> web
          and software solutions.
        </h1>
        <FaPalette
          className="_floating opacity-50 text-primary bottom-[117px] left-[307px] rotate-[70deg]"
          size={100}
          style={{ animationDelay: "0.8s" }}
        />
        <FaNodeJs
          className="_floating opacity-50 text-primary bottom-[117px] right-[307px] rotate-[70deg]"
          size={100}
          style={{ animationDelay: "0.2s" }}
        />
        <FaJs
          className="_floating opacity-80 text-primary bottom-[47px] right-[557px] rotate-[70deg]"
          size={100}
          style={{ animationDelay: "0.6s" }}
        />
        <FaGit
          className="_floating opacity-50 text-primary bottom-[92px] left-[10px] rotate-[70deg]"
          size={100}
        />

        <FaReact
          className="_floating opacity-30 md:opacity-50 text-primary  top-[192px] md:top-[92px] left-[-50px] sm:left-[10px] rotate-[70deg]"
          size={100}
          style={{ animationDelay: "0.6s" }}
        />
        <FaVuejs
          className="_floating opacity-30 md:opacity-50 text-primary top-[192px] md:top-[92px] right-[-50px] sm:right-[10px] rotate-[70deg]"
          size={100}
          style={{ animationDelay: "0.4s" }}
        />
        <FaPython
          className="_floating opacity-50 text-primary bottom-[92px] right-[10px] rotate-[70deg]"
          size={100}
        />
        <FaCode
          className="_floating opacity-90 text-primary top-[10px] left-[calc(50%-30px)] rotate-45"
          size={50}
          style={{ animationDelay: "0.4s" }}
        />
        <ScrollLink
          activeClass="active"
          to="profile"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="border-2 rounded-full px-8 py-2 border-primary dark:border-white text-lg font-medium text-primary dark:text-white  hover:text-dark-theme hover:border-dark-theme transition duration-400 ease-in-out dark:text-gray-200 dark:hover:text-warning dark:hover:border-warning">
            Tell me more
          </div>
        </ScrollLink>
      </motion.div>
    </>
  );
}

export default Hero;

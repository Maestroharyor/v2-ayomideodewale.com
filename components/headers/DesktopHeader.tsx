import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { connect, useDispatch } from "react-redux";
import { motion } from "framer-motion";

// Components
import { Switch } from "antd";
import { MdWbSunny } from "react-icons/md";
import { FaExternalLinkAlt, FaMoon } from "react-icons/fa";

// Functions and Datas
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { openSearchModal } from "../../store/modal/action";
import { menuData } from "../../data/menu";
import { ModalData, ThemeData } from "../../data/dataTypes";

type Props = {
  theme?: ThemeData;
};

const DesktopHeader = ({ theme }: Props) => {
  const [isLight, setIsLight] = useState<boolean | undefined>(theme?.lightMode);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLight(theme?.lightMode);
  }, [theme?.lightMode]);

  useEffect(() => {
    const header = document.querySelector(
      "#desktop_header"
    ) as HTMLHeadingElement;

    let lastScrollTop = 0;
    const handleScrollBar = () => {
      if (header !== null) {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          // header.classList.add("top-[-80px]");
          header.style.top = "-80px";
          header.classList.remove(
            "bg-gray-100/90",
            "dark:bg-[rgba(0,10,31,0.96)]"
          );
        } else {
          header.style.top = "0px";
          header.classList.add(
            "bg-gray-100/90",
            "dark:bg-[rgba(0,10,31,0.96)]"
          );
        }

        if (window.pageYOffset <= 60) {
          header.classList.remove(
            "bg-gray-100/90",
            "dark:bg-[rgba(0,10,31,0.96)]"
          );
        }
        lastScrollTop = scrollTop;
      }
    };

    window.addEventListener("scroll", handleScrollBar);

    return () => {
      window.removeEventListener("scroll", handleScrollBar);
    };
  }, []);

  return (
    <header
      id="desktop_header"
      className="hidden lg:block  pt-5 pb-3 px-5 sticky top-0 z-[50] backdrop-blur"
    >
      <nav className=" flex justify-between items-center">
        <motion.li
          className="list-none font-bold text-lg cursor-pointer "
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            stiffness: 500,
            type: "spring",
          }}
        >
          <Link legacyBehavior href="/" passHref>
            <a className="font-black text-xl flex items-center gap-1.5">
              <Image
                className="transform hover:rotate-[360deg] hover:scale-75 transition-transform duration-500"
                src={
                  theme?.lightMode
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
        </motion.li>
        <motion.ul
          className="flex items-center gap-x-10 "
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            stiffness: 500,
            type: "spring",
          }}
        >
          {menuData.map((item, index) => {
            return (
              <li key={index}>
                <Link legacyBehavior href={item.link} passHref>
                  <a
                    className={`text-lg list-none transition duration-300 ease-in-out ${
                      router.pathname === item.link
                        ? "text-dark-theme dark:text-warning"
                        : "text-primary dark:text-white dark:hover:text-warning hover:text-dark-theme"
                    }`}
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
          <li>
            <button className="text-lg text-primary dark:text-white dark:hover:text-warning hover:text-dark-theme inline-flex items-center gap-1 transition duration-300 ease-in-out">
              <span>My Resume</span>
              <FaExternalLinkAlt size={10} />
            </button>
          </li>
          <li>
            <button
              className="border-2 rounded-full px-8 py-2 border-primary dark:border-white text-lg font-medium text-primary dark:text-white  hover:text-dark-theme hover:border-dark-theme transition duration-400 ease-in-out dark:text-gray-200 dark:hover:text-warning dark:hover:border-warning"
              onClick={() => {
                dispatch(openSearchModal());
              }}
            >
              Get In Touch
            </button>
          </li>
        </motion.ul>

        <motion.div
          className="flex gap-6 items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.1,
            stiffness: 500,
            type: "spring",
          }}
        >
          <Switch
            aria-label="Switch Theme Button"
            checkedChildren={
              <MdWbSunny className="text-white dark:text-dark" />
            }
            unCheckedChildren={<FaMoon className="text-white dark:text-dark" />}
            defaultChecked={theme?.lightMode}
            onChange={(checked) => {
              // console.log(checked)
              if (theme?.lightMode) {
                dispatch(setDarkModeTheme());
              } else {
                dispatch(setLightModeTheme());
              }
            }}
            checked={theme?.lightMode}
            className="bg-primary dark:bg-warning text-lg"
          />
        </motion.div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(DesktopHeader);

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { motion } from "framer-motion";

// Components
import { Switch } from "antd";
import { MdClose, MdMenu, MdWbSunny } from "react-icons/md";
import { FaMoon, FaExternalLinkAlt } from "react-icons/fa";

// Functions and Datas
import { menuData } from "../../data/menu";
import { ModalData, ThemeData } from "../../data/dataTypes";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";

type Props = {
  theme?: ThemeData;
};

const MobileHeader = ({ theme }: Props) => {
  const [isLight, setIsLight] = useState<boolean | undefined>(theme?.lightMode);

  const router = useRouter();
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoDir, setLogoDir] = useState("/static/logos/dark_logo.svg");
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    theme?.lightMode
      ? setLogoDir("/static/logos/light_logo.svg")
      : setLogoDir("/static/logos/dark_logo.svg");
  }, [theme?.lightMode]);

  return (
    <header className="block lg:hidden relative bg-gray-100/90 sticky top-0 z-[20] dark:bg-[rgba(0,10,31,0.96)]">
      <nav className="bg-gray-100 dark:bg-dark-theme py-2 px-5 flex justify-between items-center">
        <Link href="/" passHref>
          <motion.a
            className="font-black text-xl flex items-center gap-1.5 "
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              stiffness: 500,
              type: "spring",
            }}
          >
            <Image
              className="transform hover:rotate-[360deg] hover:scale-75 transition-transform duration-500"
              src={logoDir}
              alt="Ayomide Odewale Logo"
              width={30}
              height={30}
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
          </motion.a>
        </Link>

        <div className="flex gap-3 items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              stiffness: 500,
              type: "spring",
            }}
            className=""
          >
            <Switch
              aria-label="Switch Theme Button"
              checkedChildren={
                <MdWbSunny className="text-white dark:text-dark" />
              }
              unCheckedChildren={
                <FaMoon className="text-white dark:text-dark" />
              }
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

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.1,
              stiffness: 500,
              type: "spring",
            }}
            className="z-10"
          >
            <button
              aria-label="Mobile Menu Navigation Button"
              className="text-3xl text-dark dark:text-white hover:text-primary dark:hover:text-warning transition ease-in-out duration-300 relative"
              onClick={() => toggleMenu()}
            >
              <MdClose
                className={`transition duration-300 ease-in-out absolute ${
                  isMenuOpen
                    ? "scale-1 opacity-100 "
                    : "scale-0 opacity-0 translate-x-0 translate-y-0"
                }`}
              />
              <MdMenu
                className={`transition duration-300 ease-in-out ${
                  !isMenuOpen
                    ? "scale-1 opacity-100"
                    : "scale-0 opacity-0 translate-x-0 translate-y-0"
                }`}
              />
            </button>
          </motion.div>
        </div>
      </nav>
      {isMenuMounted && (
        <div
          className={`h-[100vh] w-full bg-gray-100 dark:bg-dark-theme w-full top-[51px] left-0 z-[100] flex flex-col absolute transition duration-400 ease-in-out px-4 
            ${isMenuRendered ? "menuRendered opacity-100" : "opacity-0"}`}
        >
          <ul className="flex flex-col divide-y divide-gray-300 dark:divide-gray-900 gap-y-1">
            {menuData.map((item, index) => {
              return (
                <li
                  key={item.link}
                  className={` transition duration-400 ease-in-out  ${
                    isMenuRendered
                      ? "translate-x-[0px] opacity-100 "
                      : "translate-x-[-16px] opacity-0 w-[0px]"
                  }`}
                  style={{ transitionDelay: `${150 + index * 25}ms` }}
                >
                  <Link href={item.link}>
                    <a className="flex w-auto py-3 text-lg font-medium text-primary hover:text-dark-theme dark:text-gray-200 dark:hover:text-warning">
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="py-3">
              <button
                className={` text-lg text-primary dark:text-white hover:text-primary dark:text-gray-200 dark:hover:text-warning inline-flex items-center gap-1 transition duration-400 ease-in-out  ${
                  isMenuRendered
                    ? "translate-x-[0px] opacity-100 "
                    : "translate-x-[-16px] opacity-0 "
                }`}
                style={{
                  transitionDelay: `${150 + menuData.length + 4 * 25}ms`,
                }}
              >
                <span>My Resume</span>
                <FaExternalLinkAlt size={10} />
              </button>
            </li>
            <li className="py-3">
              <button
                className={`border rounded-full px-8 py-2 border-primary dark:border-white text-lg  text-primary dark:text-white  hover:text-primary transition duration-400 ease-in-out w-full dark:text-gray-200 dark:hover:text-warning dark:hover:border-warning  ${
                  isMenuRendered
                    ? "translate-x-[0px] opacity-100 "
                    : "translate-x-[-16px] opacity-0"
                }`}
                style={{
                  transitionDelay: `${150 + menuData.length + 5 * 25}ms`,
                }}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(MobileHeader);

import { useEffect, useState } from "react";
import Image from "next/image";

// Components
import { Switch } from "antd";
import {
  FaCode,
  FaCodeBranch,
  FaLaptop,
  FaLaptopCode,
  FaStar,
} from "react-icons/fa";

// Functions and Datas
import { skillsSummary, skillsFull } from "../../data/skills";
import { Skill } from "../../data/dataTypes";

type Props = {};

const HomeSkills = (props: Props) => {
  const [fullSkills, setFullskills] = useState(false);
  const [skills, setSkills] = useState<Skill[]>(skillsSummary);

  const onChange = (checked: boolean) => {
    setFullskills(checked);
  };

  useEffect(() => {
    fullSkills ? setSkills(skillsFull) : setSkills(skillsSummary);
  }, [fullSkills]);

  return (
    <>
      <hr className="border gray-200 dark:border-gray-900" />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between relative max-w-[1200px] mx-auto pt-24 pb-24 px-5 items-center relative">
        <div>
          <div>
            <h2 className=" text-5xl font-bold mb-2 text-primary dark:text-warning">
              {fullSkills
                ? "The Top Tech Stacks I use"
                : "My Favourite Dev. Stacks"}
            </h2>
            <p className="text-lg">
              {fullSkills
                ? "(Here are the tools I use to implement my software solutions)"
                : "(Some of the tools I use to work my magic)"}
            </p>
          </div>

          <FaCode
            className="_floating opacity-90 text-primary top-[100px] left-[50px] rotate-[70deg]"
            size={80}
            style={{ animationDelay: "0.4s" }}
          />
          <FaCodeBranch
            className="_floating opacity-90 text-primary b0ttom-[100px] left-[calc(50%-70px)] rotate-[70deg]"
            size={100}
            style={{ animationDelay: "0.4s" }}
          />
          <FaLaptop
            className="_floating opacity-90 text-primary bottom-[70px] left-[60px] rotate-[70deg]"
            size={50}
            style={{ animationDelay: "0.6s" }}
          />
          <FaLaptopCode
            className="_floating opacity-90 text-primary top-[50px] left-[400px] rotate-[70deg]"
            size={50}
            style={{ animationDelay: "0.2s" }}
          />
          <FaStar
            className="_floating text-primary top-[50%] -left-[50px] rotate-[70deg]"
            size={50}
            style={{ animationDelay: "0.7s" }}
          />
        </div>
        <div>
          <div className="flex inline-flex items-center justify-center gap-3 mb-8 w-full">
            <p>Favourite Tech Stacks</p>
            <Switch
              //   checkedChildren="开启"
              //   unCheckedChildren="关闭"
              onChange={onChange}
              className="bg-primary dark:bg-primary-hov"
              //   defaultChecked
              defaultChecked={fullSkills}
            />
            <p>All Tech Stacks</p>
          </div>
          <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-5 items-center place-content-center">
            {skills.map((item, index) => {
              return (
                <div
                  title={item.skill}
                  key={index}
                  className="w-10 mx-auto flex items-center flex-col justify-center"
                >
                  <Image
                    src={item.src}
                    alt={item.skill}
                    width={50}
                    height={50}
                    className={`${
                      item.skill.toLowerCase() === "nextjs" ? "dark:invert" : ""
                    }`}
                  />
                  <p className="text-sm text-gray-600 font-bold mt-3 opacity-80">
                    {item.skill}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="border gray-200 dark:border-gray-900" />
    </>
  );
};

export default HomeSkills;

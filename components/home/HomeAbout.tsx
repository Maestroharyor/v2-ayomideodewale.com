import { useState } from "react";
import { motion } from "framer-motion";
import type { RadioChangeEvent } from "antd";
import { Radio, Image } from "antd";
import SectionTitle from "../partials/SectionTitle";

// Functions and Data
import { profileDetails } from "../../data/profile";

type Props = {};

const HomeAbout = (props: Props) => {
  const [value, setValue] = useState(5);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <motion.div
      initial={{ x: -10000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, type: "tween" }}
      className=" w-full pt-20 pb-40 px-5 w-full bg-dark/10 dark:bg-dark-background/40 "
      id="profile"
      // style={{ maxWidth: "1200px" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle title="So, who am I?" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-20 w-full items-center justify-between max-w-[1200px] mx-auto">
        <div className="md:col-span-8 ">
          <div className="profile__selector relative w-full md:max-w-[300px] mx-auto pb-10 mb-10">
            <Radio.Group
              onChange={onChange}
              defaultValue={3}
              value={value}
              className="w-full flex justify-between"
              size="large"
            >
              <Radio value={1}></Radio>
              <Radio value={2}></Radio>
              <Radio value={3}></Radio>
              <Radio value={4}></Radio>
              <Radio value={5}></Radio>
            </Radio.Group>

            <p className="absolute left-0 bottom-0 tracking-widest">Shortest</p>
            <p className="absolute right-0 bottom-0 tracking-widest">Longest</p>
          </div>
          <div
            className="text-xl font-medium first-letter:text-6xl first-letter:font-bold leading-[45px] profile__details"
            dangerouslySetInnerHTML={{ __html: profileDetails[value - 1] }}
          />
        </div>
        <div className="md:col-span-4 flex items-center justify-center bg-dark-theme rounded-t-lg border-2 border-gray-100 shadow-sm shadow-dark-theme ">
          <Image
            alt="Ayomide Odewale"
            src="/static/personal/ayomide-odewale-maestro.png"
            width={100 * value}
            height={"auto"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeAbout;

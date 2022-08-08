import { MdArrowUpward } from "react-icons/md";
import { BackTop } from "antd";

const Backtotop = () => {
  return (
    <BackTop className="animate-bounce">
      <div className="flex items-center justify-center bg-primary text-white hover:bg-primary-hov dark:bg-warning dark:text-dark dark:hover:bg-warning-hov p-3 rounded-full shadow text-lg">
        <MdArrowUpward />
      </div>
    </BackTop>
  );
};

export default Backtotop;

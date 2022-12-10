import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

// Functions and Data
import { openSearchModal, closeSearchModal } from "../../store/modal/action";
import { ModalData, ThemeData } from "../../data/dataTypes";

type Props = {
  modal?: ModalData;
};

const ContactModal = ({ modal }: Props) => {
  const dispatch = useDispatch();

  const backdropVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    visible: {
      y: "0px",
      opacity: 1,
      transition: { duration: 0.1, delay: 0.5, type: "spring", stiffness: 100 },
    },
    hidden: { y: "-100vh", opacity: 0 },
  };

  useEffect(() => {
    if (modal?.opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, [modal]);
  return (
    <AnimatePresence exitBeforeEnter>
      {modal?.opened && (
        <motion.div
          className={`fixed z-[50] top-0 left-0 bg-dark/50 dark:bg-dark-theme/50 w-full h-full flex items-center justify-center transition duration-300 ease-in-out backdrop-blur`}
          onClick={(e) => {
            dispatch(closeSearchModal());
          }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-gray-100 dark:bg-dark-theme dark:text-white dark:border-2 dark:border-white rounded-lg p-5 "
            onClick={(e) => {
              e.stopPropagation();
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
          >
            Modal Content
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(ContactModal);

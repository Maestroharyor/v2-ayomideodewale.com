import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";

// Components
// const SearchModal = dynamic(
//   () => import("../general/SearchModal"),
//   { ssr: false }
// );
const BacktoTop = dynamic(() => import("../partials/BackToTop"), {
  ssr: false,
});

// Functions and Data
import { closeSearchModal } from "../../store/modal/action";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { themeChange, themeOSLoad } from "../../functions/theme";
import { ModalData, ThemeData } from "../../data/dataTypes";

type Props = {
  children: JSX.Element;
  theme?: ThemeData;
  modal?: ModalData;
};

const MasterLayout = (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const testFunction = () => {
    console.log("Test function");
  };

  useEffect(() => {
    console.log("Watch props");
    testFunction();
    themeChange(props);
  });

  useEffect(() => {
    themeOSLoad(props, dispatch, setDarkModeTheme, setLightModeTheme);
  }, []);

  return (
    <>
      {props.children}
      <BacktoTop />
      {/* <SearchModal />
       */}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(MasterLayout);

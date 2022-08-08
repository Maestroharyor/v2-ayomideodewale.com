import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { closeSearchModal } from "../../store/modal/action";
import { themeChange, themeOSLoad } from "../../functions/theme";
import { ModalData, ThemeData } from "../../data/dataTypes";
// const SearchModal = dynamic(
//   () => import("../general/SearchModal"),
//   { ssr: false }
// );
// const BacktoTop = dynamic(
//   () => import("../general/BackToTop"),
//   { ssr: false }
// );

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
      {/* <SearchModal />
      <BacktoTop /> */}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(MasterLayout);

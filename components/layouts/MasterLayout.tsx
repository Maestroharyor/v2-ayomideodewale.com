import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";

// Components
const ContactModal = dynamic(() => import("../partials/ContactModal"), {
  ssr: false,
});
const BacktoTop = dynamic(() => import("../partials/BackToTop"), {
  ssr: false,
});

// Functions and Data
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

  console.log(props.modal);

  useEffect(() => {
    themeChange(props);
  });

  useEffect(() => {
    themeOSLoad(props, dispatch, setDarkModeTheme, setLightModeTheme);
  }, []);

  return (
    <>
      {props.children}
      <BacktoTop />
      <ContactModal />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<ThemeData, ModalData>(mapStateToProps)(MasterLayout);

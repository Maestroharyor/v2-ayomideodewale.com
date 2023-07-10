import React from "react";
import "@fontsource/koho/200.css";
import "@fontsource/koho/300.css";
import "@fontsource/koho/400.css";
import "@fontsource/koho/500.css";
import "@fontsource/koho/600.css";
import "@fontsource/koho/700.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import type { AppProps } from "next/app";
import MasterLayout from "../components/layouts/MasterLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </Provider>
  );
}

export default MyApp;

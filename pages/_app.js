import React, { useEffect } from "react";
import Router from "next/router";
import "../styles/globals.css";

const gtmPageView = (url) => {
  const pageEvent = {
    event: "pageview",
    page: url,
  };
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => gtmPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

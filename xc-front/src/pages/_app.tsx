import * as React from "react";
import { AppProps } from "next/app";
import "./global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MainApp>
          <Component {...pageProps} />;
      </MainApp>
  )
}

const MainApp = ({children}:any) => {
    return (
        <>
            {children}
        </>
    )
}
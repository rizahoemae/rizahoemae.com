import "app/globals.css";
import type { ReactElement, ReactNode } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Karla, Plus_Jakarta_Sans } from "next/font/google";
import clsx from "clsx";
const karla = Karla({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <div
      className={clsx(
        karla.variable,
        jakarta.variable,
        " min-h-screen w-full relative"
      )}
    >
      <Component {...pageProps} />
    </div>
  );
}

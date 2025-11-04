import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ScrollTop from "@/components/ScrollBtn";
import dynamic from "next/dynamic";

const BackgroundPattern = dynamic(() => import("@/components/BgPattern"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundPattern />
      <Component {...pageProps} />
      <ScrollTop />
    </>
  )
}

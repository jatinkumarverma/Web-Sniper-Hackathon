import Head from "next/head";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "./sections/landing/Homepage";
import Second from "./sections/landing/Second";
import Pic from "./sections/landing/Pic";
import Testi from "./sections/landing/Testi";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wondrify</title>
        <meta name="description" content="Your gateway to enchanting destinations, mystical attractions and charming accommodations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Home */}
        <Homepage />
        {/* section 2 */}
        <Second />
        {/* section 3 */}
        <Pic />
        {/* section 4 */}
        <Testi />
        {/* <Reviewpage /> */}
        <Footer />
      </div>
    </>
  );
}

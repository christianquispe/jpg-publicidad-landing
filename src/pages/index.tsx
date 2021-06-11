import Head from "next/head";

import { AboutUs, CallToAction, Contact, Location, Services } from '../containers'

import Layout from "../Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>JPG Publicidad</title>
      </Head>
      <Layout width="full">
        <CallToAction />
        <AboutUs />
        <Services />
        <Location />
        <Contact />
        <footer className="bg-gray-800 text-white flex items-center justify-center w-full h-12 border-t">
          <p>Derechos de autor reservados a @Christian</p>
        </footer>
      </Layout>
    </>
  );
};

export default Home;

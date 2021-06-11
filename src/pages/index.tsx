import Head from "next/head";

import { AboutUs, CallToAction, Contact, Location, Services } from '../containers'

import Layout from "../Layout";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>JPG Publicidad</title>
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>
      <Layout width="full">
        <CallToAction />
        <AboutUs />
        <Services />
        <Location />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;

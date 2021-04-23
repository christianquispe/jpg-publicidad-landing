import Head from "next/head";
import { CallToAction, AboutUs } from "../containers/Home";
import { Contact } from "../containers/Home/Contact";
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
        <Contact />
        <footer className="flex items-center justify-center w-full h-12 border-t">
          <p>Derechos de autor reservados a @Christian</p>
        </footer>
      </Layout>
    </>
  );
};

export default Home;

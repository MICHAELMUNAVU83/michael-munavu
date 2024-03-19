import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import Achievments from "@/components/Achievments";
import Testimonials from "@/components/Testimonials.";
export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Munavu</title>
        <meta name="description" content="Michael Munavu Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/navLogo.png" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Achievments />
      <Testimonials />
      <Blogs />
      <Contact />
    </>
  );
}

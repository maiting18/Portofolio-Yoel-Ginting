import AnimatedText from "@/components/AnimatedText";
import TypewriterText from "@/components/TypewriterText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/profileyoel.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Yoel Ginting</title>
        <meta
          name="description"
          content="A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 md:w-full lg:hidden md:flex flex right-4 max-h-fit mr-20">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-[500px] w-[340px] ml-auto object-cover mt-0 md:-mt-28"
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-left self-center lg:w-full lg:text-center">
              <TypewriterText
                text="Hii I’m Yoel Ginting"
                speed={100}
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  A Web Developer.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                Technology enthusiasts who continue to innovate in finding
                modern and effective solutions. Committed to always following
                the latest developments in the technology industry while honing
                skills through exploration and active learning. Known for
                creativity in thinking and thoroughness in solving problems.
                Ready to make a real contribution to every technology project
                worked on.
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <a
                  href="/CV_Yoel_Ginting.pdf"
                  download
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  My CV
                </a>
                <a
                  href="mailto:yoeljwk7@gmail.com"
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}

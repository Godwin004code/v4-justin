'use client'

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Nav/Header";
import Project from "@/components/Projects/Project";
import Services from "@/components/Service/Service";
import { Element } from "react-scroll";


export default function Home() {
  return (
    
      <>
      
      <section className="w-full build">
      <Header />
      <Element name='home'>
      <Hero />
      </Element>
      
      </section>
      <section className="w-full services">
        <Services />
      </section>
      <section className="w-full services">
        <Project />
      </section>
      <Contact />
      <section className="footer py-6">
        <Footer />
        <p className="text-base text-white font-normal text-center mt-5">built with ❤️ by me</p>
      </section>
      </>
  )
}

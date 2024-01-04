
import Image1 from "./Screenshot 2023-09-21 at 19.50.15.png";
import Image2 from "./Screenshot 2023-09-21 at 19.50.28.png";
import Image3 from "./Screenshot 2023-09-21 at 19.50.50.png";
import Image4 from "./Screenshot 2023-09-21 at 19.51.04.png";
import Image5 from "./Screenshot 2023-09-21 at 19.53.27.png";
import Image6 from "./Screenshot 2023-09-29 at 22.15.44.png";
import Image7 from "./Screenshot 2024-01-03 at 17.43.34.png";
import Image8 from "./Screenshot 2024-01-03 at 17.46.14.png";
import Image9 from "./Screenshot 2024-01-03 at 17.48.07.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Element } from "react-scroll";

function Project() {
  return (
    <Element name='projects'>
    <section className="py-24 pb-36">
        <h2 className="text-white text-center text-7xl font-bold my-auto overflow-y-hidden">My Previous Projects</h2>
        <section className="flex md:flex-col w-[90%] mx-auto mt-12">
            <div className="relative rounded-xl">
                <div >
                <img src={Image1.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://blackscholar.info"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            <div className="relative rounded-xl mx-8 md:mx-0 md:mt-8">
                <div >
                <img src={Image3.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://tempho.ca/"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div> 
            <div className="relative rounded-xl md:mt-8">
                <div >
                <img src={Image5.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://desenv.takedown.io/"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            </section>
            <section className="flex md:flex-col w-[90%] mx-auto mt-10">
            <div className="relative rounded-xl">
                <div >
                <img src={Image2.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://findmycleaner.net/"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            <div className="relative rounded-xl mx-8 md:mx-0 md:mt-8">
                <div >
                <img src={Image4.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://factomobile.app/"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            <div className="relative rounded-xl md:mt-8">
                <div >
                <img src={Image6.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://letsgo.dreamtrips.com/"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            </section>
            <section className="flex md:flex-col w-[90%] mx-auto mt-10">
            <div className="relative rounded-xl">
                <div >
                <img src={Image7.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://paramounthamptons.com"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            <div className="relative rounded-xl mx-8 md:mx-0 md:mt-8">
                <div >
                <img src={Image8.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://sayit-95820.bubbleapps.io/version-test"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            <div className="relative rounded-xl md:mt-8">
                <div >
                <img src={Image9.src} alt="Project one" />
                </div>
                <div className="flex justify-between bg-[#19171780] absolute  w-[100%] bottom-0 h-[60px] text-white px-7 ">
                        <p className="text-2xl my-auto"></p>
                        <Link target="_blank" href={"https://homie-75043.bubbleapps.io/version-test"} className="my-auto"><FaArrowRight className="right-arrow text-3xl my-auto" /></Link>
                </div>
            </div>
            </section>
        
    </section>
    </Element>
  )
}

export default Project
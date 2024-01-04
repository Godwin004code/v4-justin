'use client'
import { BsArrowUpRight } from "react-icons/bs"
import Typical from 'react-typical'
import HeroImage from "./Group 162532.png"
import Zigzag from "./Vector 13.png"
import Play from "./Group 162527.png"
import Add from "./add.png"
import Circle from "./Group 162526.png"

export default function Hero() {
    const meetingSchedule = () => {
        window.open("https://calendly.com/sintitechsolution/meetingwithsinti")
    }
    return (
        
            <section className="hero flex w-[80%] md:flex-col mx-auto mt-32 justify-between ">
                <section className="w-[45%] md:w-[90%]">
                    <h2 className="text-5xl text-white font-bold w-[100%] tracking-wider md:overflow-y-hidden">Build Your Awesome Platform</h2>
                    <p className="text-lg text-white my-14 ">Godwin is a developer that does <Typical
                        steps={['Web development', 4000]}
                        loop={Infinity}
                        wrapper="span"
                    /> for companies, clients all over the world .</p>
                    <div className="text-white w-[204px] h-[58px] bg-[#5454D4] flex items-center justify-center" onClick={meetingSchedule}>Contact me <BsArrowUpRight className="ml-4" /> </div>
                </section>
                <section className="flex pics md:pt-24 md:pb-20 ">
                    <div className="flex flex-col justify-between">
                        <img src={Zigzag.src} alt="Hero image" />
                        <img className="mb-0" src={Play.src} alt="Hero image" />
                    </div>
                    <div className="mt-[-80px]">
                        <img src={HeroImage.src} alt="Hero image" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src={Circle.src} alt="Hero image" />
                        <img src={Add.src} alt="Hero image" />
                    </div>
                </section>
            </section>
       
    )
}
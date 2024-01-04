'use client'

import Play from "../Hero/Group 162527.png"
import Add from "./add (1).png"
import { FiFigma } from "react-icons/fi"
import { IoCodeSlash } from "react-icons/io"
import { VscProject } from "react-icons/vsc"
import { BsCodeSlash } from "react-icons/bs"
import { Element } from "react-scroll"

export default function Services() {
    return (
        <Element name="service">
        <section className="w-[80%] mx-auto pt-24 pb-32">
            <div className="">
                    <img src={Play.src} alt="play icon" />
                </div>
            <section className="flex justify-between">
                <div></div>
                <h2 className="text-white text-center text-7xl font-bold my-auto overflow-y-hidden">The Service I Provide For You</h2>
                <div className="mt-auto">
                    <img src={Add.src} alt="play icon" />
                </div>
            </section>
            <section className="flex md:flex-col justify-between mt-12">
                <div className="text-center">
                <div className="bg-[#5454D41A] w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto">
                <BsCodeSlash className="text-[#5454D4] text-4xl" />
                </div>
                
                    <h2 className="text-white text-2xl font-semibold my-7">Development</h2>
                    <p className="text-white text-lg font-normal">Create a platform with the best and coolest quality from me.</p>
                </div>
                <div className="text-center mx-8 md:my-8">
                    <div className="bg-[#F03E371A] w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto">
                        <FiFigma className="text-[#F04037]" />
                    </div>
                    <h2 className="text-white text-2xl font-semibold my-7">UI/UX Designer</h2>
                    <p className="text-white text-lg font-normal">I provide UI/UX Design services, and of course with the best quality</p>
                </div>
               
                
            </section>
        </section>
        </Element>
    )
}
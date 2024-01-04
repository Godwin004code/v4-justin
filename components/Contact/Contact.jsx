
import { Element } from "react-scroll";
import Add from "./add.png";
import Circle from "./Group 162526.png";
import Link from "next/link";
import { ImMail } from "react-icons/im"

export default function Contact() {

    const meetingSchedule = () => {
        window.open("https://calendly.com/sintitechsolution/meetingwithsinti")
    }
    
    return (
        <Element name="contact">
        <section className="w-full contact py-24">
            <div className="float-right mr-[10%]">
                <img src={Add.src} alt="Add image" />
            </div>
            <section className="flex justify-between w-[80%] mx-auto mt-32 mb-24 sm:flex-col">
                <div className="w-[60%] sm:w-[100%] sm: mb-7">
                    <h2 className="font-bold text-6xl text-white overflow-y-hidden">Contact me for the service you want to use</h2>

                        <p className="text-white flex mt-14 ">
                            <ImMail className="my-auto text-4xl" /> <span className="my-auto ml-2"> godwinalugbin004@gmail.com</span>
                        </p>
                </div>
                <div className="text-white w-[204px] h-[58px] bg-[#5454D4] flex items-center justify-center my-auto cursor-pointer" onClick={meetingSchedule}>
                    Contact me
                     </div>
            </section>
            <div className="ml-[10%]">
                <img src={Circle.src} alt="Add image" />
            </div>
        </section>
        </Element>
    )
}

import Logo from "../../public/sinti-logo-zip-file/png/logo-no-background.png";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import { ImMail } from "react-icons/im"

export default function Footer() {
    return (
        <footer className="flex justify-between w-[80%] mx-auto sm:w-[95%] sm:flex-col sm:justify-center sm:text-center sm:items-center">
            <section className="sm:mb-7">
                <h2 className="text-2xl text-white">godwin.</h2>
            </section>
            <section className="my-auto flex">
                <Link href="https://twitter.com/SintiTech1137" className="text-white text-4xl">
                <FaSquareXTwitter />
                </Link>
                <Link href="https://www.linkedin.com/company/sinti-tech-solutions/" className="text-white text-4xl">
                <FaLinkedin />
                </Link>
                
            </section>
            
        </footer>
    )
}
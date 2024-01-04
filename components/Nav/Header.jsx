'use client'

import React from 'react'
import logo from "../../public/sinti-logo-zip-file/png/logo-no-background.png"
//import Link from 'next/link'
import { FaBars } from "react-icons/fa"
import { Link } from "react-scroll"
import { useRef } from 'react'


const Header = () => {
  const inputRef = useRef()
  // console.log(inputRef.current.checked)

  const closeNav = () => {
    inputRef.current.checked = false
    console.log("clicked")
  }
  const meetingSchedule = () => {
    window.open("https://calendly.com/sintitechsolution/meetingwithsinti")
  }
  return (
    <header className='flex justify-between w-[90%] mx-auto mt-8'>
      <div className='my-auto'>
        <h2 className='text-3xl text-white'>godwin.</h2>
      </div>
      <nav className='align-middle w-2/5 my-auto md:hidden'>
        <ul className='flex align-middle justify-between  '>
          <li className='text-lg'>
            <Link activeClass="active" className='text-white cursor-pointer' to="home" spy={true} smooth={true} offset={50} duration={500} >
              Home
            </Link>
          </li>
          <li className='text-lg'>
            <Link activeClass="active" className='text-white cursor-pointer' to="service" spy={true} smooth={true} offset={50} duration={500} >
              Service
            </Link>
          </li>
          <li className='text-lg'>
            <Link activeClass="active" className='text-white cursor-pointer' to="projects" spy={true} smooth={true} offset={50} duration={500} >
              Our Project
            </Link>
          </li>
          <li className='text-lg'>
            <Link activeClass="active" className='text-white cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={500} >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className='my-auto md:hidden'>
        <button className='text-base border-2 px-6 py-4 text-white' onClick={meetingSchedule}>Contact us</button>
      </div>

      <div className='hidden sm:block'>
        <input type="checkbox" id="navi-toggle" className="checkbox" ref={inputRef} />
        <label htmlFor="navi-toggle" className="button">
          <div className="icon">
            <FaBars />
          </div>
        </label>
        <div className="background">&nbsp;</div>


        <nav className="nav">
          <ul className="list" onClick={closeNav}>
            <li className='text-3xl' >
              <Link activeClass="active" className='text-white cursor-pointer' to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className='text-3xl my-7'>
              <Link activeClass="active" className='text-white cursor-pointer' to="service" spy={true} smooth={true} offset={50} duration={500} onClick={closeNav}>
                Service
              </Link>
            </li>
            <li className='text-3xl'>
              <Link activeClass="active" className='text-white cursor-pointer' to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeNav}>
                My Project
              </Link>
            </li>
            
            <button className='text-3xl border-2 px-6 py-4 text-white mt-7' onClick={meetingSchedule}>Contact me</button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
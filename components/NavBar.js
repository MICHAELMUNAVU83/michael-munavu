import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../public/assets/navLogo.png";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full py-4 px-2 2xl:px-16">
        <Link href="/">
          <Image src={logo} width={85} height={50} />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 uppercase text-sm hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 uppercase text-sm hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 uppercase text-sm hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 uppercase text-sm hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <Image src={logo} width={87} height={35} />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul onClick={handleNav}>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect{" "}
                </p>
                <div className="flex items-center justify-between w-full  my-4 sm:w-[80%] w-100">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in   duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in   duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in   duration-300">
                    <FaTwitter />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in   duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in   duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

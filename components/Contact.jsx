import React from "react";
import comp from "../public/computer.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-10  w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]  ">
          Contact
        </p>
        <h2 className="py-2">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* { left} */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-300 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  src={comp}
                  alt="computer"
                  width={500}
                  height={500}
                  className="rounded-xl hover:scale-105 ease-in duration-200"
                />
              </div>
              <div className="py-2">
                <h2 className="text-xl font-semibold">Michael Munavu</h2>
                <p>Full Stack Web Developer</p>
                <p className="text-gray-600 p-4">
                  {" "}
                  I am available for full tie positions . Contact me and let's
                  talk{" "}
                </p>
              </div>
              <div>
                <p className="uppercase pt-10">Connect with me</p>
                <div className="flex items-center justify-between  m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer  hover:scale-110 ease-in   duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <FaTwitter />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {right} */}
          <div className="col-span-3 lg:col-span-3 w-full h-auto shadow-xl shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input type="text" className="border-2  rounded-lg p-3" />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input type="text" className="border-2  rounded-lg p-3" />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2  rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="email"
                    className="border-2  rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2  rounded-lg p-3 border-gray-300 "
                    rows="10"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4  ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in   duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

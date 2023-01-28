import React from "react";
import comp from "../public/computer.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full h-screen">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;

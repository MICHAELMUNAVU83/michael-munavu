import React, { useRef, useState } from "react";
import comp from "../public/computer.jpg";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_obtaxtx",
        "template_6ec2bfx",
        form.current,
        "6M-rV1iiaVqa5DANh"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setPhone("");
          setTimeout(() => {
            toast.success("Email Sent , I will get back to you soon", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-10  w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]  ">
          Contact
        </p>
        <h2 className="py-2">Get in Touch</h2>
        <p className="  text-sm text-gray-500 mb-4    font-semibold">
          Reach out to me for any freelancing opportunities , contract work or
          just to say hi ! , I also offer mentorship to aspiring developers .
        </p>
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
                    <a
                      href="https://www.linkedin.com/in/michael-munavu-0b0b1b1b9/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://github.com/MICHAELMUNAVU83"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://twitter.com/MichaelTrance1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a rel="noopener noreferrer" href="tel:0740769596">
                      <FiPhoneCall />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://wa.me/254740769596"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {right} */}
          <div className="col-span-3 lg:col-span-3 w-full h-auto shadow-xl shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2  rounded-lg p-3"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2  rounded-lg p-3"
                      name="phone_number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2  rounded-lg p-3 w-full"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2  rounded-lg p-3 w-full"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2  rounded-lg p-3 border-gray-300 "
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white"
                >
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;

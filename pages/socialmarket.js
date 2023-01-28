import React from "react";
import Image from "next/image";
import socialmarketpic from "../public/assets/projects/events.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function socialmarket() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={socialmarketpic}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">Vendor Booking At Events App </h2>
          <p>React JS / Bootstrap CSS</p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            this is an ecommerce site for a cake shop. It is built with React JS
            and Bootstrap CSS. It has a backend built with Ruby on Rails. It has
            a user authentication system and a shopping cart system. It also has
            a payment system that uses Stripe.
          </p>
          <button className="px-8 py-2  mt-4 mr-8"> Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center  font-semibold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="flex items-center text-gray-600 py-2 ">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="flex items-center text-gray-600 py-2 ">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back </p>
        </Link>
      </div>
    </div>
  );
}

export default socialmarket;

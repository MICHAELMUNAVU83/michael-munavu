import React from "react";
import hackathon1 from "../public/assets/achievements/hackathon1.jpeg";
import hackathon2 from "../public/assets/achievements/hackathon2.jpeg";
import hackathon3 from "../public/assets/achievements/hackathon3.jpeg";
import hackathon4 from "../public/assets/achievements/hackathon4.jpeg";
import hackathon5 from "../public/assets/achievements/hackathon5.jpeg";
import hackathon6 from "../public/assets/achievements/hackathon6.jpeg";
import hackathon7 from "../public/assets/achievements/hackathon7.jpeg";
import hackathon8 from "../public/assets/achievements/hackathon8.jpeg";
import hackathon9 from "../public/assets/achievements/hackathon9.jpeg";
import hackathon10 from "../public/assets/achievements/hackathon10.jpeg";
import Image from "next/image";
const Achievments = () => {
  return (
    <div className="max-w-[1240px] p-2  mx-auto mt-24">
      <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
        Achievements
      </p>
      <h2 className="py-4">What I have achieved so far</h2>
      <p className="  text-sm md:text-xl text-gray-500   ">
        During the year 2022 , I was able to participate in various hackathons
        and won 2 of them. I was the lead backend engineer for a project called
        lifeline which provides quick access to medical records . This year , me
        and{" "}
        <a
          href="https://www.kiprotichkimutai.dev/"
          target="_blank"
          rel="noreferrer"
          className=" text-[#5651e5]"
        >
          Kiprotich Kimutai
        </a>{" "}
        , worked on Mche, which offers a comprehensive solution to smallholder
        farmers. We have so far won 5 awards with Mche . Collectively , I have
        won <span className="text-[#5651e5]"> 10 awards </span> in hackathons .
        I have travelled to <span className="text-[#5651e5]"> Nigeria </span>{" "}
        and to represent my country in a hackathon and was the{" "}
        <span className="text-[#5651e5]">First Runners Up </span> in the{" "}
        <span className="text-[#5651e5]"> Code Cash Crop Competition </span> .
        We now have systems in the entertainment and fintech space with{" "}
        <a
          href="https://lipiangoma.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#5651e5]"
        >
          {" "}
          Lipia Ngoma{" "}
        </a>{" "}
        and in the logistics space with{" "}
        <a
          href="https://pataride.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#5651e5]"
        >
          {" "}
          Pataride{" "}
        </a>{" "}
        .
      </p>
      <Image
        src={hackathon10}
        alt="hackathon1"
        className="md:h-[800px]  mt-4 mx-auto w-[100%]"
      />

      <div className="flex md:flex-row flex-col justify-center gap-4 mt-12">
        <div className="md:w-[50%] w-[90%] mx-auto flex flex-col gap-6 ">
          <Image
            src={hackathon5}
            alt="hackathon1"
            className="md:h-[400px] object-cover mx-auto w-[400px] md:w-[850px]"
          />
          <div className="flex  md:flex-row flex-col  md:gap-2 gap-4  justify-between my-2 items-center">
            <Image
              src={hackathon2}
              alt="hackathon1"
              className="md:w-[50%] w-[400px] object-cover  mx-auto md:h-[410px]"
            />
            <Image
              src={hackathon3}
              alt="hackathon1"
              className="md:w-[50%] h-[500px] object-cover w-[400px] md:h-[410px]"
            />
          </div>
        </div>

        <div className="md:w-[50%] w-[90%] mx-auto flex flex-col gap-6 ">
          <Image
            src={hackathon4}
            alt="hackathon1"
            className="md:h-[400px]  mx-auto w-[400px] md:w-[850px]"
          />
          <div className="flex  md:flex-row flex-col  md:gap-2 gap-4  justify-between my-2 items-center">
            <Image
              src={hackathon1}
              alt="hackathon1"
              className="md:w-[50%] w-[400px] object-cover  mx-auto md:h-[410px]"
            />
            <Image
              src={hackathon6}
              alt="hackathon6"
              className="md:w-[50%] h-[500px] object-cover w-[400px] md:h-[410px]"
            />
          </div>
        </div>
      </div>

      <div className="  grid md:grid-cols-3 w-[100%]  gap-4">
        <Image
          src={hackathon7}
          alt="hackathon1"
          className="  object-cover  mx-auto md:h-[410px]"
        />
        <Image
          src={hackathon8}
          alt="hackathon1"
          className=" h-[500px] object-cover  md:h-[410px]"
        />
        <Image
          src={hackathon9}
          alt="hackathon1"
          className=" h-[500px] object-cover  md:h-[410px]"
        />
      </div>
    </div>
  );
};

export default Achievments;

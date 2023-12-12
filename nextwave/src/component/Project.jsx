import React from "react";
import { LinearGradient } from "react-text-gradients";
import { FaDigitalOcean, FaMobileAlt, FaLaptop, FaHome, FaCube } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";


const Project = () => {
  return (
    <div className="m-auto p-4">
       <div className=" grid">
          <h1 className="text-[40px] text-center sm:text-center">
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              Project
            </LinearGradient>
          </h1>
        </div>

        
      <div className="grid sm:p-5   mt-[30px]">
        <div className="w-full gap-5 grid  grid-cols-2  place-items-center   ">
          <div className="text-center grid gap-2 bg-violet-400 p-2 rounded-xl sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Digital Social Media </h2>
            <FaDigitalOcean className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque, qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ipsam!
            </p>
          </div>
          
          <div className="text-center grid gap-2 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl p-2  sm:w-3/5 ">
            <h2 className="text-[25px]">Mobile Development </h2>
            <FaMobileAlt className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ad.
            </p>
          </div>
          
          <div className="text-center gap-2  sm:w-3/5 grid hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Website Development</h2>
            <FaLaptop className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque, qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, autem!
            </p>
          </div>
          
          <div className="text-center grid gap-2  sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Design Interior</h2>
            <FaHome className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident?
            </p>
          </div>
          <div className="text-center grid gap-2 sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">3D Asset </h2>
            <FaCube className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae.
            </p>
          </div>
          <div className="text-center grid gap-2 sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Advertisement</h2>
            <SiGoogleads className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, ea. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quasi.
            </p>
          </div>
          
        
        </div>
      </div>
    </div>
  );
};

export default Project;

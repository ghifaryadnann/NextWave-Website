import React from "react";
import { LinearGradient } from "react-text-gradients";
import { FaDigitalOcean, FaMobileAlt, FaLaptop, FaHome, FaCube } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";


const Project = () => {
  return (
    
    <div className="m-auto p-4">
       <div className=" grid">
          <h1 data-aos = "zoom-in-up" className="text-[40px] text-center sm:text-center">
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              Project
            </LinearGradient>
          </h1>
        </div>

        
      <div className="grid sm:p-5   mt-[30px]">
        <div className="w-full gap-5 grid  grid-cols-2  place-items-center   ">
          <div data-aos = "fade-right" className="text-center grid gap-2 bg-violet-400 p-2 rounded-xl sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Digital Social Media </h2>
            <FaDigitalOcean className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
            Dapatkan dukungan untuk mengelola sosial media anda, mengatur budget, dan memilih audiens target. Membuat konten yang menjual untuk brand dan bisnis Anda
            </p>
          </div>
          
          <div data-aos="fade-left" className="text-center grid gap-2 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl p-2  sm:w-3/5 ">
            <h2 className="text-[25px]">Mobile Development </h2>
            <FaMobileAlt className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Buat bisnis anda menjadi professional dengan membuat sebuah aplikasi mobile dan jadikan bisnis anda menjadi lebih kredibel dan terpercaya dengan adanya aplikasi mobile
            </p>
          </div>
          
          <div data-aos = "fade-right" className="text-center gap-2  sm:w-3/5 grid hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Website Development</h2>
            <FaLaptop className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Tidak hanya untuk kredibilitas, dengan adanya website di bisnis anda bisa menjadikan branding bisnis anda lebih luas dengan adanya sistem SEO & SEM 
            </p>
          </div>
          
          <div data-aos="fade-left" className="text-center grid gap-2  sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Design Interior</h2>
            <FaHome className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
            Mendesign interior sangat penting di era modern ini, merancang sebuah interior design sebelum mengaplikasan sangat penting untuk bisnis anda terlihat professional
            </p>
          </div>
          <div data-aos="fade-right" className="text-center grid gap-2 sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">3D Asset </h2>
            <FaCube className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Menjadikan sebuah projek terlihat nyata dan detail dengan 3D asset, membuat pekerjaan dan bisnis anda akan terlihat terstruktur dan elegan
            </p>
          </div>
          <div data-aos="fade-left" className="text-center grid gap-2 sm:w-3/5 hover:bg-slate-700 hover:duration-200 hover:cursor-pointer hover:rounded-xl">
            <h2 className="text-[25px]">Advertisement</h2>
            <SiGoogleads className="m-auto w-[40px] h-[30px]" />
            <p className="text-xs">
              Advertisement adalah sebuah pengiklanan, di era modern seperti ini sangat penting untuk bisnis anda agar banyak di ketauhi oleh client diluar sana
            </p>
          </div>
          
        
        </div>
      </div>
    </div>
  );
};

export default Project;

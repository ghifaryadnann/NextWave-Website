import React from "react";
import about_nextwave from "../assets/about_nextwave.svg";
import { LinearGradient } from "react-text-gradients";

const About = () => {
  return (
    <div className="flex justify-center text-black bg-white w-full h-screen">
      <div className="flex h-screen items-center  justify-center">
        <div className="flex flex-col items-center  sm:items-left sm:px-[50px] p-5 h-4/5 w-full ">
          <div className="flex flex-col  justify-center h-full ">
            <div>
              <h1 className="text-[40px]">
                <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                  About
                </LinearGradient>
              </h1>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row   ">
              <div>
                <p className=" sm:w-4/5 text-gray-600 ">
                  Kami adalah sebuah Digital Agency yang berbasis di Tangerang,
                  yang berdedikasi untuk mengoptimalkan kinerja bisnis melalui
                  solusi terkini dalam SEO, Ads, Web, dan Media Sosial.
                </p>
                <div className="hidden sm:inline mt-5 sm:w-4/5">
                  <h2 className="text-2xl text-blue-500 mt-4">Visi</h2>
                  <p className="opacity-80">
                    Menjadi pelopor dalam inovasi digital bisnis yang
                    menginspirasi dan membawa perubahan positif dalam masyarakat
                    Indonesia.
                  </p>
                </div>
                <div className="hidden sm:block mt-5 sm:w-4/5">
                  <h2 className="text-2xl text-purple-500">Misi</h2>
                  <p className="opacity-80">
                    Kami berkomitmen untuk menghadirkan solusi digital bisnis
                    terdepan yang memenuhi kebutuhan pelanggan kami, kami terus
                    berinovasi dan meningkatkan standar industri 4.0. Kami akan
                    bekerja dengan dedikasi untuk memberikan nilai tambah
                    kualitas yang signifikan kepada pelanggan kami dan
                    berkontribusi pada perkembangan teknologi dan kemajuan
                    berkelanjutan.
                  </p>
                </div>
              </div>

              <img
                className="w-[350px] sm:w-[400px] sm:h-[350px] h-[250px] m-auto sm:mt-[0px] mt-[35px]"
                src={about_nextwave}
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

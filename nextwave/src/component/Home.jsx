import React from "react";
import team_nextwave from "../assets/team_nextwave.svg";
import Button from "../layout/Button";
import "../component/Component.css";
import { LinearGradient } from "react-text-gradients";

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <div>
        <div className="flex flex-col sm:flex-row p-5 justify-center sm:px-[50px]  text-center w-full h-full items-center ">
          <div className="flex flex-col sm:w-3/5 sm:text-left">
            <h1 className="text-[50px] mt-5 sm:mt-0 pt-[30px] sm:pt-0 text-center sm:text-left font-black mb-5">
              We Are
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                NextWave
              </LinearGradient>
            </h1>
            <p className="text-sm sm:mb-5 sm:w-4/5">
              Kami adalah sebuah Digital Agency yang berbasis di Tangerang, yang
              berdedikasi untuk mengoptimalkan kinerja bisnis melalui solusi
              terkini dalam SEO, Ads, Web, dan Media Sosial
            </p>
            <Button className="cursor-pointer " title="Contact Us" />
          </div>

          <img
            className="w-[280px] h-[180px] mt-[50px] sm:w-[400px] sm:h-[300px]"
            src={team_nextwave}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import team_nextwave from "../assets/team_nextwave.svg";
import Button from "../layout/Button";
import "../component/Component.css";
import { LinearGradient } from "react-text-gradients";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    

    <div className="flex w-full h-screen overflow-hidden">
      <div>
        <div className="flex flex-col sm:flex-row p-5 justify-center sm:px-[50px]  text-center w-full h-full items-center ">
          <div className="flex flex-col sm:w-3/5 sm:text-left">
            <h1 data-aos= "fade-right"  className="text-[35px] mt-5 sm:mt-0 pt-[30px] sm:pt-0 text-center sm:text-left font-black mb-5">
              We Are&nbsp;
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                NextWave
              </LinearGradient>
            </h1>
            <p data-aos= "fade-left" className="text-sm sm:mb-5 sm:w-4/5">
              Elevate your brand with our expertise and drive measurable
              results. Let's transform your digital presence into a compelling
              success story
            </p>
            <Link to="contact" data-aos="fade-right" spy={true} smooth={true} duration={500}>
              <Button  className="cursor-pointer " title="Contact Us" />
            </Link>
          </div>

          <img data-aos="fade-right"
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

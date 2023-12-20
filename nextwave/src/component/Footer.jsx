import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full sm:justify-center bg-white sm:flex">
      <div className="flex justify-between sm:w-4/5 text-black p-5 bg-white">
        <div className="flex justify-center items-center">
          <h1 className="text-black">©2023 NextWave Indonesia. All Reserved</h1>
        </div>
        <div className="flex flex-row text-2xl  justify-center items-center">
          <div className="mx-2">
            <a
              href="https://www.instagram.com/nextwaveindonesia/"
              target="_blank"
              className="mx-1"
            >
              <span className=" cursor-pointer hover:text-slate-400 hover:duration-300">
                <FaInstagram />
              </span>
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/company/nextwave-indonesia/">
              <span className=" cursor-pointer hover:text-slate-400 hover:duration-300">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

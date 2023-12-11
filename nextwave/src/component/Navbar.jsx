import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Button from "../layout/Button";
import logo_nextwave from "../assets/logo_nextwave.png"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between bg-slate-700    p-5 md:px-50 px-5 shadow-[1px]">
          <div className="flex  w-[150px] items-center">
            <img className="h-[37px] ms-5" src={logo_nextwave} alt="logo"/>
          </div>
          <nav className="hidden md:flex flex-row w-4/5 font-medium justify-center items-center flex gap-10 ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer  hover:text-slate-500"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer  hover:text-slate-500"
            >
              About
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-slate-500"
            >
              Project
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-slate-500"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex mb-1  text-center">
             <Button title='Get Started'/> 
          </div>
           <div className="md:hidden cursor-pointer">
             { menu ? (<IoIosClose size={25} onClick={handleMenu}/>) : (<IoMdMenu size={25} onClick={handleMenu} />)}
           </div>
        </div>

        <div className={`${ menu ? "translate-x-0" : "-translate-x-full"} md:hidden  w-full h-screen flex flex-col  bg-slate-600 text-center gap-4 pt-4 transition-transform duration-300 `}>
        <div className="flex flex-col h-2/5">

          <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:w-2/5 hover:duration-200 hover:bg-slate-500 md:w-[0px] hover:rounded-xl  m-auto hover:text-amber-300"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:w-2/5 hover:duration-200 hover:bg-slate-500 md:w-[0px] hover:rounded-xl m-auto hover:text-amber-300"
            >
              About
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:w-2/5 hover:duration-200 hover:bg-slate-500 md:w-[0px] hover:rounded-xl  m-auto hover:text-amber-300"
            >
              Project
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:w-2/5 hover:duration-200 hover:bg-slate-500 md:w-[0px] hover:rounded-xl m-auto hover:text-amber-300"
            >
              Contact
            </Link>
            
              <Button title="Get Started"/>
        </div>
        
           
          
        </div> 

      </div>
    </div>
  );
};

export default Navbar;

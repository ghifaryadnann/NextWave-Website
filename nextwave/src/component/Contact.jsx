import React from "react";
import logo_nextwave from "../assets/logo_nextwave.png";
import { LinearGradient } from "react-text-gradients";





const Contact = () => {

 

  return (
    <div className="h-full w-full bg-white">
      <span className="flex justify-center items-center">
        <img data-aos="fade-top" className="h-[50px]  m-5 m-auto" src={logo_nextwave} />
      </span>
      <div className="flex w-full justify-center flex-col items-center p-5 h-full bg-slate-700 ">
        <h1 data-aos = "fade-left" className="text-[40px] mb-3">
          <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
            Contact Us
          </LinearGradient>
        </h1>
        <div data-aos ="flip-right" className="flex flex-col p-5 shadow-2xl  justify-center items-center">
          <div>
            <div>
              <div>
                <h1>NextWave Indonesia </h1>
                <span className="text-sm text-gray-400">
                  Innovative Integrated Marketing Communication Agency
                </span>
              </div>

              <div className="my-3">
                <ul>
                  <li>
                    CitraRaya , Kec. Cikupa, Kabupaten Tangerang, Banten 15710 -
                    Indonesia
                  </li>
                  <li>Phone: +62 8128 165 9252</li>
                </ul>
              </div>

              <div>
                <p>nextwaveindonesia1@gmail.com</p>
              </div>
            </div>

            <div className="shadow-2xl px-3 rounded my-3">
                
              <form  className="flex w-full flex-col gap-3">
                <span>Nama</span>
                <input type="text" className="rounded-xl text-amber-700 p-1" />
                <span>No Whatsapp</span>
                <input  type="text"  className="rounded-xl text-amber-700 p-1" />
              </form>
              <div>
                <a href="https://api.whatsapp.com/send?phone=6281281659252&text=Halo%2C%20Welcome%20to%20NextWave.%20Ada%20yang%20bisa%20kami%20bantu%3F" target="_blank">
                   <button  className="bg-red-500 rounded-xl hover:bg-red-700 hover:duration-300 p-1 w-full my-4">
                  Submit
                </button> 
                </a>
                
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

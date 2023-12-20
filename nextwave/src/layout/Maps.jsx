import React from "react";

const Maps = () => {
  return (
    <div className="w-full h-4/5">
      <div>
        <div className="">
          <iframe
            data-aos="zoom-in"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2195085369212!2d106.51549497020045!3d-6.234769947224121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4207a8eac51eb7%3A0x2c3ce99b1460f8c0!2sCitra%20Raya%20Cikupa!5e0!3m2!1sid!2sid!4v1703052731367!5m2!1sid!2sid"
            className="m-auto my-5 p-3 sm:w-3/5 w-4/5 border-double border-4 border-slate-500 h-[450px] "
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;

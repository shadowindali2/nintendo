import React from "react";
import { footerData } from "../data.jsx";

export default function Footer() {
  return (
    <div>
    <div className="xl:w-9/12 w-full m-auto xl:p-0 p-4 relative flex flex-wrap md:justify-start justify-center gap-8 mt-10">
      {footerData.map((val, index) => {
        const isLast = index === footerData.length - 1;
        return (
          <div key={index} className={`w-52 px-2 ${isLast ? "md:border-l-0 border-l-[1px]" : "md:border-r-[1px] md:border-l-0 border-l-[1px]"}`}>
            <p className="text-primary md:text-xl text-balance md:mr-2 ml-2 mb-6 font-bold">
              {val.title}
            </p>
            {val.links.map((link, index) => (
              <div className="text-secondary font-bold my-4 md:pr-2 pl-2 text-balance text-sm" key={index}>
                <a href="#" className="hover:border-b-2 border-secondary duration-100">
                  {link}
                </a>
              </div>
            ))}
          </div>
        );
      })}

    </div>
    <div className="flex md:justify-end justify-center">
      <img src="https://shadowindali.github.io/Nintendo/certificate.png" className="w-20 m-10  " alt="" />
    </div>
    <div className="p-8 md:p-8 pb-48 bg-gray-800">
    <div className="xl:w-9/12 w-full m-auto xl:p-0 p-4 relative flex flex-wrap lg:justify-between justify-center items-center gap-4">
    <p className="text-white text-xs md:text-base text-center">© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
    <div className="flex gap-8">
      <div className="flex items-center gap-4">
        <a href="#" className="text-white hover:text-secondary duration-200 border-secondary md:text-xs text-[10px]">Contact us</a>
        <a href="#" className="text-white hover:text-secondary duration-200 border-secondary md:text-xs text-[10px]">Website feedback</a>
        <a href="#" className="text-white hover:text-secondary duration-200 border-secondary md:text-xs text-[10px]">Terms of Use</a>
        <a href="#" className="text-white hover:text-secondary duration-200 border-secondary md:text-xs text-[10px]">Documents & Policies</a>
      </div>
      <div className="md:flex hidden gap-4">
        <img src="https://shadowindali.github.io/Nintendo/americaflag.jpg" className="w-6" alt="" />
        <p className="text-white md:text-xs text-[10px]">English(United States)</p>
      </div>
    </div>
      </div>
      </div>
    </div>
  );
}

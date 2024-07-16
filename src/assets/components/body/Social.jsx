import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


export default function Social() {
  return (
    <div className=" bg-secondary p-7">
      <div className="xl:w-9/12 w-full m-auto xl:p-0 p-4 relative flex flex-wrap lg:justify-between justify-center items-center gap-4">
        <div>
          <img src="/logo.png" className="w-full" alt="" />
        </div>
        <div className="flex gap-14 items-center">
            <FaFacebook className="text-white text-4xl"/>
            <FaInstagram className="text-white text-4xl"/>
            <FaXTwitter className="text-white text-4xl"/>
            <FaYoutube className="text-white text-4xl"/>
        </div>
      </div>
    </div>
  );
}

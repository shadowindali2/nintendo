import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { FaCartArrowDown } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import LoginResponsive from "./LoginResponsive";

export default function ResponsiveHeader() {
  const [searchClick, setSearchClick] = useState(false);
  const [loginClickRes, setLoginClickRes] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (loginClickRes) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [loginClickRes]);

  return (
    <>
      <div className={`xl:hidden items-center justify-between bg-red-600 p-3 ${searchClick ? "hidden" : "flex"}`}>
        <h4 className="text-white font-bold">Nintendo</h4>
        <div className="flex gap-2 items-center">
          <p className="text-white">My Nintendo Store</p>
          <img src="icons/flag.svg" className="w-6" alt="" />
        </div>
      </div>
      <div className={` flex items-center border-b-[1px] bg-white border-red-600  p-2 ${searchClick ? "flex fixed top-0 z-50 w-full" : "hidden"}`}>
      <FaSearch className="text-red-700 text-xl"/>
      <input type="text" className="w-full border-none outline-none focus:ring-0" placeholder="Search, games hardware, news, etc" />
      <div
            onClick={() => setSearchClick(false)}
            className="mr-3 w-6 h-6 text-center bg-gray-700 text-white font-semibold rounded-full cursor-pointer"
          >
            X
          </div>
      </div>
      <div className={`fixed inset-x-0 bottom-5 items-center justify-center xl:hidden z-50 ${searchClick ? "hidden" : "flex z-50"}`}>
        <div className="md:w-[450px] w-full h-[58px] md:m-0 mx-4 bg-white shadow-2xl rounded-[100px] flex justify-between px-12 items-center">
          <CgMenu className="hover:text-red-700 duration-300 text-2xl cursor-pointer" />
          <FaHeart className="hover:text-red-700 duration-300 text-2xl cursor-pointer" />
          <div onClick={()=> setSearchClick(!searchClick)} className="text-white duration-300 text-4xl cursor-pointer bg-red-600 rounded-full text-center w-16 h-16 flex justify-center items-center">
            <FaSearch className="" />
          </div>
          <FaCartArrowDown className="hover:text-red-700 duration-300 text-2xl cursor-pointer" />
          <FaUser onClick={() => setLoginClickRes(!loginClickRes)} className="hover:text-red-700 duration-300 text-2xl cursor-pointer" />
        </div>
      </div>
      <Slider searchClick={searchClick} setSearchClick={setSearchClick} />
      <LoginResponsive clickLogin={loginClickRes} setLoginClick={setLoginClickRes} />
    </>
  );
}

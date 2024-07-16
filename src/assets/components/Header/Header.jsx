import React, { useState } from "react";
import { header } from "../data.jsx";
import Login from "./Login";
import DropDown from "./DropDown";
import Slider from "./Slider";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";

export default function Header() {
  const [loginClick, setLoginClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  return (
    <>
      <div className=" relative xl:flex hidden bg-white justify-between items-center border-b-[2px] border-gray-200 z-50 ">
        <div className="flex gap-2 items-center">
          <a href="#">
            <img src="logo.svg" className="w-24" alt="" />
          </a>
          <div
            className={`relative flex justify-between items-center border-b-[1px] border-black hover:border-red-600 cursor-pointer`}
          >
            <div
              className="flex items-center"
              onClick={() => setSearchClick(true)}
            >
              <img src="icons/search.svg" className="w-5" alt="" />
              <input
                type="text"
                placeholder={`${
                  searchClick ? "Search games, hardware, news, etc" : "Search"
                }`}
                className={`w-80 border-none outline-none focus:ring-0 ${
                  searchClick ? "" : "cursor-pointer"
                }`}
              />
            </div>
            <div className="flex gap-2  hover:text-red-600 hover:color-600">
              <DropDown name={"All categories"} />
            </div>
          </div>
        </div>
        {searchClick ? (
          <div
            onClick={() => setSearchClick(false)}
            className="mr-3 w-6 h-6 text-center bg-gray-700 text-white font-semibold rounded-full cursor-pointer"
          >
            X
          </div>
        ) : (
          <div className="flex items-center gap-6 p-2">
            {header.map((val, key) => {
              return (
                <div key={key}>
                  <a
                    href="#"
                    className="flex items-center ml-2 font-semibold hover:text-secondary duration-300"
                    onClick={() => {
                      if (key === 3) {
                        setLoginClick(!loginClick);
                      }
                    }}
                  >
                    <div className="flex gap-2 items-center ">
                      {key === 4 ? (
                        <img src={val.icon} className="w-6" alt="" />
                      ) : (
                        <div className="text-lg">{val.icon}</div>
                      )}
                      <p>{val.name}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Login clickLogin={loginClick} setLoginClick={setLoginClick} />
      <Slider searchClick={searchClick} setSearchClick={setSearchClick} />
    </>
  );
}

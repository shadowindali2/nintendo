import React, { useEffect } from "react";
import { topStore } from "../data.jsx";

export default function Slider({ searchClick, setSearchClick }) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (searchClick) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [searchClick]);
  return (
    <>
       <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-65 z-30 ${
          searchClick ? "" : "hidden"
        }`}
        onClick={() => setSearchClick(!searchClick)}
      ></div>
    <div
      className={`bg-gray-300 w-full fixed top-0 z-40 ${
        searchClick ? "visible z-40 pt-14" : "h-0 invisible fade"
      }`}
    >
      <div
        className={` w-full bg-gray-100 duration-300 xl:px-24 px-6 py-6 fixed  ${
          searchClick ? "visible xl:h-80 Lg:h-auto h-full z-10" : "h-0 invisible "
        } `}
      >
        <div
          className={`flex xl:flex-row flex-col    ${
            searchClick ? "visible" : "invisible"
          }`}
        >
          <div className="flex flex-col gap-3 w-5/12">
            <p className="font-semibold md:text-lg text-sm">Trending topics</p>
            <p className="font-semibold md:text-lg text-sm text-red-600">
              Nintendo Switch™ - OLED Model: Mario Red Edition
            </p>
            <p className="font-semibold md:text-lg text-sm text-red-600">
              Nintendo Switch
            </p>
            <p className="font-semibold md:text-lg text-sm text-red-600">
              Super Mario Bros. Wonder
            </p>
            <p className="font-semibold md:text-lg text-sm text-red-600">
              Nintendo Switch games
            </p>
            <p className="font-semibold md:text-lg text-sm text-red-600">Zelda games</p>
          </div>
          <div className="xl:w-6/12 w-12/12">
            <p className="font-semibold md:text-lg text-sm xl:mb-4 my-6">
              Top store products
            </p>
            <div className="flex md:flex-wrap md:flex-row flex-col w-12/12 gap-9">
              {topStore.map((val, key) => {
                return (
                  <div
                    className="w-5/12 border-[2px] bg-white border-gray-200  rounded-xl flex "
                    key={key}
                  >
                    <div className="md:w-5/12 w-6/12 overflow-hidden rounded object-contain rounded-l-lg">
                      <img src={val.icon} className="w-full h-full" alt="" />
                    </div>
                    <div className="w-7/12 flex justify-between flex-col p-1">
                    <div className="font-semibold md:text-[0.875rem] text-xs cursor-pointer hover:text-red-700">
                        {val.name}
                    </div>
                      <div className="flex items-center justify-between">
                        <p className=" md:text-normal text-xs">
                          <span className="text-red-500 font-bold">|</span>{" "}
                          {val.type}
                        </p>
                        <span>
                          <img src="/icons/heart.svg" className="w-4" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

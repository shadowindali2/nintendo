import React from "react";
import { categories } from "../data.jsx";

export default function Category() {
  return (
    <div className="xl:w-7/12 lg:w-full w-full m-auto mb-10">
      {categories.map((val, key) => {
        const isFirst = key === 0;
        return (
          <div
            className={`md:p-4 p-4   border-b-[1px] ${
              isFirst ? "border-t-[1px]" : ""
            } p-4 flex flex-wrap w-full border-gray-300`}
            key={key}
          >
            <div className="lg:w-4/12 w-full flex items-center gap-4">
              <img src={val.image} className="w-10" alt="" />
              <p className="text-primary font-semibold">{val.name}</p>
            </div>
            <div className="lg:w-8/12 w-full flex gap-4 lg:my-0 my-2">
              {val.data.map((data, index) => {
                return (
                  <>
                    <p
                      key={index}
                      className={`${
                        val.isdocuration
                          ? "text-secondary underline flex-row font-bold hover:text-red-700 cursor-pointer duration-300"
                          : " text-gray-500"
                      }`}
                    >
                      {data}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

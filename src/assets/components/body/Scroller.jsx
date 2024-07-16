import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function Scroller() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`xl:block hidden bg-gray-200 duration-300 fixed w-full z-50  ${
          showDiv ? "top-0" : "top-[-300px]"
        }`}
      >
        <div className="xl:w-7/12 w-full m-auto  xl:p-0 p-4 relative xl:flex lg:flex md:flex justify-between items-center hidden">
          <p className="text-primary font-bold">Stardew Valley</p>
          <div className="flex gap-8 items-center">
            <p className="text-sm text-primary">
              Digital <span className="text-normal font-bold">$14.99</span>
            </p>
            <Button data="Direct Download" />
          </div>
        </div>
      </div>
      <div className={`flex justify-center items-center fixed inset-x-0 bottom-16 duration-300 z-40 ${
            showDiv ? "h-auto" : "h-0"
          }`}>
        <div
          className={`xl:hidden bg-gray-200  z-40 md:w-[440px] w-full mx-5 duration-300 rounded-t-xl ${
            showDiv ? "h-28" : "h-0 overflow-hidden"
          }`}
        >
            <div className="flex gap-8 items-center justify-between w-full p-4 mb-2">
              <p className="text-sm text-primary flex gap-2 flex-col">
                Digital <span className="text-normal font-bold">$14.99</span>
              </p>
              <Button data="Direct Download" />
            </div>
        </div>
      </div>
    </>
  );
}

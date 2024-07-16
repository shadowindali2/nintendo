import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import NintendoStore from "./NintendoStore";
import NavStore from "./NavStore";

export default function Navbar() {
  const initialState = {
    isStorOpen: false,
    isGameOpen: false,
    isSwitchOpen: false,
    isPlayNintendoOpen: false,
  };

  const [dropDown, setDropDown] = useState(initialState);

  useEffect(() => {
    const body = document.querySelector("body");
    if (
      dropDown.isStorOpen ||
      dropDown.isGameOpen ||
      dropDown.isSwitchOpen ||
      dropDown.isPlayNintendoOpen
    ) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [dropDown]);

  const toggleDropdown = (dropdown) => {
    setDropDown((prevState) => {
      const newState = { ...initialState, [dropdown]: !prevState[dropdown] };
      return newState;
    });
  };

  const toggleMystoreDropdown = () => {
    toggleDropdown("isStorOpen");
  };

  const toggleGamesDropdown = () => {
    toggleDropdown("isGameOpen");
  };

  const toggleSwitchDropdown = () => {
    toggleDropdown("isSwitchOpen");
  };

  const togglePlayNintendoDropdown = () => {
    toggleDropdown("isPlayNintendoOpen");
  };

  return (
    <>
      <div className="lg:block hidden">
        <div className="pt-2 bg-white w-12/12 border-b-[1px] border-gray-300">
          <div className="flex justify-center items-center gap-x-9">
            <div
              className="flex text-secondary border-b-4 border-secondary gap-1 items-center font-bold text-sm pb-2 cursor-pointer"
              onClick={toggleMystoreDropdown}
            >
              <img
                src="https://shadowindali.github.io/Nintendo/storeicon.png"
                className="w-4"
                alt=""
              />
              <p>My Nintendo Store</p>
              <FaChevronDown
                className={` ${
                  dropDown.isStorOpen
                    ? "rotate-180 duration-300"
                    : "rotate-0 duration-300"
                }`}
              />
            </div>
            <div
              className="flex text-primary group  gap-1 items-center font-bold text-sm pb-2 cursor-pointer"
              onClick={toggleGamesDropdown}
            >
              <img
                src="https://shadowindali.github.io/Nintendo/gamesicon.png"
                className="w-4"
                alt=""
              />
              <p
                className={`group-hover:text-secondary duration-300 ${
                  dropDown.isGameOpen ? "text-secondary" : ""
                }`}
              >
                Games
              </p>
              <FaChevronDown
                className={`text-primary group-hover:text-secondary ${
                  dropDown.isGameOpen
                    ? "rotate-180 duration-300"
                    : "rotate-0 duration-300"
                }`}
              />
            </div>
            <div
              className="flex text-primary group  gap-1 items-center font-bold text-sm pb-2 cursor-pointer"
              onClick={toggleSwitchDropdown}
            >
              <img
                src="https://shadowindali.github.io/Nintendo/nintendoicon.png"
                className="w-4"
                alt=""
              />
              <p
                className={`group-hover:text-secondary duration-300 ${
                  dropDown.isSwitchOpen ? "text-secondary" : ""
                }`}
              >
                Nintendo Switch
              </p>
              <FaChevronDown
                className={`text-primary group-hover:text-secondary ${
                  dropDown.isSwitchOpen
                    ? "rotate-180 duration-300"
                    : "rotate-0 duration-300"
                }`}
              />
            </div>
            <div className="flex text-primary group  gap-1 items-center font-bold text-sm pb-2 cursor-pointer">
              <img
                src="https://shadowindali.github.io/Nintendo/newsicon.png"
                className="w-4"
                alt=""
              />
              <p className="group-hover:text-secondary duration-300">
                News & Events
              </p>
            </div>
            <div
              className="flex text-primary group  gap-1 items-center font-bold text-sm pb-2 cursor-pointer"
              onClick={togglePlayNintendoDropdown}
            >
              <img
                src="https://shadowindali.github.io/Nintendo/playninicon.png"
                className="w-4"
                alt=""
              />
              <p
                className={`group-hover:text-secondary duration-300 ${
                  dropDown.isPlayNintendoOpen ? "text-secondary" : ""
                }`}
              >
                Play Nintendo
              </p>
              <FaChevronDown
                className={`text-primary group-hover:text-secondary ${
                  dropDown.isPlayNintendoOpen
                    ? "rotate-180 duration-300"
                    : "rotate-0 duration-300"
                }`}
              />
            </div>
          </div>
        </div>
        {(dropDown.isStorOpen ||
          dropDown.isGameOpen ||
          dropDown.isSwitchOpen ||
          dropDown.isPlayNintendoOpen) && (
          <div
            className="fixed top-24 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => {
              setDropDown(!initialState);
            }}
          ></div>
        )}
      </div>
      <div className="lg:block hidden">
        <NintendoStore
          show={dropDown.isStorOpen}
          click={toggleMystoreDropdown}
        />
        <NavStore show={dropDown} setShow={setDropDown} />
      </div>
    </>
  );
}

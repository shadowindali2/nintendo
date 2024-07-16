import React, { useState } from "react";

export default function LoginResponsive({ clickLogin, setLoginClick }) {
  return (
    <div className="xl:hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-65 z-40 ${
          clickLogin ? "" : "hidden"
        }`}
        onClick={() => setLoginClick(!clickLogin)}
      ></div>
      <div
        className={`fixed inset-x-0 bottom-7 flex items-center justify-center z-40 `}
      >
        <div
          className={`md:w-[430px] w-full mx-5 bg-gray-200 inset-x-0 bottom- duration-300  overflow-auto rounded-xl 
            
            ${clickLogin ? "h-[700px]" : "h-0 "}`}
        >
          <div className="flex justify-between items-center mb-10 bg-white p-6">
            <p className="ml-28 text-xl font-semibold">Log in / Sign up</p>
            <div
              className={`bg-gray-400 text-white rounded-full w-6 h-6 text-center font-semibold cursor-pointer`}
              onClick={() => setLoginClick(!clickLogin)}
            >
              X
            </div>
          </div>
          <div className="bg-white rounded-lg py-2 px-6 mb-4 mx-6">
            <img src="login-img.png" className="mb-2" alt="" />
            <div className="flex gap-1 items-center">
              <img src="icons/check.svg" className="w-6" alt="" />
              <p className="font-semibold">Shop online</p>
            </div>
            <div className="flex gap-1 items-center my-2">
              <img src="icons/check.svg" className="w-6" alt="" />
              <p className="font-semibold">Earn My Nintendo points</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src="icons/check.svg" className="w-6" alt="" />
              <p className="font-semibold">Save a Wish List</p>
            </div>
          </div>
          <div className="px-6">
            <button class="bg-red-700 hover:bg-red-800 duration-300 text-white font-bold py-3 px-4 rounded-xl w-full text-base">
              Log in
            </button>
            <button class="bg-white hover:bg-red-200 border-2 border-red-500 duration-300 text-red-500 font-bold rounded-xl py-3 px-4 w-full text-base my-2">
              Sign up
            </button>
          </div>
          <div className="py-2 px-4 bg-white border-[1px] border-gray-300 flex items-center gap-1 hover:text-red-600 duration-300 my-3 text-lg cursor-pointer">
            <img src="icons/reciept.svg" className="w-6" alt="" />
            <p className="font-semibold">Order status</p>
          </div>
          <div className="py-2 bg-white border-[1px] border-gray-300 my-3 text-lg cursor-pointer">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-3  hover:text-red-600 duration-300 ">
                <img src="icons/reciept.svg" className="w-6" alt="" />
                <p className="font-semibold">My Nintendo</p>
              </div>
              <img src="icons/upload.svg" className="w-6" alt="" />
            </div>
            <hr />
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-3  hover:text-red-600 duration-300">
                <img src="icons/flagg.svg" className="w-6" alt="" />
                <p className="font-semibold">Redeem code</p>
              </div>
              <img src="icons/upload.svg" className="w-6" alt="" />
            </div>
            <hr />
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-3  hover:text-red-600 duration-300">
                <img src="icons/settings.svg" className="w-6" alt="" />
                <p className="font-semibold">Account settings</p>
              </div>
              <img src="icons/upload.svg" className="w-6" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function PlayMode() {
  return (
    <div>
      <div className="xl:w-7/12 w-full m-auto mb-10 xl:p-0 p-4">
        <div className="flex xl:flex-nowraprap lg:flex-nowrap flex-wrap gap-5">
          <div className="rounded-[5px] py-8 px-10 bg-gray-100 lg:w-6/12 w-full">
            <p className="font-semibold text-primary mb-4 text-center">
              ESRB rating
            </p>
            <div className="shadow-lg bg-white py-5 px-8 flex items-center gap-2 text-primary rounded-[10px]">
              <img
                src="https://shadowindali.github.io/Nintendo/esrbrating.png"
                className="w-10"
                alt=""
              />
              <div>
                <p className="md:text-xs text-[10px]">
                  Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                  Gambling, Mild Language, Mild Blood
                </p>
                <div className="my-1 w-full border-[1px] border-black"></div>
                <p className="md:text-sm text-xs">Users Interact</p>
              </div>
            </div>
          </div>
          <div className="rounded-[5px] py-8 px-10 bg-gray-100 lg:w-6/12 w-full">
            <p className="font-semibold text-primary mb-4 text-center">
              Supported play modes
            </p>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col gap-4 justify-center items-center ">
                <div className="rounded-[10px] md:w-32 w-20 h-20 bg-primary flex justify-center items-center ">
                    <img 
                      className="w-14"
                      src="https://shadowindali.github.io/Nintendo/tv.png"
                      alt=""
                    />
                </div>
                <p className="font-semibold text-primary">TV</p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center ">
                <div className="rounded-[10px] md:w-32 w-20 h-20 bg-primary flex justify-center items-center">
                    <img 
                      className="w-14"
                      src="https://shadowindali.github.io/Nintendo/tabletop.png"
                      alt=""
                    />
                </div>
                <p className="font-semibold text-primary">Tabletop</p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center ">
                <div className="md:w-32 w-20 h-20 rounded-[10px] bg-primary flex justify-center items-center">
                    <img 
                      className="w-14"
                      src="https://shadowindali.github.io/Nintendo/handheld.png"
                      alt=""
                    />
                </div>
                <p className="font-semibold text-primary">Handheld</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

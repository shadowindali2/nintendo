import React from "react";
import { games } from "../data.jsx";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


export default function Games() {
  const handleNext = () => {
    sliderRef.slickNext();
  };

  const handlePrev = () => {
    sliderRef.slickPrev();
  };

  let sliderRef;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className="z-10">
      <div className="xl:w-7/12 w-full m-auto mb-10 xl:p-0 p-4 relative">
        <h1 className="text-primary mb-12 font-bold text-2xl">
          More like this
        </h1>
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {games.map((val, index) => {
            const oldPrice = ((val.price * val.discounnt) / 100).toFixed(2);
            return (
              <>
                <div
                  key={index}
                  className="rounded-md border-[1px] md:mx-3 mx-1 overflow-hidden  group cursor-pointer z-10"
                >
                  <div className="group-hover:-translate-y-3 duration-200 z-20">
                    <img
                      src={val.image}
                      className="w-full rounded-t-md group-hover:-translate-y-3 duration-200 z-20"
                      alt=""
                    />
                  </div>
                  <div className="p-3 text-primary flex flex-col justify-between gap-2 h-48">
                    <div>
                      <p className="font-semibold group-hover:text-secondary duration-200">{val.name}</p>
                      <span className="text-xs text-gray-500 mb-10">
                        {val.date}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        className={`rounded-[20px] max-w-32 text-xs font-bold text-center px-2 py-1  bg-secondary text-white ${
                          val.isSale ? "" : "hidden"
                        }`}
                      >
                        Sales ends: {val.sale} days
                      </button>
                      <button
                        className={`rounded-[20px] w-20 text-xs font-bold  text-center px-2 py-1 bg-blue-700 text-white ${
                          val.isDemo ? "" : "hidden"
                        }`}
                      >
                        Free demo
                      </button>
                      <p className="font-bold flex gap-x-3 items-center">
                        {val.isSale ? (
                          <>
                            ${val.price}
                            <span className="line-through text-xs font-normal">
                              ${oldPrice}
                            </span>
                            <span className="discount-label p-2">
                              -{val.discounnt}%
                            </span>
                          </>
                        ) : (
                          `$${val.price}`
                        )}
                      </p>
                      <div className="flex justify-between items-center gap-2">
                        <p className="md:text-balance text-xs">
                          <span className="font-semibold text-secondary">
                            |{" "}
                          </span>
                          Nintendo Switch
                        </p>
                        <FaRegHeart className="text-secondary text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <button
          className=" md:w-16 w-14 md:h-96 md:block hidden h-80 text-center absolute lg:top-14 top-20 xl:left-[-30px] left-[-0px] bg-primary opacity-55 rounded-lg text-5xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:text-6xl hover:text-white"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        <button
          className="md:w-16 w-14 md:h-96 h-80 text-center md:block hidden absolute lg:top-14 top-20  xl:right-[-30px] right-[0px] bg-primary opacity-55 rounded-lg text-5xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:text-6xl hover:text-white"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
        <div className="md:my-24 my-12">
          <p className="text-xs my-4 text-gray-500">
            WARNING: If you have epilepsy or have had seizures or other unusual
            reactions to flashing lights or patterns, consult a doctor before
            playing video games. All users should read the Health and Safety
            Information available in the system settings before using this
            software.
          </p>
          <p className="text-xs my-4 text-gray-500">
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            nintendo.com/switch-online
          </p>
          <p className="text-xs my-4 text-gray-500" text-gray-500>
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

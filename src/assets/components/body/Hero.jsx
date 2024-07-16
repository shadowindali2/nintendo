import React, { useState } from "react";
import { heroImg } from "../data.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "animate.css";
import ModalPic from "./ModalPic";
import { FaRegHeart } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import "./games.css"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Hero() {
  const [mainImage, setMainImage] = useState(
    "https://shadowindali.github.io/Nintendo/main1.avif"
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageClick = (image, index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setMainImage(image);
      setSelectedImageIndex(index);
      setIsAnimating(false);
    }, 550);
  };
  const handleNext = () => {
    sliderRef2.slickNext();
  };

  const handlePrev = () => {
    sliderRef2.slickPrev();
  };

  let sliderRef2;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#D6F0FA]">
      <div className="xl:max-w-[1180px] md:translate-y-8 translate-y-0  m-auto md:px-10 px-4 py-6 md:rounded-[20px] bg-white shadow-md ">
        <div className="flex items-center gap-2 text-xs ">
          <a href="#" className="text-gray-400 font-semibold">
            Store
          </a>
          <p className="text-gray-300 font-semibold">{">"}</p>
          <a href="#" className="text-gray-400 font-semibold">
            Games
          </a>
          <p className="text-gray-300 font-semibold">{">"}</p>
          <p className="text-gray-500 font-semibold">Stardew Valley</p>
        </div>

        <div className="flex xl:flex-nowrap lg:flex-nowrap  gap-x-4 w-full my-4 md:flex-nowrap flex-wrap ">
          <div className="md:w-7/12 w-full">
            <div className="rounded- w-full overflow-hidden  mb-4">
              <img
                src={mainImage}
                className={`w-full rounded-[20px] fade-in-25 duration-200 ${
                  isAnimating ? "animate__animated animate__backOutRight" : ""
                }`}
                alt=""
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            <div className="relative group duration-200">
              <Slider ref={(slider) => (sliderRef2 = slider)} {...settings}>
                {heroImg.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-[20px] px-2 opacity-70 hover:opacity-100 cursor-pointer duration-200 ${
                        selectedImageIndex === index ? "" : ""
                      }`}
                      onClick={() => handleImageClick(val.image, index)}
                    >
                      <img
                        src={val.image}
                        className="w-full rounded-[5px]"
                        alt=""
                      />
                    </div>
                  );
                })}
              </Slider>
              <button
                className=" hidden group-hover:flex w-12 h-full leading-12  items-center justify-center text-center absolute top-0 left-[-10px] bg-primary opacity-55 rounded-lg text-4xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:scale-110 hover:text-white"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>
              <button
                className=" hidden group-hover:flex w-12 h-full leading-12 items-center justify-center text-center absolute top-0 right-[-10px] bg-primary opacity-55 rounded-lg text-4xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:scale-110 hover:text-white"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="my-4 md:flex hidden items-center gap-2 text-primary">
              <img
                src="https://shadowindali.github.io/Nintendo/esrbrating.png"
                className="w-12"
                alt=""
              />
              <div>
                <p className="text-xs w-8/12">
                  Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                  Gambling, Mild Language, Mild Blood
                </p>
                <div className="my-1 w-8/12 border-[1px] border-gray-400"></div>
                <p className="text-sm">Users Interact</p>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 w-full md:p-6 p-2">
            <p className="text-gray-400 md:mb-8 mb-4">
              <span className="text-secondary font-bold">| </span> Nintendo
              Switch
            </p>
            <p className="text-primary font-semibold md:text-3xl text-2xl md:mb-8 mb-4">
              Stardew Valley
            </p>
            <div className="flex items-center justify-between">
              <p className="text-primary font-semibold md:text-3xl text-2xl ">$14.99</p>
              <svg
              className="heart-spark md:w-12 w-10 duration-200 text-secondary"
              viewBox="0 0 54 54"
              fill="currentColor"
              stroke="currentColor"
              role="presentation"
            >
              <g className="hearts">
                <path
                  className="heart heart-outline"
                  d="M27,38.9c-0.4,0-0.6-0.1-0.8-0.4L16.7,29c-1.8-1.8-2.7-3.8-2.7-6c0-4.4,3.5-8,7.9-8c1.9,0,3.7,0.8,5.1,2.3c1.4-1.4,3.2-2.3,5.1-2.3c4.4,0,7.9,3.6,7.9,8c0,2.6-1.5,4.6-2.7,6.1l-9.5,9.4C27.6,38.8,27.2,38.9,27,38.9z M21.9,17.5c-3.1,0-5.6,2.5-5.6,5.6c0,1.9,1.1,3.3,2,4.3l8.6,8.7l8.5-8.6c1.4-1.5,2.1-3,2.1-4.4c0-3.1-2.5-5.6-5.6-5.6c-1.5,0-3,1-4.1,2.5c-0.5,0.6-1.4,0.6-1.9,0C24.9,18.4,23.5,17.5,21.9,17.5z"
                ></path>
              </g>
              <g className="sparks">
                <path
                  className="spark a"
                  d="M 27 8 L 27 0"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  d="M 27 46 L 27 54"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(0.7071 0.7071 -0.7071 0.7071 19.9584 -28.1838)"
                  d="M 44 14 L 44 6"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 24.1421 10)"
                  d="M 10 6 L 10 14"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(4.547455e-11 1 -1 4.547455e-11 77 -23)"
                  d="M 50 31 L 50 23"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(-9.049490e-11 1 -1 -9.049490e-11 31 23)"
                  d="M 4 23 L 4 31"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 106.2254 44)"
                  d="M 44 48 L 44 40"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(0.7071 0.7071 -0.7071 0.7071 34.0416 5.8162)"
                  d="M 10 40 L 10 48"
                  strokeWidth="2"
                ></path>
              </g>
            </svg>
            </div>
            <div className="flex gap-2 items-center mt-8 md:mb-8 mb-4">
              <img
                src="https://shadowindali.github.io/Nintendo/coin.avif"
                className="w-6"
                alt=""
              />
              <p className="text-xs text-gray-400 my">
                Eligible for up to 75 Gold Points
              </p>
            </div>
            <a
              href="#"
              className="my-5 w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`my-2 py-3 px-6 rounded-[10px] flex items-center justify-center gap-3 text-center bg-secondary text-white md:text-xl font-bold duration-1200 ${
                  isHovered
                    ? "animate__animated animate__bounceIn"
                    : "hover:bg-red-800"
                }`}
              >
                <span>
                  <RiDownload2Line className="text-white text-2xl" />
                </span>
                Direct download
              </div>
            </a>
            <p className="text-xs text-gray-400 my-4">
              This item will be sent to your system automatically after
              purchase.
            </p>
          </div>
        </div>
      </div>
      <div className={` ${isModalOpen ? "" : "hidden "}`}>
        <ModalPic setIsModalOpen={setIsModalOpen} modal={isModalOpen} />
      </div>
    </div>
  );
}

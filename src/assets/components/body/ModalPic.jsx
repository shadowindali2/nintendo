import React, { useState } from "react";
import { heroImg } from "../data.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "animate.css";
export default function ModalPic({setIsModalOpen, modal}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [mainImages, setMainImages] = useState("https://shadowindali.github.io/Nintendo/main1.avif");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (image, index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setMainImages(image);
      setSelectedImageIndex(index);
      setIsAnimating(false);
    }, 550);
  };
  const handleNext = () => {
    sliderRef3.slickNext();
  };

  const handlePrev = () => {
    sliderRef3.slickPrev();
  };

  let sliderRef3;

  const settingsModal = {
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
    <div className="fixed animate__animated animate__fadeIn top-0 left-0 w-full h-full bg-gray-500 z-50">
      <div className=" md:w-7/12 w-full md:p-0 p-4  h-auto m-auto overflow-hidden">
      <div className="flex justify-end mt-8 mb-2" onClick={()=> setIsModalOpen(!modal)}>
      <div className=" text-white  w-10 h-10 leading-10 font-bold cursor-pointer rounded-full bg-gray-700 text-2xl text-center">X</div>
      </div>
        <img
          src={mainImages}
          className={`w-full rounded-[20px] fade-in-25 duration-200 ${
            isAnimating ? "animate__animated animate__backOutRight" : ""
          }`}
          alt=""
        />
        <div className="relative group duration-200 my-4">
          <Slider ref={(slider) => (sliderRef3 = slider)} {...settingsModal}>
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
            className=" hidden group-hover:flex w-14 h-full leading-12  items-center justify-center text-center absolute top-0 left-[-10px] bg-primary opacity-55 rounded-lg text-4xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:scale-110 hover:text-white"
            onClick={handlePrev}
          >
            {"<"}
          </button>
          <button
            className=" hidden group-hover:flex w-14 h-full leading-12 items-center justify-center text-center absolute top-0 right-[-10px] bg-primary opacity-55 rounded-lg text-4xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:scale-110 hover:text-white"
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

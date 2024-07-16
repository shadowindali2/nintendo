import React, { useState } from "react";

export default function Button({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button>
        <a
          href="#"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="my-5 hover:bg-secondary duration-200"
        >
          <div
            className={` my-2 md:py-3 md:px-6 p-2 rounded-[10px] text-center bg-secondary hover:bg-red-800 text-white font-semibold duration-1000  ${
              isHovered
                ? "animate__animated animate__bounceIn"
                : "hover:bg-red-800"
            }`}
          >
            {data}
          </div>
        </a>
      </button>
    </div>
  );
}

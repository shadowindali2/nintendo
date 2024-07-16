import React from "react";
import { FaTruck } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";

export default function SubNav() {
  return (
    <div className="py-3 bg-gray-100 w-12/12 z-40">
      <div className="flex justify-center items-center gap-2">
        <FaTruck className="text-red-600 text-xl md:block hidden" />
        <p>
          <span className="font-bold text-primary md:text-balance text-xs">Free shipping </span>on orders $50 or
          more. <a href="#" className="underline">Restricions apply</a>
        </p>
        <span className="lg:block hidden">|</span>
        <SiSololearn className="text-red-600 text-xl lg:block hidden" />
        <p className="lg:block hidden">
          Earn{" "}
          <a href="#" className="font-bold text-primary">
            My Nintendo Points
          </a>{" "}
          on digital games
        </p>
      </div>
    </div>
  );
}

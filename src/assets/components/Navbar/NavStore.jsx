import React from "react";

export default function NavStore({ show, setShow }) {
  const navItems = {
    Game: [
      {
        photo: "https://shadowindali.github.io/Nintendo/nintendo-switch.png",
        text: "Nintendo Switch games",
      },
      {
        photo: "https://shadowindali.github.io/Nintendo/megaphone.png",
        text: "New releases",
      },
      {
        photo: "https://shadowindali.github.io/Nintendo/calendar.png",
        text: "Coming soon",
      },
      {
        photo: "https://shadowindali.github.io/Nintendo/gamepadicon.png",
        text: "Shop games",
      },
    ],
    NintindoSwitch: [
      {
        photo: "https://shadowindali.github.io/Nintendo/exchange.png",
        text: "Compare systems",
      },
      {
        photo: "https://shadowindali.github.io/Nintendo/boxart.avif",
        text: "Online service",
      },
      {
        photo: "https://shadowindali.github.io/Nintendo/procon.avif",
        text: "Accessories",
      },
      {
        photo: "https://shadowindali.github.io/Nintendo/oled.avif",
        text: "Shop Systems",
      },
    ],
    PlatNin: [
      {
        photo: "https://shadowindali.github.io/Nintendo/emotions.png",
        text: `For kids`,
      },
      {
        photo: "https://shadowindali.github.io/Nintendo/smile.png",
        text: "For Parents",
      },
    ],
  };

  let selected = null;

  if (show.isGameOpen) {
    selected = navItems.Game;
  } else if (show.isSwitchOpen) {
    selected = navItems.NintindoSwitch;
  } else if (show.isPlayNintendoOpen) {
    selected = navItems.PlatNin;
  }

  return (
    <div
      className={`bg-white fixed flex justify-center items-center p-8 gap-8  z-40 left-0 w-full duration-100 ${
        selected ? "h-40 top-24" : "h-0 -top-24"
      }`}
    >
       <div onClick={()=>setShow(!show)} className="absolute top-0 right-4 rounded-full bg-gray-400 text-white font-bold w-8 h-8 text-center text-xl cursor-pointer">
          X
        </div> 
      {selected &&
        selected.map((item, index) => (
          <div className="flex flex-col gap-2 " key={index}>
            <div className="border-[1px] py-2 px-6 rounded-[10px] hover:bg-secondary duration-300 cursor-pointer border-gray-300 flex justify-center items-center">
              <img src={item.photo} alt={item.text} className="w-14 h-14" />
            </div>
            <p className="text-center text-sm text-gray-400">{item.text}</p>
          </div>
        ))}
    </div>
  );
}

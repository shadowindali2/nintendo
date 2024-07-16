import React, { useState } from "react";
import Button from "./Button";

export default function Explore() {
  const [read, setRead] = useState(false);
  return (
    <div>
      <div className="xl:w-7/12 lg:w-full w-full m-auto flex md:flex-row flex-col gap-4 md:py-24 py-12 px-4">
        <div className="md:w-6/12 w-full">
          <h2 className="md:text-xl text-lg text-primary font-bold my-4">
            You're moving to the valley...
          </h2>
          <p className="mb-3 text-primary md:text-balance text-sm">
            You’ve inherited your grandfather’s old farm plot in Stardew Valley.
            Armed with hand-me-down tools and a few coins, you set out to begin
            your new life. Can you learn to live off the land and turn these
            overgrown fields into a thriving home? It won’t be easy. Ever since
            Joja Corporation came to town, the old ways of life have all but
            disappeared. The community center, once the town’s most vibrant hub
            of activity, now lies in shambles. But the valley seems full of
            opportunity. With a little dedication, you might just be the one to
            restore Stardew Valley to greatness!
          </p>
          <p className={`${read ? "block" : "hidden"} mb-3 text-primary`}>
            Now with Multiplayer! Invite 1-3 players to join you in the valley!
            Players can work together to build a thriving farm, share resources,
            and build relationships with townspeople or each other. As more
            hands are better than one, players have the option to scale profit
            margin on produce sold for a more challenging experience.
          </p>

          <div
            className="font-bold text-secondary mb-3 duration-200 cursor-pointer w-full content-center items-center"
            onClick={() => setRead(!read)}
          >
            {read ? (
              <span className="text-2xl font-bold w-8">-</span>
            ) : (
              <span className="text-2xl font-bold w-8">+</span>
            )}{" "}
            Read {read ? "less" : "more"}
          </div>
          <span className="my-3 text-xs text-gray-500">
            Software description provided by the publisher.
          </span>
          <Button data="Explore this game's official website" />
        </div>
        <div className="md:w-6/12 w-full my-4">
          <div className="rounded-[20px]">
            <img
              src="https://shadowindali.github.io/Nintendo/main1.avif"
              className="w-full rounded-[20px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

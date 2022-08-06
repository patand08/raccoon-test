import React, { useEffect, useState } from "react";

export default (props) => {
  const [bgColor, setBgColor] = useState("bg-[#B91C1C]");
  const colors = [
    "bg-[#B91C1C]",
    "bg-[#15803D]",
    "bg-[#075985]",
    "bg-[#581C87]",
    "bg-[#B45309]",
    "bg-[#3B82F6]",
  ];

  const randomizeBg = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  useEffect(() => {
    setBgColor(randomizeBg(colors));
  }, []);

  return (
    <div className={"container h-[150px] " + bgColor}>
      <div className="grid grid-cols-3 gap-3 p-3 items-center justify-left ">
        <div className="flex-grow order-1 items-center ">
          <img
            className="object-contain h-[126px] w-[126px]"
            src={props.img}
            alt={props.title}
          />
        </div>
        <div className="order-2 col-span-2 h-[126px] justify-left text-ellipsis overflow-hidden">
          <h2 className="truncate  text-xl font-bold leading-snug text-white">
            {props.title}
          </h2>
          <p className=" pt-1 text-white">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

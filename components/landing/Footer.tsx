import React from "react";

export function Footer() {
  return (
    <div className=" relative mt-[20px] flex w-full flex-row items-center justify-center gap-[10px] md:mt-[35px] md:gap-[15px] md:pt-[5px]">
      <span>MADE WITH</span>
      <a
        href={`https://create.zora.co/`}
        className="relative h-[26px] w-[26px] overflow-visible md:h-[32px] md:w-[32px]"
      >
        <svg
          width="33"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          className="absolute inset-0 h-full w-full overflow-visible object-cover"
          style={{ boxShadow: "0px -0px 10000px transparent" }}
        >
          <rect
            x="0.5"
            width="32"
            height="32"
            rx="16"
            fill="url(#zorb_svg__a)"
            className="absolute inset-0 h-full w-full object-cover"
          ></rect>
          <defs>
            <radialGradient
              id="zorb_svg__a"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(21.287 7.794) scale(24.093)"
            >
              <stop offset="0.156" stopColor="#DCC8D0"></stop>
              <stop offset="0.302" stopColor="#78C8CF"></stop>
              <stop offset="0.427" stopColor="#4D959E"></stop>
              <stop offset="0.557" stopColor="#305EB9"></stop>
              <stop offset="0.797" stopColor="#311F12"></stop>
              <stop offset="0.906" stopColor="#684232"></stop>
              <stop offset="1" stopColor="#2D1C13"></stop>
            </radialGradient>
          </defs>
        </svg>
      </a>
      <span>ON ETHEREUM</span>
    </div>
  );
}
import buttonMobile from "../../src/assets/icon-hamburger.svg";

import { useState } from "react";
import arrow from "../../src/assets/icon-chevron.svg";
function Header() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(buttonMobile);
  function show() {
    setActive(!active);
  }
  return (
    <div>
      <div className=" text-[white] text-[28px] tracking-[-1.05px] pl-[24px] pr-[24px] mt-[16px] flex justify-between">
        <h1>THE PLANETS </h1>
        <img
          className="w-[24px] h-[17px] mt-[15px]"
          src={buttonMobile}
          alt=""
        />
      </div>
      <div className="w-full h-[1px] bg-white  mt-[16px] opacity-[0.20000000298023224]"></div>
      <div className=" text-[#fff] opacity-[0.5] flex justify-between pl-[24px] pr-[24px] mt-[20px]  items-center">
        <button className="font-[700] tracking-[1.929px] font-[Spartan] text-[9px] ">
          OVERWIEV
        </button>
        <button className="tracking-[1.929px] font-[Spartan] text-[9px]">
          STRUCTURE
        </button>
        <button className="tracking-[1.929px] font-[Spartan] text-[9px]">
          SURFACE
        </button>
      </div>
      <div className="w-full h-[1px] bg-[#fff] mt-[17px] opacity-[0.20000000298023224]"></div>
    </div>
  );
}
export default Header;

import data from "../../data.json";
import React, { useState } from "react";
// import Venus from "../assets/planet-venus.svg";
import source from "../assets/icon-source.svg";

function Planets() {
  const [active, setActive] = useState("overview");
  const object = data[1];

  return (
    <div>
      <div className=" text-[#fff] opacity-[0.5] flex justify-between pl-[24px] pr-[24px] mt-[20px]  items-center md:hidden">
        <button
          onClick={() => setActive("overview")}
          className={`font-[700] tracking-[1.929px] font-[Spartan] text-[9px] ${
            active === "overview" ? "border-b-4" : null
          }
          `}
        >
          OVERWIEV
        </button>
        <button
          onClick={() => setActive("structure")}
          className="tracking-[1.929px] font-[Spartan] text-[9px]"
        >
          STRUCTURE
        </button>
        <button
          onClick={() => setActive("surface")}
          className="tracking-[1.929px] font-[Spartan] text-[9px]"
        >
          SURFACE
        </button>
      </div>

      <div className="w-full h-[1px] bg-[#fff] md:hidden mt-[17px] opacity-[0.20000000298023224]"></div>
      <div className="flex justify-center mt-[74px]">
        <img
          className=" w-[143px] h-[154px] relative md:w-[184px] md:h-[184px]  "
          src={
            active === "overview"
              ? object.images.planet
              : active === "structure"
              ? object.images.internal
              : active === "surface"
              ? object.images.planet
              : null
          }
          alt=""
        />
        <img
          className=" w-[80px] h-[98px] absolute mt-24 hidden"
          src={active === "surface" ? object.images.geology : null}
          alt=""
        />
      </div>
      <div className=" md:flex ">
        <div className=" text-white text-[40px] mt-[76px] flex items-center justify-center md:text-[48px] ">
          {object.name}
        </div>

        <div className=" text-white text-[11px]  items-center flex   text-center  justify-center font-[Spartan] ">
          <h1 className=" p-[24px]">
            {active === "overview"
              ? object.overview.content
              : active === "structure"
              ? object.structure.content
              : object.geology.content}
          </h1>
        </div>
      </div>
      <div className=" flex flex-row-reverse justify-center items-center text-center">
        <a
          className="flex text-textrgba font-[700] justify-center underline ml-1 "
          href={object.overview.source}
          target="_blank"
        >
          Wikipedia
          <img className=" w-3 h-3 mt-2 ml-1" src={source} alt="" />
        </a>

        <h1 className="text-textrgba font-[400]">Source : </h1>
      </div>
      <div className=" text-white flex flex-col justify-center mt-[28px] items-center pb-12 md:flex-row md:gap-3  ">
        <div className=" w-[327px] h-[48px] flex justify-between items-center border border-whitergba p-[24px]  md:w-[164px] md:h-[88px] md:flex-col ">
          <p className=" text-textrgba text-[8px] font-[Spartan] tracking-[0.8px]  leading-4">
            ROTATION TIME
          </p>
          <h1>{object.rotation}</h1>
        </div>
        <div className=" w-[327px] h-[48px] flex mt-2 justify-between items-center p-[24px] border border-whitergba md:w-[164px] md:h-[88px] md:flex-col">
          <p className=" text-textrgba text-[8px] font-[Spartan] tracking-[0.8px]  leading-4">
            REVOLUTION TIME{" "}
          </p>
          <h2>{object.revolution}</h2>
        </div>
        <div className=" w-[327px] h-[48px] mt-2 justify-between items-center flex p-[24px] border border-whitergba md:w-[164px] md:h-[88px] md:flex-col">
          <p className=" text-textrgba text-[8px] font-[Spartan] tracking-[0.8px]  leading-4">
            RADIUS
          </p>
          <h3>{object.radius}</h3>
        </div>
        <div className=" w-[327px] h-[48px] mt-2 flex justify-between items-center p-[24px] border border-whitergba md:w-[164px] md:h-[88px] md:flex-col">
          <p className=" text-textrgba text-[8px] font-[Spartan] tracking-[0.8px]  leading-4">
            AVERAGE TEMP
          </p>
          <h3> {object.temperature}</h3>
        </div>
      </div>
    </div>
  );
}

export default Planets;

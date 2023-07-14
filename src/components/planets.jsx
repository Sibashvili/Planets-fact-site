import data from "../../data.json";
import React, { useState } from "react";
// import Venus from "../assets/planet-venus.svg";
import source from "../assets/icon-source.svg";
import { useParams } from "react-router-dom";

function Planets() {
  const [active, setActive] = useState("overview");

  const { name } = useParams();
  const object = data.find(
    (el) => el.name.toLowerCase() === name.toLowerCase()
  );

  const underlineStyle = {
    height: "4px",
    marginTop: "17px",

    backgroundColor: object.color,
  };
  return (
    <div>
      <div className=" text-[#fff] opacity-[0.5] flex justify-between pl-[24px] pr-[24px] mt-[20px]  items-center md:hidden">
        <button
          style={{
            borderBottom:
              active === "overview"
                ? `4px solid ${object.color}`
                : "transparent",
            width: "80px",
            height: "40px",
          }}
          onClick={() => setActive("overview")}
          className={`font-[700] tracking-[1.929px] font-spartan text-[9px] w-20 ${
            active === "overview" ? " text-red-600" : object.color
          }}
          `}
        >
          OVERWIEV
        </button>
        <button
          style={{
            borderBottom:
              active === "structure"
                ? `4px solid ${object.color}`
                : "transparent",
            width: "80px",
            height: "40px",
          }}
          onClick={() => setActive("structure")}
          className="tracking-[1.929px] font-spartan text-[9px]"
        >
          STRUCTURE
        </button>
        <button
          style={{
            borderBottom:
              active === "surface"
                ? `4px solid ${object.color}`
                : "transparent",
            width: "80px",
            height: "40px",
          }}
          onClick={() => setActive("surface")}
          className="tracking-[1.929px] font-spartan text-[9px]"
        >
          SURFACE
        </button>
      </div>

      <div className="w-full h-[1px] bg-[#fff] md:hidden opacity-[0.20000000298023224]"></div>
      <div className=" lg:flex lg:justify-around ">
        <div className="flex justify-center mt-[74px] relative">
          <img
            className=" w-[143px] h-[154px] relative md:w-[184px] md:h-[184px] lg:w-[450px] lg:h-[450px] lg:flex "
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
          {active === "surface" ? (
            <img
              className=" w-[80px] h-[98px] absolute mt-24 lg:w-40 lg:h-48 md:mt-[134px] lg:mt-[360px]"
              src={object.images.geology}
              alt=""
            />
          ) : null}
        </div>
        <div className="md:flex md:justify-between items-center lg:flex-col">
          <div className=" md:flex md:flex-col md:w-[339px]">
            <div className=" md:w-[339px] md:pl-10">
              <div className=" text-white text-[40px] mt-[76px] flex items-center justify-center md:text-[48px] md:justify-start lg:text-[80px] font-antonio ">
                {object.name}
              </div>

              <div className=" text-white text-[11px]  items-center flex   text-center  justify-center font-spartan md:w-80 lg:text-[14px] ">
                <h1 className=" p-[24px] md:text-left md:p-0 md:mt-6">
                  {active === "overview"
                    ? object.overview.content
                    : active === "structure"
                    ? object.structure.content
                    : object.geology.content}
                </h1>
              </div>
            </div>
            <div className=" flex flex-row-reverse justify-center items-center text-center md:justify-end md:mt-8 ">
              <a
                className="flex text-textrgba font-[700] justify-center underline ml-1 md:ml-0 md:pl-10 "
                href={object.overview.source}
                target="_blank"
              >
                Source: Wikipedia
                <img className=" w-3 h-3 mt-2 ml-1" src={source} alt="" />
              </a>
            </div>
          </div>
          <div className=" max-sm:hidden md:flex md:flex-col md:pr-10 md:text-white lg:p-0 lg:mt-10">
            <div
              style={{
                backgroundColor:
                  active === "overview" ? `${object.color}` : "transparent",
              }}
              onClick={() => setActive("overview")}
              className={` md:w-[281px] md:h-[40px] border border-whitergba $`}
            >
              <button className="md:flex flex-row-reverse items-center font-spartan">
                {" "}
                OVERWIEV{" "}
                <h1 className="md:p-2 text-whitergba md:pl-5 md:pr-4">01</h1>
              </button>
            </div>
            <div
              style={{
                backgroundColor:
                  active === "structure" ? `${object.color}` : "transparent",
              }}
              onClick={() => setActive("structure")}
              className=" md:w-[281px] md:h-[40px] border border-whitergba md:mt-4 md:text-center"
            >
              <button className="md:flex flex-row-reverse items-center font-spartan">
                {" "}
                INTERNAL STRUCTURE{" "}
                <h1 className="md:p-2 md:pl-5 md:pr-4 text-whitergba">02</h1>
              </button>
            </div>
            <div
              style={{
                backgroundColor:
                  active === "surface" ? `${object.color}` : "transparent",
              }}
              onClick={() => setActive("surface")}
              className=" md:w-[281px] md:h-[40px] border border-whitergba md:mt-4"
            >
              <button className="md:flex flex-row-reverse items-center font-spartan ">
                SURFACE GEOLOGY{" "}
                <h1 className="md:p-2 md:pl-5 text-whitergba md:pr-4">03</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white flex flex-col justify-center mt-[28px] items-center pb-12 md:flex-row md:gap-3 lg:gap-[30px] lg:mt-20  ">
        <div className="w-[327px] h-[48px] flex mt-2 justify-between items-center p-[24px] border border-whitergba md:w-[164px] md:h-[88px] md:flex-col md:p-0 md:justify-center md:items-baseline md:pl-4 lg:w-[255px] lg:h-[128px] ">
          <p className=" text-textrgba text-[8px] font-spartan tracking-[0.8px]  leading-4 lg:text-[11px]">
            ROTATION TIME
          </p>
          <h1 className=" md:text-[24px] lg:text-[40px]">{object.rotation}</h1>
        </div>
        <div className=" w-[327px] h-[48px] flex mt-2 justify-between items-center p-[24px] border border-whitergba md:w-[164px] md:h-[88px] md:flex-col md:p-0 md:justify-center md:items-baseline md:pl-4 lg:w-[255px] lg:h-[128px]">
          <p className=" text-textrgba text-[8px] font-spartan tracking-[0.8px]  leading-4 lg:text-[11px]">
            REVOLUTION TIME{" "}
          </p>
          <h2 className=" md:text-[24px] lg:text-[40px]">
            {object.revolution}
          </h2>
        </div>
        <div className=" w-[327px] h-[48px] mt-2 justify-between items-center flex p-[24px] border border-whitergba md:w-[164px] md:h-[88px] md:flex-col md:p-0 md:justify-center md:items-baseline md:pl-4 lg:w-[255px] lg:h-[128px]">
          <p className=" text-textrgba text-[8px] font-spartan tracking-[0.8px]  leading-4 lg:text-[11px]">
            RADIUS
          </p>
          <h3 className=" md:text-[24px] lg:text-[40px]">{object.radius}</h3>
        </div>
        <div className=" w-[327px] h-[48px] mt-2 flex justify-between items-center p-[24px] border border-whitergba md:w-[164px] md:h-[88px] md:flex-col md:p-0 md:justify-center md:items-baseline md:pl-4 lg:w-[255px] lg:h-[128px] ">
          <p className=" text-textrgba text-[8px] font-spartan tracking-[0.8px]  leading-4 lg:text-[11px]">
            AVERAGE TEMP
          </p>
          <h3 className=" md:text-[24px] lg:text-[40px]">
            {" "}
            {object.temperature}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Planets;

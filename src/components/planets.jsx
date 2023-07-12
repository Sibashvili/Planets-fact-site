import data from "../../data.json";
import React from "react";
// import Venus from "../assets/planet-venus.svg";

function Planets() {
  const object = data[1];
  console.log(object);
  console.log(object.images.planet);
  return (
    <div>
      <div className="flex justify-center mt-[74px]">
        <img
          className=" w-[143px] h-[154px] "
          src={object.images.planet}
          alt=""
        />
      </div>
      <div className=" text-white text-[40px] mt-[76px] flex items-center justify-center ">
        {object.name}
      </div>

      <div className=" text-white text-[11px]  items-center flex   text-center  justify-center font-[Spartan] ">
        <h1 className=" p-[24px]">{object.overview.content}</h1>
      </div>
      <div>
        <h1 className=" text-white">{object.overview.source}</h1>
      </div>
      <div className=" text-white flex flex-col justify-center mt-[28px] items-center   ">
        <div className=" w-[327px] h-[48px] flex justify-between items-center border-2-[white] ">
          <p>ROTATION TIME</p>
          <h1>{object.rotation}</h1>
        </div>
        <div className=" w-[327px] h-[48px] flex mt-2 justify-between">
          <p>REVOLUTION TIME </p>
          <h2>{object.revolution}</h2>
        </div>
        <div className=" w-[327px] h-[48px] mt-2 justify-between flex">
          <p>RADIUS</p>
          <h3>{object.radius}</h3>
        </div>
        <div className=" w-[327px] h-[48px] mt- flex justify-between">
          <p>AVERAGE TEMP</p>
          <h3> {object.temperature}</h3>
        </div>
      </div>
    </div>
  );
}

export default Planets;

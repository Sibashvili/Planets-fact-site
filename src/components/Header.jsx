import buttonMobile from "../../src/assets/icon-hamburger.svg";
import data from "../../data.json";
import { useState } from "react";
import arrow from "../../src/assets/icon-chevron.svg";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(buttonMobile);

  function show() {
    setActive(!active);
  }

  return (
    <div>
      <div className=" lg:flex lg:justify-between md:items-center ">
        <div className=" text-[white] text-[28px] tracking-[-1.05px] pl-[24px] pr-[24px] mt-[16px] flex justify-between md:justify-center ">
          <h1 className=" md:mt-8 lg:mt-0">THE PLANETS </h1>
          <img
            onClick={show}
            className={`w-[24px] h-[17px] mt-[15px] md:hidden `}
            src={buttonMobile}
            alt=""
          />
        </div>
        <div className=" flex  gap-[33px] justify-center mt-10 font-spartan pl-12 pr-12 text-[#FFFFFF] max-sm:hidden  ">
          <Link to="/planets/mercury">MERCURY</Link>

          <Link to="/planets/venus">VENUS</Link>
          <Link to="/planets/earth">EARTH</Link>
          <Link to="/planets/mars">MARS</Link>
          <Link to="/planets/jupiter">JUPITER</Link>
          <Link to="/planets/saturn">SATURN</Link>
          <Link to="/planets/uranus">URANUS</Link>
          <Link to="/planets/neptune">NEPTUNE</Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white  mt-[16px] opacity-[0.20000000298023224] lg:mt-7"></div>

      {active && (
        <div className=" bg-[#070724] w-full h-full mt-5 md:hidden absolute overflow-hidden z-20">
          {data.map((planet) => {
            return (
              <div
                key={planet.name}
                className=" flex justify-between   pt-[46px]"
              >
                <div>
                  <div
                    className="flex    items-center pl-[24px]   "
                    key={planet.name}
                  >
                    <div
                      style={{ backgroundColor: planet.color }}
                      className="w-5 h-5 rounded-full     "
                    ></div>
                    <div>
                      <h1 className=" text-[#fff] pl-[24px] cursor-pointer">
                        {planet.name}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className=" mr-[32px] items-center flex cursor-pointer">
                  <img className="" src={arrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Header;

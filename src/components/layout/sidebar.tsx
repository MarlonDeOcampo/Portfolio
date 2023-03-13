import { useState } from "react";
import OrangeBlob from "../svg/blob-orange.icon";
import Toggle from "../svg/toggle";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      className={`flex justify-end bg-secondary h-screen h-[calc(100vh-5rem)] overlay  z-30 absolute ${
        expanded ? " w-[100vw]" : "w-[6rem]"
      }`}
    >
      {expanded ? (
        <div className="bg-primary w-full bg-[#e6e6e6] overflow-y-scroll px-10 pt-10">
          <div className="bg-white h-[80vh] overflow-hidden rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center h-[30vh]">
              <h1 className="text-[4rem] text-golden-brown font-[600]">
                Hi!, I am Marlon
              </h1>
              <p className="text-[2rem]">Welcome to my</p>
            </div>
            <div className="relative mt-[-2rem]">
              <div className="ml-[-5rem]">
                <OrangeBlob width="40rem" height="40rem" />
              </div>
              <div className="absolute top-[20px] left-[50px] ml-2 w-[20rem] h-[20rem] mt-10">
                <img src="images/mypic.png" alt="mypic" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={`flex flex-col justify-between items-center bg-primary h-screen w-[6rem] ${
          expanded ? "" : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center text-primary-yellow bg-[#2c2c2c] h-[5rem] w-full">
          <div className="text-[28px]">Marlon</div>
          <div className="mt-[-10px]">De Ocampo</div>
        </div>
        <div
          className="border border-secondary p-2 flex justify-center w-12 cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <Toggle width="1.5rem" height="1.5rem" color="#acacac" />
        </div>
        <div></div>
      </div>
    </aside>
  );
};

export default Sidebar;

import ComputerLogo from "../components/svg/computer.icon";

const Home = () => {
  return (
    <div className="flex h-screen h-[calc(100vh-5rem)] justify-center items-center flex-col w-full">
      <div className="w-full h-screen bg-main bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-stone-900/95 backdrop-brightness-95"
        >
          <span className="text-white text-4xl w-full text-center flex flex-row justify-between h-full">
            <div className="insetShadow-r border-r border-slate-900 w-1/3 h-full shadow-inner flex flex-col items-center justify-center">
              1
            </div>
            <div className="insetShadow border-r border-slate-900 w-1/3 h-full shadow-inner flex flex-col items-center">
              <div className="h-1/2 flex items-center">
                <ComputerLogo
                  width={"150px"}
                  height={"150px"}
                  color={"#ff652f"}
                />
              </div>
              <div className="h-1/2">
                <div className="shadow-orange font-bold text-slate-900 tracking-widest">
                  FRONTEND DEVELOPER
                </div>
                <div className="text-[18px] text-secondary">
                  With almost 2 years of Professional Experience in coding
                </div>
                <div className="text-primary-orange text-[24px] mt-20 border-solid border-dotted border-b-4 border-primary-orange h-20 mx-14">
                  <button>find more about me</button>
                </div>
              </div>
            </div>
            <div className="insetShadow-l border-r border-slate-900 w-1/3 h-full shadow-inner flex flex-col items-center justify-center">
              3
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Home;

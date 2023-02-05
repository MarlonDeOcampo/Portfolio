import ComputerLogo from "../components/svg/computer.icon";
import LanguageLogo from "../components/svg/language.icon";
import ProjectLogo from "../components/svg/project.icon";

const Home = () => {
  return (
    <div className="flex h-screen h-[calc(100vh-5rem)] justify-center items-center flex-col w-full">
      <div className="w-full h-screen bg-main bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-stone-900/95 backdrop-brightness-95"
        >
          <span className="text-white text-4xl w-full text-center flex flex-row justify-between h-full">
            <div className="insetShadow-r border-r border-slate-900 w-1/3 h-full shadow-inner flex flex-col items-center">
              <div className="h-3/6 flex items-center">
                <ProjectLogo
                  width={"120px"}
                  height={"120px"}
                  color={"#ffe400"}
                />
              </div>
              <div className="h-1/6">
                <div className="h-full flex flex-col justify-between">
                  <div className="h-1/3 shadow-yellow font-bold text-slate-900 tracking-widest ">
                    <div>PROJECTS</div>
                  </div>
                  <div className="h-1/3 text-[18px] text-secondary px-24">
                    See all the projects I have done since I have started doing
                    this job
                  </div>
                </div>
              </div>
              <div className="h-2/6 flex items-center">
                <div className="h-20 text-primary-yellow text-[24px] border-solid border-dotted border-b-4 border-primary-yellow mx-14 mb-14">
                  check this one out
                </div>
              </div>
            </div>
            <div className="insetShadow border-r border-slate-900 w-1/3 h-full shadow-inner flex flex-col items-center">
              <div className="h-3/6 flex items-center">
                <ComputerLogo
                  width={"150px"}
                  height={"150px"}
                  color={"#ff652f"}
                />
              </div>
              <div className="h-1/6">
                <div className="h-full flex flex-col justify-between">
                  <div className="h-1/3 shadow-orange font-bold text-slate-900 tracking-widest ">
                    <div>FRONTEND</div>
                    <div>DEVELOPER</div>
                  </div>
                  <div className="h-1/3 text-[18px] text-secondary px-24">
                    With almost 2 years of Professional Experience in coding
                  </div>
                </div>
              </div>
              <div className="h-2/6 flex items-center">
                <div className="h-20 text-primary-orange text-[24px] border-solid border-dotted border-b-4 border-primary-orange mx-14 mb-14">
                  find more about me
                </div>
              </div>
            </div>
            <div className="insetShadow-l border-r border-slate-900 w-1/3 h-full shadow-inner flex flex-col items-center justify-center">
              <div className="h-3/6 flex items-center">
                <LanguageLogo
                  width={"120px"}
                  height={"120px"}
                  color={"#00ff99"}
                />
              </div>
              <div className="h-1/6">
                <div className="h-full flex flex-col justify-between">
                  <div className="h-1/3 shadow-green font-bold text-slate-900 tracking-widest ">
                    <div>LANGUAGES</div>
                    <div>I SPEAK</div>
                  </div>
                  <div className="h-1/3 text-[18px] text-secondary px-24">
                    Check all the tech stack I have encountered so far
                  </div>
                </div>
              </div>
              <div className="h-2/6 flex items-center">
                <div className="h-20 text-primary-green text-[24px] border-solid border-dotted border-b-4 border-primary-green mx-14 mb-14">
                  See how Fluent I am
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Home;

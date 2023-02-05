import { useState } from "react";
import MainCard from "../components/reusable/main-card";
import ComputerLogo from "../components/svg/computer.icon";
import LanguageLogo from "../components/svg/language.icon";
import ProjectLogo from "../components/svg/project.icon";

const Home = () => {
  const [cardState, setCardState] = useState({
    left: false,
    mid: false,
    right: false,
  });

  function mouseLeft(val: string) {
    setCardState({
      left: false,
      mid: false,
      right: false,
    });
  }
  function mouseEntered(val: string) {
    getState(val);
  }

  function getState(val: string) {
    switch (val) {
      case "left":
        setCardState({
          left: true,
          mid: false,
          right: false,
        });
        break;
      case "mid":
        setCardState({
          left: false,
          mid: true,
          right: false,
        });
        break;
      case "right":
        setCardState({
          left: false,
          mid: false,
          right: true,
        });
        break;
      default:
        setCardState({
          left: false,
          mid: false,
          right: false,
        });
    }
  }

  const data = {
    leftCard: {},
  };

  return (
    <div className="flex h-screen h-[calc(100vh-5rem)] justify-center items-center flex-col w-full">
      <div className="w-full h-screen bg-main bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-stone-900/95 backdrop-brightness-95"
        >
          <span className="text-white text-4xl w-full text-center flex flex-row justify-between h-full">
            {/* left */}
            <MainCard
              cardState={cardState}
              setCardState={setCardState}
              data={{
                title: {
                  first: "PROJECTS",
                  second: "",
                  color: "yellow",
                },
                message:
                  "See all the projects I have done since I started doing this job",
                link: "check this one out",
                position: "left",
              }}
              logo={
                <ProjectLogo
                  width={"120px"}
                  height={"120px"}
                  color={"#ffe400"}
                />
              }
            />

            {/* mid */}
            <MainCard
              cardState={cardState}
              setCardState={setCardState}
              data={{
                title: {
                  first: "FRONTEND",
                  second: "DEVELOPER",
                  color: "orange",
                },
                message:
                  "With almost 2 years of Professional Experience in coding",
                link: "find more about me",
                position: "mid",
              }}
              logo={
                <ComputerLogo
                  width={"150px"}
                  height={"150px"}
                  color={"#ff652f"}
                />
              }
            />
            {/* right */}
            <MainCard
              cardState={cardState}
              setCardState={setCardState}
              data={{
                title: {
                  first: "LANGUAGES",
                  second: "I SPEAK",
                  color: "green",
                },
                message: "Check all the tech stack I have encountered so far",
                link: "see how fluent I am",
                position: "right",
              }}
              logo={
                <LanguageLogo
                  width={"120px"}
                  height={"120px"}
                  color={"#00ff99"}
                />
              }
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Home;

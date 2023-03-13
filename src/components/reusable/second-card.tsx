import { ReactNode } from "react";
import ComputerLogo from "../svg/computer.icon";
import LanguageLogo from "../svg/language.icon";
import ProjectLogo from "../svg/project.icon";

interface Props {
  data: {
    title: {
      first: string;
      second: string;
      color: string;
    };
    message: string;
    link: string;
    position: string;
  };
}

const SecondCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-1/3 h-full flex flex-col items-center justify-center cursor-pointer">
      <div className="h-3/6 flex items-center">
        {data.position === "left" ? (
          <ProjectLogo width={"120px"} height={"120px"} color={"#000000"} />
        ) : null}
        {data.position === "mid" ? (
          <ComputerLogo width={"150px"} height={"150px"} color={"#000000"} />
        ) : null}
        {data.position === "right" ? (
          <LanguageLogo width={"120px"} height={"120px"} color={"#000000"} />
        ) : null}
      </div>
      <div className="h-1/6">
        <div className="h-full flex flex-col justify-between">
          <div
            className={`h-1/3 font-bold tracking-widest shadow-slate ${
              data.position === "left"
                ? "text-primary-yellow"
                : data.position === "mid"
                ? "text-primary-orange"
                : data.position === "right"
                ? "text-primary-green"
                : null
            }`}
          >
            <div>{data.title.first}</div>
            <div>{data.title.second}</div>
          </div>
          <div className="h-1/3 text-[18px] text-secondary w-full">
            {data.message}
          </div>
        </div>
      </div>
      <div className="h-2/6 flex items-center">
        <div
          className={`h-20 text-black whitespace-nowrap font-bold
          text-[24px] border-solid border-dotted border-b-4 border-black mx-14 mb-14`}
        >
          {data.link}
        </div>
      </div>
    </div>
  );
};

export default SecondCard;

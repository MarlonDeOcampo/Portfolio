import { ReactNode } from "react";
import SecondCard from "./second-card";

interface State {
  left: boolean;
  mid: boolean;
  right: boolean;
}

interface Props {
  cardState: State;
  logo: ReactNode;
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
  secondaryCard?: boolean;
  setCardState: (val: State) => void;
}

const MainCard: React.FC<Props> = ({ cardState, logo, setCardState, data }) => {
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
  return (
    <div
      className="relative main-container insetShadow-r border-r border-slate-900 w-1/3 h-full shadow-inner 
                flex flex-col items-center cursor-pointer"
      onMouseEnter={() => mouseEntered(data.position)}
      onMouseLeave={() => mouseLeft(data.position)}
      onClick={() => {
        console.log("clicked");
      }}
    >
      <div className="h-3/6 flex items-center">{logo}</div>
      <div className="h-1/6">
        <div className="h-full flex flex-col justify-between">
          <div
            className={`h-1/3 shadow-${data.title.color} font-bold text-slate-900 tracking-widest`}
          >
            <div>{data.title.first}</div>
            <div>{data.title.second}</div>
          </div>
          <div className="h-1/3 text-[18px] text-secondary px-32">
            {data.message}
          </div>
        </div>
      </div>
      <div className="h-2/6 flex items-center">
        <div
          className={`h-20 text-primary-${data.title.color} 
          text-[24px] border-solid border-dotted border-b-4 border-primary-${data.title.color} mx-14 mb-14`}
        >
          {data.link}
        </div>
      </div>
      <div
        className={`absolute w-full flex flex-col items-center cursor-pointer left-0 right-0 overflow-hidden h-0 overlay hover:h-full ${
          data.position === "left"
            ? "bg-primary-yellow"
            : data.position === "mid"
            ? "bg-primary-orange"
            : data.position === "right"
            ? "bg-primary-green"
            : null
        } ${
          data.position === "left"
            ? cardState.left
              ? "bottom-0"
              : "top-0"
            : null
        } ${
          data.position === "mid"
            ? cardState.mid
              ? "bottom-0"
              : "top-0"
            : null
        } ${
          data.position === "right"
            ? cardState.right
              ? "bottom-0"
              : "top-0"
            : null
        }`}
      >
        <SecondCard
          data={{
            title: {
              first: data.title.first,
              second: data.title.second,
              color: data.title.color,
            },
            message: "",
            link: data.link,
            position: data.position,
          }}
        />
      </div>
    </div>
  );
};

export default MainCard;

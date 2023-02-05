import { ReactNode } from "react";

interface Props {
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
}

const SecondCard: React.FC<Props> = ({ logo, data }) => {
  return (
    <div
      className="relative main-container insetShadow-l border-r border-slate-900 w-1/3 h-full shadow-inner 
              flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="h-3/6 flex items-center">
        {/* <LanguageLogo width={"120px"} height={"120px"} color={"#00ff99"} /> */}
        {logo}
      </div>
      <div className="h-1/6">
        <div className="h-full flex flex-col justify-between">
          <div className="h-1/3 shadow-green font-bold text-slate-900 tracking-widest ">
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
    </div>
  );
};

export default SecondCard;

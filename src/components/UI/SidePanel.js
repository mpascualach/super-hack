import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const SidePanel = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  const colors = {
    optimism: { border: "[#fff]", bg: "[#FF0420]", text: "white" },
    base: { border: "[#0052FE]", bg: "[#0052FE]", text: "white" },
    zora: { border: "[#909090]", bg: "[#909090]", text: "white" },
    mode: { border: "[#DFFE00]", bg: "[#DFFE00]", text: "black" },
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <div
        className={`border border-${colors[ecosystem]["border"]}  h-[180px] w-[558px] rounded-[20px]`}
      >
        <div className="flex flex-row pl-[24px] pt-[44px] pr-[32px] justify-between">
          <div className="flex flex-col gap-[9px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="4"
              viewBox="0 0 81 4"
              fill="none"
            >
              <path d="M0 2H81" stroke="#D9D9D9" strokeWidth="4" />
            </svg>
            <p className="text-[32px] text-[#D9D9D9]">User manual</p>
          </div>
          <img className="h-[92px] w-[92px]" src="/cats/cat1.svg" alt="" />
        </div>
      </div>
      <div
        className={`border border-${colors[ecosystem]["border"]}  h-[180px] w-[558px] rounded-[20px]`}
      >
        <div className="flex flex-row pl-[24px] pt-[44px] pr-[32px] justify-between">
          <div className="flex flex-col gap-[9px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="4"
              viewBox="0 0 81 4"
              fill="none"
            >
              <path d="M0 2H81" stroke="#D9D9D9" strokeWidth="4" />
            </svg>
            <p className="text-[32px] text-[#D9D9D9]">Generate NFTS!!!</p>
          </div>
          <img className="h-[92px] w-[92px]" src="/cats/cat2.svg" alt="" />
        </div>
      </div>
      <div
        className={`border border-${colors[ecosystem]["border"]}   h-[180px] w-[558px] rounded-[20px]`}
      >
        <div className="flex flex-row pl-[24px] pt-[44px] pr-[32px] justify-between">
          <div className="flex flex-col gap-[9px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="4"
              viewBox="0 0 81 4"
              fill="none"
            >
              <path d="M0 2H81" stroke="#D9D9D9" strokeWidth="4" />
            </svg>
            <p className="text-[32px] w-[295px] text-[#D9D9D9]">
              Deploy smart contract
            </p>
          </div>
          <img className="h-[92px] w-[92px]" src="/cats/cat3.svg" alt="" />
        </div>
      </div>
      <div
        className={`border border-${colors[ecosystem]["border"]}  flex flex-col justify-center  h-[120px] w-[558px] rounded-[20px]`}
      >
        <div className="flex flex-row pl-[24px]  pr-[32px] ">
          <p className="text-[32px] text-[#D9D9D9] w-[426px]">
            Tell me about <span className="capitalize">{ecosystem}</span>
          </p>
          <img className="h-[64px] w-[64px]" src="/speech-bubble.svg" alt="" />
        </div>
      </div>
      <div
        className={` bg-${colors[ecosystem]["bg"]}  h-[60px] w-[558px] rounded-[20px]`}
      >
        <div className="flex flex-row px-[24px] py-[4px] justify-between">
          <div className="flex flex-col gap-[9px] ">
            <p className={`text-[32px] text-${colors[ecosystem]["text"]}`}>
              Next prompt
            </p>
          </div>
          <img
            className="h-[48px] w-[48px]"
            src="/images/question.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const TemplateHolder = ({ title, children }) => {
  const { ecosystem } = useContext(EcoSystemContext);
  console.log(ecosystem);

  const colors = {
    optimism: "bg-[#FF0420]",
    base: "bg-[#0052FE]",
    zora: "bg-[#909090]",
    mode: "bg-[#DFFE00]",
  };
  return (
    <div className="rounded-[18px] bg-white min-h-[200px] w-fit shadow-NFT">
      <div
        className={`${colors[ecosystem]} h-[60px] flex flex-row justify-between items-center p-[16px] rounded-t-[18px] text-[20px]`}
      >
        <p className="text-[28px] font-bold text-white">{title}</p>
        <img className="h-[24px]  cursor-pointer" src="/plus.svg" alt="" />
      </div>
      <div className="flex flex-col p-[16px] pt-[24px] items-center text-black">
        {children}
      </div>
    </div>
  );
};

export default TemplateHolder;

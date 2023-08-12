import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const TemplateHolder = ({ title, children }) => {
  const { ecosystem } = useContext(EcoSystemContext);

  const colors = {
    optimism: { border: "#fff", bg: "#FF0420", text: "white" },
    base: { border: "#0052FE", bg: "#0052FE", text: "white" },
    zora: { border: "#909090", bg: "#909090", text: "white" },
    mode: { border: "#DFFE00", bg: "#DFFE00", text: "black" },
  };

  return (
    <div className="rounded-[18px] bg-white min-h-[200px] w-fit shadow-NFT">
      <div
        style={{ backgroundColor: colors[ecosystem].bg }}
        className={`h-[60px] flex flex-row justify-between items-center p-[16px] rounded-t-[18px] text-[20px]`}
      >
        <p
          style={{ color: colors[ecosystem].text }}
          className="text-[28px] font-bold"
        >
          {title}
        </p>
        <img className="h-[24px] cursor-pointer" src="/plus.svg" alt="" />
      </div>
      <div className="flex flex-col p-[16px] pt-[24px] items-center text-black">
        {children}
      </div>
    </div>
  );
};

export default TemplateHolder;

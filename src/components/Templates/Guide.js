import React from "react";
import TemplateHolder from "../UI/TemplateHolder";
import { CopyBlock, dracula } from "react-code-blocks";

const Guide = () => {
  return (
    <TemplateHolder title="Guide">
      <div className="w-[806px]">
        <div className="setup flex flex-col">
          <div className="flex flex-row gap-[16px] items-center">
            <div className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold bg-[#DFFE00]">
              1
            </div>
            <p className="text-[28px] font-bold">Let’s connect your wallet </p>
          </div>
          <div className="flex flex-row gap-[16px] items-center">
            <div className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold bg-[#DFFE00]">
              2
            </div>
            <p className="text-[28px] font-bold">You need to BRIDGE funds </p>
          </div>
          <div className="flex flex-row gap-[16px] items-center">
            <div className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold bg-[#DFFE00]">
              3
            </div>
            <p className="text-[28px] font-bold">Let’s create a project now</p>
            <img src="/images/arrow.svg" alt="" />
          </div>
        </div>

        {/* <CopyBlock
        language="go"
        text={`v := Vertex{X: 1, Y: 2}`}
        codeBlock
        theme={dracula}
        showLineNumbers={false}
      /> */}
      </div>
    </TemplateHolder>
  );
};

export default Guide;

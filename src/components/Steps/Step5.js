import React from "react";

const Step5 = () => {
  return (
    <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
      <img className="w-[51px]" src="/loader.svg" alt="" />
      <p className="w-[373px] text-[24px] text-center">
        Minting of NFT was successful
      </p>
      <a
        className="text-[#1A64BC] underline"
        target="_blank"
        rel="noreferrer"
        href="https://explorer.zora.energy/tx/0x3e8db7458dcd6cecfe145090282fa21c4a506b528bf523c5875ae11b3a69c2f7"
      >
        View on block explorer
      </a>
    </div>
  );
};

export default Step5;

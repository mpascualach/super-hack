import React, { useState, useEffect } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import Loader from "../Custom/Loader";

const images = ["/images/img1.png", "/images/img2.png", "/images/img3.png"];

const Create = () => {
  const [prompt, setPrompt] = useState(
    "UK countryside street on a sunny afternoon"
  );

  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleGenerate = () => {
    setIsGenerated(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <TemplateHolder title="Create NFT">
      {!isGenerated ? (
        <div className="h-[525px]">
          <p className="text-[20px] text-black text-opacity-90 mb-[8px]">
            Prompt
          </p>
          <div className="w-[545px] h-[60px] border border-[#ddd] rounded-[10px] flex flex-row items-center p-[14px] pl-[16px]">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt to generate image here"
              className="w-[450px] h-[20px] text-[16px] focus:outline-none text-[#26262690]"
              name=""
              id=""
            />
          </div>
          <p className="text-[20px] text-black text-opacity-90 mt-[24px] mb-[8px]">
            Price
          </p>
          <div className="w-[545px] h-[60px] border border-[#ddd] rounded-[10px] flex flex-row items-center p-[14px] pl-[16px]">
            <input
              type="text"
              className="w-[450px] h-[20px] text-[16px] focus:outline-none text-[#26262690]"
              name=""
              id=""
            />
          </div>
          <p className="text-[20px] text-black text-opacity-90 mb-[8px] mt-[24px]">
            Select chain
          </p>
          <div>
            <select className="select select-bordered border-[#DDD] rounded-[12px] w-[545px] h-[60px] text-black font-normal text-[16px] focus:outline-none">
              <option selected>Optimism</option>
              <option>Base</option>
              <option>Zora</option>
            </select>
          </div>
          <button
            className="w-[545px] h-[60px] bg-[#262626] text-white rounded-[8px] mt-[105px]"
            onClick={handleGenerate}
          >
            GENERATE
          </button>
        </div>
      ) : (
        <div className="h-[525px]">
          <p className="text-[20px] text-black text-opacity-40 mb-[8px]">
            Prompt
          </p>
          <div className="w-[545px] ">
            <p className="text-[16px] text-[#262626]">{prompt}</p>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[400px]">
                <Loader />
              </div>
            ) : (
              <div className="flex flex-col justify-between h-[450px] py-[24px] ">
                <div className="flex flex-row gap-[62px]">
                  <img
                    className="h-[205px] w-[205px]"
                    src="/images/nft.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[20px] font-bold mt-[20px]">
                      London Scene
                    </p>
                    <p className="flex flex-row gap-[8px] items-center text-[12px]">
                      <img className="h-[16px]" src="/zora.svg" alt="" />
                      <span className="text-[18px] ">0.01 ETH</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <button className="w-[184px] h-[60px] border border-black rounded-[8px] text-[20px] font-bold ">
                    REDO
                  </button>
                  <button className="w-[184px] h-[60px] bg-[#262626] text-white text-[20px] font-bold rounded-[8px]  ">
                    MINT
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </TemplateHolder>
  );
};

export default Create;

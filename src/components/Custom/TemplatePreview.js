import React, { useState } from "react";

const TemplatePreview = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="h-[620px] w-[878px] bg-white rounded-[20px]">
      <div className="flex flex-row justify-between p-[16px]">
        <p className="text-[24px] text-[#676767]">Step {currentStep}</p>
        <div className="flex flex-row">
          <svg
            onClick={handlePrevious}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M22.5 27L13.5 18L22.5 9"
              stroke="#B0B0B0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M13.5 27L22.5 18L13.5 9"
              stroke="#B0B0B0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
          <img className="w-[51px]" src="/loader.svg" alt="" />
          <p className="w-[505px] text-[24px] text-center">
            Okay understood, what categories of NFT do you want to buy?
          </p>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
          <img className="w-[51px]" src="/loader.svg" alt="" />
          <p className="w-[322px] text-[24px] text-center">
            Thinking. Loading. Minting.
          </p>
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
          <div className="w-[778px] h-[212px] bg-[#f8f8f8] p-[16px] rounded-[8px]">
            <p className="text-[24px] mb-[24px]">Pick categories</p>
            <div className="flex flex-wrap gap-[12px] cursor-pointer">
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                All
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                Music
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px] border border-black">
                Art
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                Sports
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                Media
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                Movies
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                AI
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                Entertainment
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                Generative
              </span>
              <span className="rounded-[4px] bg-white px-[20px] py-[4px] text-[20px]">
                Collectible
              </span>
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && <div>Step 4 content goes here...</div>}
      {currentStep === 5 && (
        <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
          <img className="w-[51px]" src="/loader.svg" alt="" />
          <p className="w-[373px] text-[24px] text-center">
            Minting of NFT in your ________ wallet was successful
          </p>
        </div>
      )}
    </div>
  );
};

export default TemplatePreview;

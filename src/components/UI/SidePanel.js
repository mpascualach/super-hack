import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const SidePanel = ({ setInputValue, setResponseText, setOutputContent }) => {
  const { ecosystem } = useContext(EcoSystemContext);

  const colors = {
    optimism: { border: "#fff", bg: "#FF0420", text: "white" },
    base: { border: "#0052FE", bg: "#0052FE", text: "white" },
    zora: { border: "#909090", bg: "#909090", text: "white" },
    mode: { border: "#DFFE00", bg: "#DFFE00", text: "black" },
  };

  const nextPrompt = (e) => {
    e.stopPropagation();
    setInputValue("");
    setResponseText("");
    setOutputContent("");
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {["User manual", "Generate NFTS!!!", "Deploy smart contract"].map(
        (text, index) => (
          <div
            style={{ border: `1px solid ${colors[ecosystem].border}` }}
            className="h-[180px] w-[558px] rounded-[20px]"
            key={index}
          >
            <div className="flex flex-row pl-[24px] pt-[44px] pr-[32px] justify-between">
              <div className="flex flex-col gap-[9px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="4"
                  viewBox="0 0 81 4"
                  fill="none"
                >
                  <path d="M0 2H81" stroke="#D9D9D9" strokeWidth="4" />
                </svg>
                <p style={{ color: "#D9D9D9" }} className="text-[32px]">
                  {text}
                </p>
              </div>
              <img
                className="h-[92px] w-[92px]"
                src={`/cats/cat${index === 0 ? 5 : index + 1}.svg`}
                alt=""
              />
            </div>
          </div>
        )
      )}

      <div
        style={{ border: `1px solid ${colors[ecosystem].border}` }}
        className="flex flex-col justify-center h-[120px] w-[558px] rounded-[20px]"
      >
        <div className="flex flex-row pl-[24px] pr-[32px]">
          <p style={{ color: "#D9D9D9" }} className="text-[32px] w-[426px]">
            Tell me about <span className="capitalize">{ecosystem}</span>
          </p>
          <img className="h-[64px] w-[64px]" src="/speech-bubble.svg" alt="" />
        </div>
      </div>

      <div
        onClick={nextPrompt}
        style={{ backgroundColor: colors[ecosystem].bg }}
        className="h-[60px] w-[558px] rounded-[20px] cursor-pointer"
      >
        <div className="flex flex-row px-[24px] py-[4px] justify-between">
          <div className="flex flex-col gap-[9px]">
            <p
              style={{ color: colors[ecosystem].text }}
              className="text-[32px]"
            >
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

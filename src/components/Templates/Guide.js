import React, { useContext } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import { CopyBlock, dracula } from "react-code-blocks";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const Guide = () => {
  const { ecosystem } = useContext(EcoSystemContext);
  const colors = {
    optimism: { border: "#fff", bg: "#FF0420", text: "white" },
    base: { border: "#0052FE", bg: "#0052FE", text: "white" },
    zora: { border: "#909090", bg: "#909090", text: "white" },
    mode: { border: "#DFFE00", bg: "#DFFE00", text: "black" },
  };

  return (
    <TemplateHolder title="Guide">
      <div className="w-[806px] min-h-[443px]">
        <div className="setup flex flex-col gap-[32px]">
          <div className="flex flex-col">
            <div className="flex flex-row gap-[16px] items-center">
              <div
                style={{
                  backgroundColor: colors[ecosystem].bg,
                  color: colors[ecosystem].text,
                }}
                className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold"
              >
                1
              </div>
              <p className="text-[28px] font-bold">
                Let’s connect your wallet{" "}
              </p>
            </div>
            <div className="ml-[79px]">
              <ConnectWallet className="connect-wallet-button" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-[16px] items-center">
              <div
                style={{
                  backgroundColor: colors[ecosystem].bg,
                  color: colors[ecosystem].text,
                }}
                className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold "
              >
                2
              </div>
              <p className="text-[28px] font-bold">You need to BRIDGE funds </p>
            </div>
            <div className="ml-[79px]">
              <a
                href="https://bridge.base.org/deposit"
                target="_blank"
                rel="noreferrer"
              >
                <div className="connect-wallet-button flex flex-row justify-center items-center">
                  Bridge funds
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-[16px] items-center">
            <div
              style={{
                backgroundColor: colors[ecosystem].bg,
                color: colors[ecosystem].text,
              }}
              className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold ]"
            >
              3
            </div>
            <p className="text-[28px] font-bold">Let’s create a project now</p>
            <img src="/images/arrow.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-row mt-[48px] justify-between">
          <img
            className="h-[36px] w-[36px]"
            src={`/logos/${ecosystem}.svg`}
            alt=""
          />
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

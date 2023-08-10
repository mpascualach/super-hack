import React from "react";
import Layout from "../components/UI/Layout";

const chat = () => {
  return (
    <Layout theme="chat">
      <div className="flex flex-row gap-[160px] min-h-[852px] pt-[40px] text-[#D1D2D3]">
        <div className="flex flex-col w-[878px]">
          <textarea
            className="w-[878px] h-[54px] overflow-y-auto resize-none bg-transparent border-b-2 border-[#F1F1F1] focus:outline-none text-[32px] font-medium"
            placeholder="What may I do for you?"
            name=""
            id=""
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="bg-gray-custom h-[180px] w-[558px] rounded-[20px]">
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
          <div className="bg-gray-custom h-[180px] w-[558px] rounded-[20px]">
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
          <div className="bg-gray-custom h-[180px] w-[558px] rounded-[20px]">
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
          <div className="bg-gray-custom h-[120px] w-[558px] rounded-[20px]">
            <div className="flex flex-row pl-[24px] pt-[28px] pr-[32px] justify-between">
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
                <p className="text-[32px] text-[#D9D9D9]">
                  Tell me about Optimisim
                </p>
              </div>
              <img
                className="h-[64px] w-[64px]"
                src="/speech-bubble.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default chat;

import React from "react";
import Layout from "../components/UI/Layout";
import SidePanel from "../components/UI/SidePanel";
import TemplateHolder from "../components/UI/TemplateHolder";
import Loader from "../components/Custom/Loader";
import Create from "../components/Templates/Create";
import Guide from "../components/Templates/Guide";

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
          <Guide />
        </div>
        <SidePanel />
      </div>
    </Layout>
  );
};

export default chat;

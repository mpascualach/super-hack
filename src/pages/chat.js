import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import SidePanel from "../components/UI/SidePanel";
import TemplateHolder from "../components/UI/TemplateHolder";
import Loader from "../components/Custom/Loader";
import Create from "../components/Templates/Create";
import Guide from "../components/Templates/Guide";
import Deploy from "../components/Templates/Deploy";

const chat = () => {
  const [inputValue, setInputValue] = useState(""); // to track the value of the input

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      // Execute fetch when Enter key is pressed
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: inputValue }),
      });
      const data = await response.json();
      console.log(data);
    }
  };
  return (
    <Layout theme="chat">
      <div className="flex flex-row gap-[160px] min-h-[852px] pt-[40px] text-[#D1D2D3]">
        <div className="flex flex-col w-[878px]">
          <input
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            type="text"
            className="w-[878px] h-[54px] overflow-y-auto resize-none bg-transparent border-b-2 border-[#F1F1F1] focus:outline-none text-[32px] font-medium mb-[24px]"
            placeholder="What may I do for you?"
            name=""
            id=""
          />
          {/* <Create /> */}
          {/* <Deploy /> */}
          <Guide />
        </div>
        <SidePanel />
      </div>
    </Layout>
  );
};

export default chat;

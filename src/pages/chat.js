import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import SidePanel from "../components/UI/SidePanel";

const chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseText, setResponseText] = useState("");

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
      setResponseText(data.message);
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
          <p className="text-white">{responseText}</p>
        </div>
        <SidePanel />
      </div>
    </Layout>
  );
};

export default chat;

import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import SidePanel from "../components/UI/SidePanel";
import Template from "../components/UI/Template";
import Loader from "../components/Custom/Loader";

const chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseText, setResponseText] = useState("");

  const [outputContent, setOutputContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setOutput = (template) => {
    const newContent = <Template template={template} />;
    setOutputContent(newContent);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
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
      setOutput(data.message);
      setResponseText(data.message);
      setIsLoading(false);
    }
  };
  return (
    <Layout theme="chat">
      <div className="flex flex-row gap-[160px] min-h-[852px] pt-[40px] text-[#D1D2D3]">
        <div className="flex flex-col w-[878px]">
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            type="text"
            className="w-[878px] h-[54px] overflow-y-auto resize-none bg-transparent border-b-2 border-[#F1F1F1] focus:outline-none text-[32px] font-medium mb-[24px]"
            placeholder="What may I do for you?"
            name=""
            id=""
          />
          <div className="output">
            {isLoading && (
              <div className="flex flex-row justify-center items-center">
                <Loader />
              </div>
            )}
            <p className="text-white h-[55px] mt-[32px]">{responseText}</p>
            {outputContent}
          </div>
        </div>
        <SidePanel
          setInputValue={setInputValue}
          setResponseText={setResponseText}
          setOutputContent={setOutputContent}
        />
      </div>
    </Layout>
  );
};

export default chat;

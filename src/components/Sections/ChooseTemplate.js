import React from "react";

const ChooseTemplate = ({ handleNext }) => {
  const [selectedTitles, setSelectedTitles] = React.useState([]);

  const handleSelect = (title) => {
    if (selectedTitles.includes(title)) {
      setSelectedTitles((prev) => prev.filter((t) => t !== title));
    } else {
      setSelectedTitles((prev) => [...prev, title]);
    }
  };

  return (
    <div className="relative mt-[42px] ">
      <div className="grid grid-cols-4 gap-4">
        <TemplateCard
          title="Generate NFTs"
          onSelect={handleSelect}
          isSelected={selectedTitles.includes("Generate NFTs")}
          index={1}
        />
        <TemplateCard
          title="Buy NFT"
          onSelect={handleSelect}
          isSelected={selectedTitles.includes("Buy NFT")}
          index={2}
        />
        <TemplateCard
          title="Create Smart Contract"
          onSelect={handleSelect}
          isSelected={selectedTitles.includes("Create Smart Contract")}
          index={3}
        />
        <TemplateCard
          title="User Manual"
          onSelect={handleSelect}
          isSelected={selectedTitles.includes("User Manual")}
          index={4}
        />
      </div>
      <div className="fixed bottom-0 right-0 w-full h-[80px] bg-[#f9f9f9]">
        <div className="flex flex-row gap-[24px] h-full items-center justify-end px-[48px]">
          <p className="text-[16px]">
            {selectedTitles.join(", ")}
            {selectedTitles.length > 0 && ` (${selectedTitles.length})`}
          </p>
          <div
            className="flex flex-row items-center justify-center w-[226px] h-[60px] bg-[#699BF7] rounded-[8px] text-[20px] font-bold text-white cursor-pointer"
            onClick={handleNext}
          >
            CHOOSE
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateCard = ({ title, onSelect, isSelected, index }) => {
  return (
    <div
      className={`flex flex-col w-[389px] cursor-pointer ${
        isSelected ? "border-4 border-blue-500 rounded-[20px]" : ""
      }`}
      onClick={() => onSelect(title)}
    >
      <div className="flex flex-row w-full h-[52px] bg-[#699BF7] font-bold text-white text-[24px] px-[16px] items-center rounded-t-[15px]">
        {title}
      </div>
      <div className="flex flex-col p-[16px] bg-[#f8f8f8] rounded-b-[15px]">
        <div className="flex flex-row h-[301px] bg-white justify-center items-center ">
          <img
            className="h-[150px] w-[150px]"
            src={`/cats/cat${index}.svg`}
            alt=""
          />
        </div>

        <p className="text-[20px] mt-[33px] mb-[28px]">
          Template that can help users buy NFTS within 2 clicks. The agent will
          also suggest and scout NFTs for the user.
        </p>
      </div>
    </div>
  );
};

export default ChooseTemplate;

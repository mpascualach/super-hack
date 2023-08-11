import React, { useState, useRef, useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const EcoSelect = () => {
  const [selectedImage, setSelectedImage] = useState("/logos/optimism.svg");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { setEcosystem } = useContext(EcoSystemContext);

  const handleChange = (image, ecosystemName) => {
    setSelectedImage(image);
    setEcosystem(ecosystemName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center gap-[4px] h-[60px] w-[100px] rounded-[10px] bg-transparent border border-[#D9D9D9CC] focus:outline-none px-[12px]"
      >
        <img src={selectedImage} alt="Selected" className="w-[48px] h-[48px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#D9D9D9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="z-100 flex flex-col gap-[12px] absolute w-[100px] items-center  border p-[12px] rounded-[10px] bg-white mt-[12px] shadow-lg"
        >
          <li className="cursor-pointer">
            <button
              onClick={() => handleChange("/logos/optimism.svg", "optimism")}
            >
              <img
                src="/logos/optimism.svg"
                alt="Option 1"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => handleChange("/logos/base.svg", "base")}>
              <img
                src="/logos/base.svg"
                alt="Option 2"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => handleChange("/logos/zora.svg", "zora")}>
              <img
                src="/logos/zora.svg"
                alt="Option 3"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => handleChange("/logos/mode.svg", "mode")}>
              <img
                src="/logos/mode.svg"
                alt="Option 4"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default EcoSelect;

import React, { useState } from "react";

const Customise = () => {
  const [inputFields, setInputFields] = useState([1]);

  const handleAddInput = () => {
    setInputFields((prevFields) => [...prevFields, prevFields.length + 1]);
  };

  return (
    <div className="mt-[24px]">
      <div className="flex flex-row w-full bg-[#F8F8F8] rounded-[15px] px-[24px] py-[32px] h-[704px]">
        <div className="flex flex-col gap-[32px] overflow-scroll hide-scrollbar">
          <p className="text-[28px]">NFT Template / Buy</p>
          <div className="form-control w-full">
            <label className="label flex items-center gap-2">
              <span className="label-text text-black text-[24px] mb-[8px]">
                Prompt
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                onClick={handleAddInput}
                className="cursor-pointer"
              >
                <path
                  d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
                  stroke="#B0B0B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 12V24"
                  stroke="#B0B0B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18H24"
                  stroke="#B0B0B0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <div className="flex flex-col gap-[12px]">
              {inputFields.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Enter prompt here"
                  className="input bg-white rounded-[10px] w-[646px] h-[64px] focus:outline-none "
                />
              ))}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="6"
            viewBox="0 0 650 6"
            fill="none"
          >
            <path d="M0 3L650 3.00006" stroke="white" strokeWidth="5" />
          </svg>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-[24px] mb-[8px]">
                Choose NFT categories
              </span>
            </label>
            <select className="select select-ghost bg-white rounded-[10px] w-[646px] h-[64px] focus:outline-none">
              <option disabled selected></option>
              <option>Art</option>
              <option>Sports</option>
              <option>Music</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-[24px] mb-[8px]">
                Smart contract address
              </span>
            </label>
            <input
              type="text"
              placeholder="Paste here..."
              className="input bg-white rounded-[10px] w-[646px] h-[64px] focus:outline-none "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customise;

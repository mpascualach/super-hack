import React from "react";

const choose = () => {
  return (
    <div className="p-[32px]">
      {/* <div className="flex flex-row gap-[16px] mt-[40px]">
        <div className="h-[328px] w-[452px] bg-[#d9d9d9] rounded-[20px]"></div>
        <div className="h-[328px] w-[452px] bg-[#d9d9d9] rounded-[20px]"></div>
        <div className="h-[328px] w-[452px] bg-[#d9d9d9] rounded-[20px]"></div>
        <div className="h-[328px] w-[452px] bg-[#d9d9d9] rounded-[20px]"></div>
      </div> */}
      <div className="flex flex-row  overflow-scroll gap-[16px] mt-[204px] hide-scrollbar">
        <div className="flex flex-col h-[411px] w-[452px] bg-[#d9d9d9] rounded-[20px] px-[16px] pt-[24px] pb-[12px]">
          <p className="text-[32px] mb-[16px]">name</p>
          <div className="h-[206px] w-[420px] bg-white rounded-[20px]"></div>
          <p className="mt-[12px] text-[16px] w-[417px]">
            use case : Lorem ipsum dolor sit amet consectetur. Nulla velit massa
            leo elit quis velit vel. Non ultricies aliquet arcu volutpat nec sit
            nibh lectus natoque.
            <br />
            <br />
            price also
          </p>
        </div>
        <div className="flex flex-col h-[411px] w-[452px] bg-[#d9d9d9] rounded-[20px] px-[16px] pt-[24px] pb-[12px]">
          <p className="text-[32px] mb-[16px]">name</p>
          <div className="h-[206px] w-[420px] bg-white rounded-[20px]"></div>
          <p className="mt-[12px] text-[16px]">
            use case : Lorem ipsum dolor sit amet consectetur. Nulla velit massa
            leo elit quis velit vel. Non ultricies aliquet arcu volutpat nec sit
            nibh lectus natoque.
            <br />
            <br />
            price also
          </p>
        </div>
        <div className="flex flex-col h-[411px] w-[452px] bg-[#d9d9d9] rounded-[20px] px-[16px] pt-[24px] pb-[12px]">
          <p className="text-[32px] mb-[16px]">name</p>
          <div className="h-[206px] w-[420px] bg-white rounded-[20px]"></div>
          <p className="mt-[12px] text-[16px]">
            use case : Lorem ipsum dolor sit amet consectetur. Nulla velit massa
            leo elit quis velit vel. Non ultricies aliquet arcu volutpat nec sit
            nibh lectus natoque.
            <br />
            <br />
            price also
          </p>
        </div>
        <div className="flex flex-col h-[411px] w-[452px] bg-[#d9d9d9] rounded-[20px] px-[16px] pt-[24px] pb-[12px]">
          <p className="text-[32px] mb-[16px]">name</p>
          <div className="h-[206px] w-[420px] bg-white rounded-[20px]"></div>
          <p className="mt-[12px] text-[16px]">
            use case : Lorem ipsum dolor sit amet consectetur. Nulla velit massa
            leo elit quis velit vel. Non ultricies aliquet arcu volutpat nec sit
            nibh lectus natoque.
            <br />
            <br />
            price also
          </p>
        </div>
      </div>
    </div>
  );
};

export default choose;

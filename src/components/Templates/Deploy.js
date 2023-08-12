import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

import TemplateHolder from "../UI/TemplateHolder";

const Deploy = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  return (
    <TemplateHolder title="Deploy smart contract">
      <div className="">
        <p className="text-[24px]">Choose a smart contract</p>
      </div>
      <div className="flex flex-col w-[258px] h-[175px] bg-white rounded-[10px]">
        <div className="flex flex-row">
          <img src="/images/check-circle.svg" alt="" />
          <p>Audited</p>
        </div>
      </div>
    </TemplateHolder>
  );
};

export default Deploy;

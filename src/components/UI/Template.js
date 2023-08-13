import React from "react";
import Create from "../Templates/Create";
import Deploy from "../Templates/Deploy";
import Guide from "../Templates/Guide";
import None from "../Templates/None";

const Template = ({ template }) => {
  let component;

  switch (template) {
    case "mintNFT":
      component = <Create />;
      break;
    case "smartContract":
      component = <Deploy />;
      break;
    case "guide":
      component = <Guide />;
      break;
    default:
      component = <None text={template} />;
      break;
  }

  return <div>{component}</div>;
};

export default Template;

import React from "react";
import Create from "../Templates/Create";
import Deploy from "../Templates/Deploy";
import Guide from "../Templates/Guide";
import None from "../Templates/None";

const Template = ({ template }) => {
  let component;

  switch (template) {
    case "SmartContract":
      component = <Create />;
      break;
    case "Deploy":
      component = <Deploy />;
      break;
    case "Guide":
      component = <Guide />;
      break;
    default:
      component = <None text={template} />;
      break;
  }

  return <div>{component}</div>;
};

export default Template;

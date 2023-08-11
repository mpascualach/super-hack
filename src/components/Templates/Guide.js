import React from "react";
import TemplateHolder from "../UI/TemplateHolder";
import { CopyBlock, dracula } from "react-code-blocks";

const Guide = () => {
  return (
    <TemplateHolder title="Guide">
      <div>Guide</div>
      <CopyBlock
        language="go"
        text={`v := Vertex{X: 1, Y: 2}`}
        codeBlock
        theme={dracula}
        showLineNumbers={false}
      />
    </TemplateHolder>
  );
};

export default Guide;

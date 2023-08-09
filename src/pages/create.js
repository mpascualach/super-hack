import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import InfoSection from "../components/Sections/InfoSection";
import ChooseTemplate from "../components/Sections/ChooseTemplate";

const Create = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <Layout>
      <div>
        <div className="text-[16px] breadcrumbs">
          <ul>
            <li>Choose templates</li>
            <li>Import theme</li>
            <li>Customise templates</li>
            <li>Preview</li>
          </ul>
        </div>

        {currentStep === 1 && (
          <div>
            <ChooseTemplate handleNext={handleNext} />
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <InfoSection handleNext={handleNext} />
          </div>
        )}

        {currentStep === 3 && <div>hello 3</div>}
      </div>
    </Layout>
  );
};

export default Create;

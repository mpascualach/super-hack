import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import InfoSection from "../components/Sections/InfoSection";

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

        {currentStep === 1 && <InfoSection handleNext={handleNext} />}

        {currentStep === 2 && (
          <div>
            hello 2 <button onClick={handleNext}>next</button>
          </div>
        )}

        {currentStep === 3 && <div>hello 3</div>}
      </div>
    </Layout>
  );
};

export default Create;

import React, { useState } from "react";
import { BellumStepIndicator } from "../library/essential-components/BellumStepIndicator";
import { Button, Group } from "@chakra-ui/react";

export default {
  title: "Components/BellumStepIndicator",
  component: BellumStepIndicator,
};

export const Interactive = () => {
  const [activeStep, setActiveStep] = useState(0);
  const total = 4;

  return (
    <div style={{ padding: "40px" }}>
      <BellumStepIndicator totalSteps={total} currentStep={activeStep} />
      
      <Group mt="8">
        <Button 
          disabled={activeStep === 0} 
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>
        <Button 
          disabled={activeStep === total - 1} 
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Next
        </Button>
      </Group>
    </div>
  );
};
import { Steps } from "@chakra-ui/react";

export const BellumStepIndicator = ({ 
  totalSteps = 3, 
  currentStep = 0, 
  orientation = "horizontal" 
}) => {
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <Steps.Root 
      count={totalSteps} 
      value={currentStep} 
      orientation={orientation}
    >
      <Steps.List>
        {stepsArray.map((step) => (
          <Steps.Item index={step} key={step}>
            <Steps.Trigger 
              // Removing the focus ring/border from the trigger
              _focus={{ outline: "none", boxShadow: "none" }}
              outline="none"
            >
              <Steps.Indicator 
                // Logic: Current or past steps are Dark Blue, future are Light Blue
                bg={step <= currentStep ? "#003DAC" : "#BFC6CC"}
                color="white"
                border="none" // Removes any default border
                _focus={{ outline: "none" }}
              />
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps.Root>
  );
};
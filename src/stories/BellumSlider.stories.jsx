import React, { useState } from "react";
import { BellumSlider } from "../library/essential-components/BellumSlider";

export default {
  title: "Components/BellumSlider",
  component: BellumSlider,
};

export const InteractiveSlider = () => {
  // 1. We set up the "Memory" (State)
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div style={{ padding: "40px", maxWidth: "400px" }}>
      {/* 2. We display the current value so we can see it change */}
      <p style={{ marginBottom: "20px" }}>Selected Value: {sliderValue}</p>
      
      {/* 3. We pass the state and the updater function to our component */}
      <BellumSlider 
        min={0} 
        max={100} 
        value={sliderValue} 
        onChange={(val) => setSliderValue(val)} 
        color="teal.500"
      />
    </div>
  );
};
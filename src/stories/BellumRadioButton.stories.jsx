import React, { useState } from "react";
import { BellumRadioButton } from "../library/essential-components/BellumRadioButton";

export default {
  title: "Components/BellumRadioButton",
  component: BellumRadioButton,
};

export const Interactive = () => {
  const [choice, setChoice] = useState("email");
  
  const options = [
    { label: "Email Notifications", value: "email" },
    { label: "SMS Alerts", value: "sms" },
    { label: "No Notifications", value: "none" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <BellumRadioButton 
        options={options} 
        value={choice} 
        onValueChange={(details) => setChoice(details.value)}
      />
      <p style={{ marginTop: "20px" }}>Selected Method: {choice}</p>
    </div>
  );
};
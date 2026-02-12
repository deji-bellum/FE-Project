import React, { useState } from "react";
import { BellumTextBox } from "../library/essential-components/BellumTextBox";

export default {
  title: "Components/BellumTextBox",
  component: BellumTextBox,
};

export const Interactive = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <BellumTextBox 
        label="Full Name"
        placeholder="e.g. John Doe"
        value={text}
        onChange={(e) => setText(e.target.value)}
        helperText={`Character count: ${text.length}`}
      />
      <p style={{ marginTop: "20px" }}>Live Preview: {text}</p>
    </div>
  );
};
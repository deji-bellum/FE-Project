import React, { useState } from "react";
import { BellumDropdown } from "../library/essential-components/BellumDropdown";

export default {
  title: "Components/BellumDropdown",
  component: BellumDropdown,
};

export const Interactive = () => {
  const [selectedValue, setSelectedValue] = useState(["file-1"]);
  
  const fileOptions = [
    { label: "Document 1", value: "file-1" },
    { label: "Image 2", value: "file-2" },
    { label: "Report 3", value: "file-3" },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "300px" }}>
      <BellumDropdown 
        label="Select a File"
        options={fileOptions}
        value={selectedValue}
        onValueChange={(details) => setSelectedValue(details.value)}
        placeholder="Choose one..."
      />
      <p style={{ marginTop: "20px" }}>Current Value: {selectedValue[0]}</p>
    </div>
  );
};
import React, { useState } from "react";
import { BellumCalendar } from "../library/essential-components/BellumCalendar";

export default {
  title: "Components/BellumCalendar",
  component: BellumCalendar,
};

export const Interactive = () => {
  // We initialize with an empty string for the native date input
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h3 style={{ marginBottom: "10px" }}>
        Selected Date: {selectedDate || "None"}
      </h3>
      <BellumCalendar 
        value={selectedDate} 
        onValueChange={(details) => setSelectedDate(details.value[0])} 
      />
    </div>
  );
};
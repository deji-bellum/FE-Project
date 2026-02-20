import React from "react";
import { ApiFlow1APage1 } from "../existential/pages/ApiFlow1APage1";

export default {
  title: "Existential/Pages/ApiFlow 1.A Page 1",
  component: ApiFlow1APage1,
  parameters: {
    // This ensures the page fills the entire Storybook area without padding
    layout: "fullscreen",
  },
};

// 1. Default view of the full page
export const Default = () => (
  <ApiFlow1APage1 onNext={() => console.log("Navigating to Page 2...")} />
);

// 2. Mobile Viewport Simulation (Optional check for responsiveness)
export const MobileView = () => (
  <ApiFlow1APage1 onNext={() => console.log("Navigating to Page 2...")} />
);
MobileView.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};
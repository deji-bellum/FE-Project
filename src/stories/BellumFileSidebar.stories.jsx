import React from "react";
import { BellumFileSidebar } from "../existential/non-pages/BellumFileSidebar";

export default {
  title: "Existential/Non-Pages/BellumFileSidebar",
  component: BellumFileSidebar,
};

export const SidebarPreview = () => (
  <div style={{ background: "#f0f0f0", height: "100vh" }}>
    <BellumFileSidebar />
  </div>
);
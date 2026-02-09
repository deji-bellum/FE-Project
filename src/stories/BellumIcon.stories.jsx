import { BellumIcon } from "../library/essential-components/BellumIcon";
// Import icons you want to display in the gallery
import { Star, X, Check, Info, Settings, Heart } from "lucide-react";

export default {
  title: "Components/BellumIcon",
  component: BellumIcon,
};

// Gallery showing various icons being passed as props
export const IconGallery = () => (
  <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
    <BellumIcon icon={Star} color="gold" size={40} />
    <BellumIcon icon={X} color="red" size={30} />
    <BellumIcon icon={Check} color="green" size={30} />
    <BellumIcon icon={Settings} color="gray" size={30} />
    <BellumIcon icon={Heart} color="hotpink" size={30} />
  </div>
);

// Interactive story for the Storybook controls
export const Interactive = (args) => <BellumIcon {...args} />;
Interactive.args = {
  icon: Info,
  size: 32,
  color: "blue",
};
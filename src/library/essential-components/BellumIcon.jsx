import { Info } from "lucide-react";

export const BellumIcon = ({ icon: IconComponent = Info, size = 24, color = "black" }) => {
  // We rename the 'icon' prop to 'IconComponent' so React 
  // knows to treat it as a component (capitalized).
  return <IconComponent size={size} color={color} />;
};
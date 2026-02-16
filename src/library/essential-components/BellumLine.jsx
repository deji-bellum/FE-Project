import { Separator } from "@chakra-ui/react";

export const BellumLine = ({ 
  thickness = 1, 
  length = "100%", 
  orientation = "horizontal",
  color = "gray.200"
}) => {
  return (
    <Separator 
      orientation={orientation}
      size={`${thickness}px`} // Maps to thickness
      width={orientation === "horizontal" ? length : "auto"}
      height={orientation === "vertical" ? length : "auto"}
      borderColor={color}
      borderWidth={thickness} // Ensures the thickness is visible
    />
  );
};
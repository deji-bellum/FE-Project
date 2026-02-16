import { Button } from "@chakra-ui/react";

export const BellumButton = ({ 
  variant = "Primary", 
  size = "Medium", 
  disabled = false, 
  selected = false,
  content,
  onClick,
  ...props 
}) => {
  // Mapping your size dimensions to Chakra's scale
  const sizeMap = {
    Large: "lg",
    Medium: "md",
    Small: "sm"
  };

  // Styling logic for Primary vs Secondary
  const isPrimary = variant === "Primary";

  return (
    <Button
      size={sizeMap[size]}
      disabled={disabled}
      onClick={onClick}
      // Your Signature Blue for Primary, Outlined for Secondary
      bg={isPrimary ? "#003DAC" : "transparent"}
      color={isPrimary ? "white" : "#003DAC"}
      border={isPrimary ? "none" : "2px solid #003DAC"}
      
      // Visual "Selected" state
      boxShadow={selected ? "0 0 0 3px rgba(0, 61, 172, 0.4)" : "none"}
      transform={selected ? "scale(0.98)" : "none"}
      
      _hover={{
        bg: isPrimary ? "#002a7a" : "rgba(0, 61, 172, 0.05)",
        opacity: disabled ? 0.5 : 1
      }}
      
      _disabled={{
        bg: isPrimary ? "#BFC6CC" : "transparent",
        borderColor: "#BFC6CC",
        color: isPrimary ? "white" : "#BFC6CC",
        cursor: "not-allowed"
      }}

      transition="all 0.2s"
      {...props}
    >
      {content}
    </Button>
  );
};
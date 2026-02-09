import { Text } from "@chakra-ui/react";

// 1. We keep the 'rules' inside the file but outside the function
const textStyles = {
  h1: { fontSize: "32px", fontWeight: "700" },
  h2: { fontSize: "24px", fontWeight: "600" },
  h3: { fontSize: "20px", fontWeight: "600" },
  h4: { fontSize: "18px", fontWeight: "500" },
  body1: { fontSize: "16px", fontWeight: "400" },
  body2: { fontSize: "14px", fontWeight: "400" },
};

export const BellumText = ({ type = "body1", color = "black", children }) => {
  // 2. We pick the right rule based on the 'type' prop
  const style = textStyles[type] || textStyles.body1;

  return (
    <Text 
      fontSize={style.fontSize} 
      fontWeight={style.fontWeight} 
      color={color}
    >
      {children}
    </Text>
  );
};
import { RadioGroup, Stack } from "@chakra-ui/react";

export const BellumRadioButton = ({ 
  options = [], 
  value, 
  onValueChange, 
  orientation = "vertical" 
}) => {
  return (
    <RadioGroup.Root 
      value={value} 
      onValueChange={onValueChange}
    >
      <Stack 
        direction={orientation === "horizontal" ? "row" : "column"} 
        gap="6" // Slightly more gap between options for a cleaner look
      >
        {options.map((option) => (
          <RadioGroup.Item 
            value={option.value} 
            key={option.value}
            cursor="pointer"
            display="flex"
            alignItems="center"
          >
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl 
              // The outer ring
              borderWidth="2px"
              borderColor={value === option.value ? "#003DAC" : "#BFC6CC"}
              bg="white"
              _checked={{
                bg: "white", // Keeps the background white to show the gap
                borderColor: "#003DAC",
                // This creates the blue dot with space (inset)
                _before: {
                  content: '""',
                  display: "block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "full",
                  bg: "#003DAC",
                }
              }}
              // Size of the outer ring
              boxSize="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.2s"
            />
            <RadioGroup.ItemText 
              fontWeight="medium" 
              fontSize="sm"
              ml="2"
              color={value === option.value ? "black" : "gray.600"}
            >
              {option.label}
            </RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </Stack>
    </RadioGroup.Root>
  );
};
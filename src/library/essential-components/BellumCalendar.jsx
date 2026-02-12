import { Input, Box, Stack } from "@chakra-ui/react";
import { BellumText } from "./BellumText";

export const BellumCalendar = ({ value, onValueChange }) => {
  return (
    <Box width="full">
      <Input
        type="date"
        size="md"
        // value for HTML date input needs to be YYYY-MM-DD string
        value={value} 
        onChange={(e) => onValueChange({ value: [e.target.value] })}
        p={2}
      />
    </Box>
  );
};
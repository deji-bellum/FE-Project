import { useState } from "react";
import { VStack, HStack, Box, Center } from "@chakra-ui/react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumIcon } from "../../library/essential-components/BellumIcon";
import { BellumLine } from "../../library/essential-components/BellumLine";
import { FileText, Star } from "lucide-react";

export const BellumFileBox = ({ 
  title = "Key performance", 
  fileSize = "52mb",
  initialHighlighted = false 
}) => {
  // 1. Brain: Internal State for Highlighting
  const [isHighlighted, setIsHighlighted] = useState(initialHighlighted);

  return (
    <Box
      as="button"
      onClick={() => setIsHighlighted(!isHighlighted)}
      width="280px"
      p="6"
      bg="#D6E0F5" // The light blue background from your image
      borderRadius="xl"
      transition="all 0.2s"
      // Highlight Effect
      border="2px solid"
      borderColor={isHighlighted ? "#003DAC" : "transparent"}
      boxShadow={isHighlighted ? "lg" : "sm"}
      cursor="pointer"
      textAlign="center"
    >
      <VStack gap="4" align="stretch">
        
        {/* Text-In-Icon 001 Area */}
        <Center>
          <Box position="relative" color="#003DAC">
             <FileText size={80} fill="#003DAC" />
             <Center position="absolute" inset="0" pt="2">
                <BellumText type="h2" color="white">K</BellumText>
             </Center>
          </Box>
        </Center>

        <BellumText type="h2" color="#003DAC">{title}</BellumText>

        <BellumLine thickness={2} color="#003DAC" />

        <HStack justify="space-between" align="flex-end">
          <VStack align="flex-start" gap="0">
            <BellumText type="body2" color="#003DAC">File size:</BellumText>
            <BellumText type="h2" color="#003DAC">{fileSize}</BellumText>
          </VStack>
          
          {/* Icon 007 (Star) */}
          <BellumIcon 
            icon={Star} 
            size={28} 
            color="#003DAC" 
            style={{ marginBottom: "4px" }} 
          />
        </HStack>
      </VStack>
    </Box>
  );
};
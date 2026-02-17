import { VStack, HStack, Box, Center } from "@chakra-ui/react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumIcon } from "../../library/essential-components/BellumIcon";
import { BellumLine } from "../../library/essential-components/BellumLine";
import { BellumButton } from "../../library/essential-components/BellumButton";
import { FileText, File } from "lucide-react";

export const BellumFileSidebar = ({
  fileName = "Key performance",
  fileSize = "52mb",
  date = "1/11/2022",
  description = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
}) => {
  return (
    <Box 
      width="300px" 
      height="1098px" // Fixed height as requested
      bg="#D6E0F5" 
      p="6" 
      boxShadow="sm"
      flexShrink="0" // Prevents the sidebar from squishing in Flex layouts
    >
      <VStack height="100%" gap="6" align="stretch">
        
        {/* Top Header */}
        <HStack gap="2">
          <BellumIcon icon={File} size={20} color="black" />
          <BellumText type="h2" color="black">File preview</BellumText>
        </HStack>

        {/* Large Visual */}
        <Center py="4">
          <Box position="relative" color="#003DAC">
            <FileText size={100} fill="#003DAC" />
            <Center position="absolute" inset="0" pt="2">
              <BellumText type="h1" color="white" style={{ fontSize: "32px" }}>K</BellumText>
            </Center>
          </Box>
        </Center>

        <BellumLine thickness={2} color="#003DAC" />

        {/* Metadata Section */}
        <VStack align="flex-start" gap="1">
          <BellumText type="h2" color="#003DAC">{fileName}</BellumText>
          <HStack gap="4">
            <BellumText type="body2" color="gray.600">{fileSize}</BellumText>
            <BellumText type="body2" color="gray.600">{date}</BellumText>
          </HStack>
          <Box mt="4">
            <BellumText type="body2" color="gray.600">
              {description}
            </BellumText>
          </Box>
        </VStack>

        {/* Actions - Pushed to the bottom of the 1098px height */}
        <VStack gap="3" mt="auto" pb="4">
          <BellumButton 
            variant="Primary" 
            size="Medium" 
            width="full" 
            content="Download data" 
          />
          <BellumButton 
            variant="Secondary" 
            size="Medium" 
            width="full" 
            content="Go to previous page" 
          />
        </VStack>

      </VStack>
    </Box>
  );
};
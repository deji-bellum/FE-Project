import { Box, VStack, HStack, Flex, Spacer, Center } from "@chakra-ui/react";
import { useState } from "react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumStepIndicator } from "../../library/essential-components/BellumStepIndicator";
import { BellumButton } from "../../library/essential-components/BellumButton";
import { BellumRadioButton } from "../../library/essential-components/BellumRadioButton";
import { BellumSidebar } from "../non-pages/BellumSidebar";
import { Database, Cloud, MoveDiagonal, Maximize } from "lucide-react";

export const ApiFlow1APage1 = ({ onNext }) => {
  const [processingType, setProcessingType] = useState("batch");
  const [dataType, setDataType] = useState("single");

  return (
    <Flex height="100vh" width="100vw" overflow="hidden">
      <BellumSidebar />

      <Box flex="1" bg="white" p="16" overflowY="auto">
        <VStack align="flex-start" gap="12" maxW="900px" mx="auto">
          
          <VStack align="flex-start" gap="3">
            <BellumText type="h1">API creation</BellumText>
            <BellumText type="body2" color="gray.500">
              With Bellum, API creation is easier than ever before. Just answer these questions below.
            </BellumText>
          </VStack>

          <Center width="100%">
            <Box width="450px">
              <BellumStepIndicator totalSteps={2} currentStep={0} />
            </Box>
          </Center>

          {/* Processing Type */}
          <VStack align="center" width="100%" gap="6">
            <BellumText type="h2">Processing type?</BellumText>
            <HStack gap="8">
              <HStack gap="2">
                <Database size={20} color={processingType === "batch" ? "#003DAC" : "gray"} />
                <BellumRadioButton 
                  options={[{ label: "Batch", value: "batch" }]}
                  value={processingType}
                  onValueChange={(d) => setProcessingType(d.value)}
                />
              </HStack>
              <HStack gap="2">
                <Cloud size={20} color={processingType === "stream" ? "#003DAC" : "gray"} />
                <BellumRadioButton 
                  options={[{ label: "Stream", value: "stream" }]}
                  value={processingType}
                  onValueChange={(d) => setProcessingType(d.value)}
                />
              </HStack>
            </HStack>
          </VStack>

          {/* Data Type Selection */}
          <VStack align="center" width="100%" gap="6">
            <BellumText type="h2">Data type</BellumText>
            <VStack gap="4">
              <Box 
                as="button" onClick={() => setDataType("single")}
                width="420px" p="5" border="2px solid" borderRadius="lg"
                borderColor={dataType === "single" ? "#003DAC" : "#E2E8F0"}
                bg="white"
              >
                <HStack justify="space-between">
                  <HStack gap="4">
                    <MoveDiagonal size={20} color={dataType === "single" ? "#003DAC" : "#CBD5E0"} />
                    <BellumText type="body1" color={dataType === "single" ? "#003DAC" : "gray.400"}>Single Data point</BellumText>
                  </HStack>
                  <Box boxSize="18px" borderRadius="full" border="2px solid" borderColor={dataType === "single" ? "#003DAC" : "#E2E8F0"} bg={dataType === "single" ? "#003DAC" : "transparent"} />
                </HStack>
              </Box>

              <Box 
                as="button" onClick={() => setDataType("multiple")}
                width="420px" p="5" border="2px solid" borderRadius="lg"
                borderColor={dataType === "multiple" ? "#003DAC" : "#E2E8F0"}
                bg="white"
              >
                <HStack justify="space-between">
                  <HStack gap="4">
                    <Maximize size={20} color={dataType === "multiple" ? "#003DAC" : "#CBD5E0"} />
                    <BellumText type="body1" color={dataType === "multiple" ? "#003DAC" : "gray.400"}>Multiple Data points</BellumText>
                  </HStack>
                  <Box boxSize="18px" borderRadius="full" border="2px solid" borderColor={dataType === "multiple" ? "#003DAC" : "#E2E8F0"} bg={dataType === "multiple" ? "#003DAC" : "transparent"} />
                </HStack>
              </Box>
            </VStack>
          </VStack>

          <HStack width="100%" pt="12">
            <Spacer />
            <BellumButton variant="Primary" size="Large" content="Next" onClick={onNext} />
          </HStack>

        </VStack>
      </Box>
    </Flex>
  );
};
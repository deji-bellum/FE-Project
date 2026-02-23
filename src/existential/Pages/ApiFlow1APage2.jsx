import { useState } from "react";
import { Box, VStack, Flex, Center } from "@chakra-ui/react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumStepIndicator } from "../../library/essential-components/BellumStepIndicator";
import { BellumButton } from "../../library/essential-components/BellumButton";
import { BellumSidebar } from "../non-pages/BellumSidebar";
import { BellumDropdown } from "../../library/essential-components/BellumDropdown";

export const ApiFlow1APage2 = ({ onNext, onPrevious }) => {
  // --- Brain: Internal State ---
  const [selectedDataPoint, setSelectedDataPoint] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");

  const dataOptions = [
    { label: "User Data", value: "user_data" },
    { label: "Transaction Logs", value: "logs" },
    { label: "System Metrics", value: "metrics" }
  ];

  const timelineOptions = [
    { label: "Real-time", value: "now" },
    { label: "Historical (30 days)", value: "30d" },
    { label: "Custom Range", value: "custom" }
  ];

  // Helper: Find the label for the current value, otherwise show default placeholder
  const currentDataPointLabel = dataOptions.find(opt => opt.value === selectedDataPoint)?.label || "Select data point option";
  const currentTimelineLabel = timelineOptions.find(opt => opt.value === selectedTimeline)?.label || "Select timeline";

  return (
    <Flex height="100vh" width="100vw" overflow="hidden">
      <BellumSidebar />

      <Box flex="1" bg="white" p="16" overflowY="auto">
        <VStack align="flex-start" gap="12" maxW="900px" mx="auto">
          
          <VStack align="flex-start" gap="3">
            <BellumText type="h1">API creation</BellumText>
            <BellumText type="body2" color="gray.500">
              With Bellum, API creation is easier than ever before. Just answer these questions below and have your API created for you
            </BellumText>
          </VStack>

          <Center width="100%">
            <Box width="450px">
              <BellumStepIndicator totalSteps={2} currentStep={1} />
            </Box>
          </Center>

          {/* Form Content: Centralized */}
          <VStack width="100%" gap="10" pt="4" align="center">
            
            {/* Dropdown 001 - Select data points */}
            <VStack width="100%" gap="4" align="center">
              <BellumText type="h2">Select data points</BellumText>
              <Box width="450px">
                <BellumDropdown 
                  placeholder={currentDataPointLabel} // Pass the selected label here
                  options={dataOptions}
                  value={selectedDataPoint}
                  onValueChange={(val) => setSelectedDataPoint(val.value)} // Ensure this matches your component's prop name
                  showArrow={true}
                />
              </Box>
            </VStack>

            {/* Dropdown 002 - Select timeline */}
            <VStack width="100%" gap="4" align="center">
              <BellumText type="h2">Select timeline</BellumText>
              <Box width="450px">
                <BellumDropdown 
                  placeholder={currentTimelineLabel} // Pass the selected label here
                  options={timelineOptions}
                  value={selectedTimeline}
                  onValueChange={(val) => setSelectedTimeline(val.value)}
                  showArrow={true}
                />
              </Box>
            </VStack>

            {/* Centralized Action Buttons (Medium Variant) */}
            <VStack width="100%" gap="4" pt="10" align="center">
              <BellumButton 
                variant="Primary" 
                size="Large" 
                content="Create API" 
                onClick={onNext} 
                style={{ width: "50%" }}
              />
              <BellumButton 
                variant="Secondary" 
                size="Large" 
                content="Go to previous page" 
                onClick={onPrevious} 
                style={{ width: "50%" }}
              />
            </VStack>

          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};
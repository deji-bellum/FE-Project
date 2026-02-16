import { useState } from "react";
import { Center, VStack, HStack, Box, Button } from "@chakra-ui/react";
import { BellumText } from "./library/essential-components/BellumText";
import { BellumIcon } from "./library/essential-components/BellumIcon";
import { BellumSlider } from "./library/essential-components/BellumSlider";
import { BellumCalendar } from "./library/essential-components/BellumCalendar";
import { BellumTextBox } from "./library/essential-components/BellumTextBox";
import { BellumStepIndicator } from "./library/essential-components/BellumStepIndicator";
import { BellumDropdown } from "./library/essential-components/BellumDropdown";
import { BellumLine } from "./library/essential-components/BellumLine"; // New Import
import { Ghost, Settings, Calendar as CalendarIcon, User, ChevronRight } from "lucide-react";

function App() {
  const [volume, setVolume] = useState(50);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [category, setCategory] = useState(["personal"]); 

  const totalSteps = 4;
  const categoryOptions = [
    { label: "Personal", value: "personal" },
    { label: "Work", value: "work" },
    { label: "Urgent", value: "urgent" },
  ];

  const handleNextStep = () => {
    if (activeStep < totalSteps - 1) setActiveStep(activeStep + 1);
  };

  return (
    <Center p="10" minH="100vh" bg="gray.50">
      <VStack gap="8" width="450px" bg="white" p="8" borderRadius="xl" shadow="md">
        
        {/* Step Indicator */}
        <Box width="100%">
          <BellumStepIndicator totalSteps={totalSteps} currentStep={activeStep} />
        </Box>

        {/* Header */}
        <VStack gap="2">
          <BellumIcon icon={Ghost} color="purple" size={60} />
          <BellumText type="h1">Bellum Dashboard</BellumText>
        </VStack>

        <BellumLine thickness={2} /> {/* Using your new Line component */}

        {/* Profile Section */}
        <Box width="100%">
          <HStack gap="2" mb="4">
            <BellumIcon icon={User} size={20} />
            <BellumText type="h2">Profile Setup</BellumText>
          </HStack>
          
          <VStack gap="4" align="stretch">
            <BellumTextBox 
              label="Display Name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              helperText={name ? `Welcome, ${name}!` : "Required to continue."}
            />
            <BellumDropdown 
              label="Account Category"
              options={categoryOptions}
              value={category}
              onValueChange={(details) => setCategory(details.value)}
              placeholder="Choose a category"
            />
          </VStack>
        </Box>

        <BellumLine thickness={1} />

        {/* Volume Section */}
        <Box width="100%">
          <VStack gap="3" align="stretch">
            <HStack justify="space-between">
               <BellumText type="body2">System Volume</BellumText>
               <BellumText type="body2" color="#003DAC">{volume}%</BellumText>
            </HStack>
            <BellumSlider value={volume} onChange={(val) => setVolume(val)} color="purple" />
          </VStack>
        </Box>

        <BellumLine thickness={1} />

        {/* Calendar Section */}
        <VStack gap="4" width="100%">
          <HStack gap="2" width="100%">
            <BellumIcon icon={CalendarIcon} size={20} />
            <BellumText type="h2">Schedule Event</BellumText>
          </HStack>
          <BellumCalendar value={date} onValueChange={(details) => setDate(details.value[0])} />
        </VStack>

        {/* Button */}
        <Button 
          bg="#003DAC" 
          color="white"
          _hover={{ bg: "#002a7a" }}
          width="full" 
          py="6"
          onClick={handleNextStep}
          disabled={!name}
        >
          Continue to Step {activeStep + 2} <ChevronRight size={18} />
        </Button>

        <BellumIcon icon={Settings} color="gray" size={24} />
      </VStack>
    </Center>
  );
}

export default App;
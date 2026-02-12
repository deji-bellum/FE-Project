import { useState } from "react";
import { Center, VStack, HStack, Box, Separator, Button } from "@chakra-ui/react";
import { BellumText } from "./library/essential-components/BellumText";
import { BellumIcon } from "./library/essential-components/BellumIcon";
import { BellumSlider } from "./library/essential-components/BellumSlider";
import { BellumCalendar } from "./library/essential-components/BellumCalendar";
import { BellumTextBox } from "./library/essential-components/BellumTextBox";
import { BellumStepIndicator } from "./library/essential-components/BellumStepIndicator";
import { Ghost, Settings, Calendar as CalendarIcon, User, ChevronRight } from "lucide-react";

function App() {
  // --- State Management ---
  const [volume, setVolume] = useState(50);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  // --- Logic ---
  const handleNextStep = () => {
    if (activeStep < totalSteps - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Center p="10" minH="100vh" bg="gray.50">
      <VStack gap="8" width="450px" bg="white" p="8" borderRadius="xl" shadow="md">
        
        {/* 1. Progress Section */}
        <Box width="100%">
          <BellumStepIndicator 
            totalSteps={totalSteps} 
            currentStep={activeStep} 
          />
        </Box>

        {/* 2. Header Section */}
        <VStack gap="2">
          <BellumIcon icon={Ghost} color="purple" size={60} />
          <BellumText type="h1">Bellum Dashboard</BellumText>
        </VStack>

        <Separator />

        {/* 3. Profile Section (Text Box) */}
        <Box width="100%">
          <HStack gap="2" mb="4">
            <BellumIcon icon={User} size={20} />
            <BellumText type="h2">Profile Setup</BellumText>
          </HStack>
          <BellumTextBox 
            label="Display Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText={name ? `Welcome, ${name}!` : "Required to continue."}
          />
        </Box>

        {/* 4. Controls Section (Slider) */}
        <Box width="100%">
          <VStack gap="3" align="stretch">
            <HStack justify="space-between">
               <BellumText type="body2">System Volume</BellumText>
               <BellumText type="body2" color="purple.600">{volume}%</BellumText>
            </HStack>
            <BellumSlider 
              value={volume} 
              onChange={(val) => setVolume(val)} 
              color="purple" 
            />
          </VStack>
        </Box>

        <Separator />

        {/* 5. Date Section (Calendar) */}
        <VStack gap="4" width="100%">
          <HStack gap="2" width="100%">
            <BellumIcon icon={CalendarIcon} size={20} />
            <BellumText type="h2">Schedule Event</BellumText>
          </HStack>
          <BellumCalendar 
            value={date} 
            onValueChange={(details) => setDate(details.value[0])} 
          />
        </VStack>

        {/* 6. Action Button */}
        <Button 
          colorScheme="purple" 
          width="full" 
          onClick={handleNextStep}
          disabled={!name} // User must type a name to click next
        >
          Next Step <ChevronRight size={18} />
        </Button>

        <BellumIcon icon={Settings} color="gray" size={24} />
      </VStack>
    </Center>
  );
}

export default App;
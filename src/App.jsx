import { useState } from "react";
import { Center, VStack, HStack, Box } from "@chakra-ui/react";
import { BellumText } from "./library/essential-components/BellumText";
import { BellumIcon } from "./library/essential-components/BellumIcon";
import { BellumSlider } from "./library/essential-components/BellumSlider";
import { BellumCalendar } from "./library/essential-components/BellumCalendar";
import { BellumTextBox } from "./library/essential-components/BellumTextBox";
import { BellumStepIndicator } from "./library/essential-components/BellumStepIndicator";
import { BellumDropdown } from "./library/essential-components/BellumDropdown";
import { BellumLine } from "./library/essential-components/BellumLine";
import { BellumRadioButton } from "./library/essential-components/BellumRadioButton";
import { BellumButton } from "./library/essential-components/BellumButton";

// Import your new Existential Component
import { BellumFileBox } from "./existential/non-pages/BellumFileBox"; 

import { Ghost, Settings, Calendar as CalendarIcon, User, ChevronRight, Bell, FolderOpen } from "lucide-react";

function App() {
  const [volume, setVolume] = useState(50);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [category, setCategory] = useState(["personal"]); 
  const [notifyMethod, setNotifyMethod] = useState("email");

  const handleNextStep = () => {
    if (activeStep < 3) setActiveStep(activeStep + 1);
  };

  return (
    <Center p="10" minH="100vh" bg="gray.50">
      <VStack gap="8" width="500px" bg="white" p="8" borderRadius="2xl" shadow="xl">
        
        <Box width="100%">
          <BellumStepIndicator totalSteps={4} currentStep={activeStep} />
        </Box>

        <VStack gap="2">
          <BellumIcon icon={Ghost} color="purple" size={50} />
          <BellumText type="h1">Bellum Dashboard</BellumText>
        </VStack>

        <BellumLine thickness={2} />

        {/* --- NEW SECTION: File Box --- */}
        <Box width="100%">
          <HStack gap="2" mb="4">
            <BellumIcon icon={FolderOpen} size={20} />
            <BellumText type="h2">Available Resources</BellumText>
          </HStack>
          
          <Center>
            {/* Using the composite component */}
            <BellumFileBox 
              title="Key performance" 
              fileSize="52mb" 
            />
          </Center>
        </Box>

        <BellumLine thickness={1} />

        {/* Profile Setup */}
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
            />
            <BellumDropdown 
              label="Category"
              options={[{label: "Work", value: "work"}, {label: "Personal", value: "personal"}]}
              value={category}
              onValueChange={(d) => setCategory(d.value)}
            />
          </VStack>
        </Box>

        <BellumLine thickness={1} />

        {/* Notification Preferences */}
        <Box width="100%">
          <HStack gap="2" mb="3">
            <BellumIcon icon={Bell} size={20} />
            <BellumText type="h2">Notifications</BellumText>
          </HStack>
          <BellumRadioButton 
            options={[{label: "Email", value: "email"}, {label: "SMS", value: "sms"}]}
            value={notifyMethod}
            onValueChange={(d) => setNotifyMethod(d.value)}
            orientation="horizontal"
          />
        </Box>

        <BellumLine thickness={1} />

        <BellumButton 
          variant="Primary" 
          size="Large" 
          width="full"
          content={activeStep === 3 ? "Complete Setup" : "Continue to Next Step"}
          disabled={!name}
          onClick={handleNextStep}
        />

        <BellumIcon icon={Settings} color="gray" size={24} />
      </VStack>
    </Center>
  );
}

export default App;
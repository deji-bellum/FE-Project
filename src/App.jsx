import { useState } from "react";
import { Center, VStack, HStack, Box, Flex } from "@chakra-ui/react";
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

// Existential Components
import { BellumFileBox } from "./existential/non-pages/BellumFileBox"; 
import { BellumFileSidebar } from "./existential/non-pages/BellumFileSidebar";

import { Ghost, Settings, Calendar as CalendarIcon, User, Bell, FolderOpen } from "lucide-react";

function App() {
  // --- Navigation State ---
  const [page, setPage] = useState(1);

  // --- Form State ---
  const [name, setName] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [volume, setVolume] = useState(50);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(["personal"]); 
  const [notifyMethod, setNotifyMethod] = useState("email");

  // --- Screen 1: The Dashboard ---
  const DashboardScreen = (
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

        <BellumButton 
          variant="Primary" 
          size="Large" 
          width="full"
          content="Go to File Preview"
          disabled={!name}
          onClick={() => setPage(2)} 
        />
      </VStack>
    </Center>
  );

  // --- Screen 2: File Preview with Sidebar ---
  const FilePreviewScreen = (
    <Flex minH="100vh" bg="white" align="flex-start" overflowY="auto">
      {/* Sidebar pinned to the left with your specific 1098px height logic */}
      <BellumFileSidebar />
      
      {/* Main Content Area */}
      <Center flex="1" bg="gray.50" p="10" minH="1098px">
        <VStack gap="10">
          <BellumText type="h1">Selected Resource</BellumText>
          
          {/* File Box Composite Component */}
          <BellumFileBox title="Key performance" fileSize="52mb" />
          
          <BellumButton 
            variant="Secondary" 
            size="Medium"
            content="Back to Dashboard" 
            onClick={() => setPage(1)} 
          />
        </VStack>
      </Center>
    </Flex>
  );

  // --- Final Render Logic ---
  return (
    <>
      {page === 1 ? DashboardScreen : FilePreviewScreen}
    </>
  );
}

export default App;
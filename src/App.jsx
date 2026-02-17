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
import { BellumAuthSidebar } from "./existential/non-pages/BellumAuthSidebar";

import { Ghost, Settings, User, Bell } from "lucide-react";

function App() {
  // --- Navigation State ---
  const [page, setPage] = useState(0);

  // --- Form State ---
  const [name, setName] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [category, setCategory] = useState(["personal"]); 
  const [notifyMethod, setNotifyMethod] = useState("email");

  // --- Screen 0: Auth Flow ---
  const AuthScreen = (
    <Flex minH="100vh" width="100vw" bg="white">
      <BellumAuthSidebar />
      <Center flex="1" p="20">
        <VStack gap="8" width="400px" align="stretch">
          <VStack align="flex-start" gap="2">
            <BellumText type="h1">Welcome to Bellum</BellumText>
            <BellumText type="body2" color="gray.600">
              Enter your name to begin the setup dashboard.
            </BellumText>
          </VStack>
          <BellumTextBox 
            label="Name or Username" 
            placeholder="e.g. Alex" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <BellumButton 
            variant="Primary" 
            size="Large" 
            width="full"
            content="Start Dashboard"
            disabled={!name}
            onClick={() => setPage(1)} 
          />
        </VStack>
      </Center>
    </Flex>
  );

  // --- Screen 1: The Dashboard (Now with Scrolling) ---
  const DashboardScreen = (
    <Box 
      height="100vh" 
      width="100vw" 
      overflowY="auto" // This enables scrolling
      bg="gray.50"
      py="10" // Padding at top and bottom so the card isn't flush against the edge
    >
      <Center>
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

          {/* Added more spacers/content here to demonstrate scrolling if needed */}
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
            content="Go to File Preview"
            onClick={() => setPage(2)} 
          />

          <BellumIcon icon={Settings} color="gray" size={24} />
        </VStack>
      </Center>
    </Box>
  );

  // --- Screen 2: File Preview with Sidebar ---
  const FilePreviewScreen = (
    <Flex minH="100vh" bg="white" align="flex-start" overflowY="auto">
      <BellumFileSidebar />
      <Center flex="1" bg="gray.50" p="10" minH="1098px">
        <VStack gap="10">
          <BellumText type="h1">Selected Resource</BellumText>
          <BellumFileBox title="Key performance" fileSize="52mb" />
          <BellumButton 
            variant="Secondary" 
            size="Medium"
            content="Logout to Auth" 
            onClick={() => setPage(0)} 
          />
        </VStack>
      </Center>
    </Flex>
  );

  return (
    <>
      {page === 0 && AuthScreen}
      {page === 1 && DashboardScreen}
      {page === 2 && FilePreviewScreen}
    </>
  );
}

export default App;
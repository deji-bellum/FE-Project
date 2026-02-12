import { useState } from "react";
import { Center, VStack, HStack, Box, Separator } from "@chakra-ui/react";
import { BellumText } from "./library/essential-components/BellumText";
import { BellumIcon } from "./library/essential-components/BellumIcon";
import { BellumSlider } from "./library/essential-components/BellumSlider";
import { BellumCalendar } from "./library/essential-components/BellumCalendar";
import { Ghost, Settings, Calendar as CalendarIcon } from "lucide-react";

function App() {
  const [volume, setVolume] = useState(50);
  const [date, setDate] = useState(""); // Simplified to a string

  return (
    <Center p="10" minH="100vh">
      <VStack gap="10" width="400px">
        {/* Header Section */}
        <VStack gap="2">
          <BellumIcon icon={Ghost} color="purple" size={60} />
          <BellumText type="h1">Bellum Dashboard</BellumText>
        </VStack>

        {/* Slider Section */}
        <Box width="100%">
          <VStack gap="3" align="stretch">
            <HStack justify="space-between">
               <BellumText type="body2">System Volume</BellumText>
               <BellumText type="body2">{volume}%</BellumText>
            </HStack>
            <BellumSlider 
              value={volume} 
              onChange={(val) => setVolume(val)} 
              color="purple"
            />
          </VStack>
        </Box>

        <Separator />

        {/* Calendar Section */}
        <VStack gap="4" width="100%">
          <HStack gap="2">
            <BellumIcon icon={CalendarIcon} size={20} />
            <BellumText type="h2">Event Planner</BellumText>
          </HStack>
          
          <BellumCalendar 
            value={date} 
            onValueChange={(details) => setDate(details.value[0])} 
          />

          <Box p="4" borderRadius="md" width="100%" textAlign="center" border="1px solid" borderColor="gray.200">
            <BellumText type="body1">
              {date ? `Scheduled for: ${date}` : "Pick a date to begin"}
            </BellumText>
          </Box>
        </VStack>

        <BellumIcon icon={Settings} color="gray" size={24} />
      </VStack>
    </Center>
  );
}

export default App;
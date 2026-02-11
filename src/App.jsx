import { useState } from "react";
import { Center, VStack, Box } from "@chakra-ui/react";
import { BellumText } from "./library/essential-components/BellumText";
import { BellumIcon } from "./library/essential-components/BellumIcon";
import { BellumSlider } from "./library/essential-components/BellumSlider";
import { Ghost, Settings } from "lucide-react";

function App() {
  // 1. Create the state to track the slider's value
  const [volume, setVolume] = useState(50);

  return (
    <Center h="100vh" p="4">
      <VStack gap="8" width="300px">
        <BellumIcon icon={Ghost} color="purple" size={60} />
        
        <BellumText type="h1">Bellum Control</BellumText>

        {/* 2. Container for our Slider logic */}
        <Box width="100%">
          <VStack gap="2" align="stretch">
            <BellumText type="body2">Volume: {volume}%</BellumText>
            
            <BellumSlider 
              min={0} 
              max={100} 
              value={volume} 
              onChange={(val) => setVolume(val)} 
              color="purple.500"
            />
          </VStack>
        </Box>

        <BellumIcon icon={Settings} color="gray" size={24} />
      </VStack>
    </Center>
  );
}

export default App;
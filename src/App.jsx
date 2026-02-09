import { Center, VStack } from "@chakra-ui/react";
// This is the new component we built together!
import { BellumText } from "./library/essential-components/BellumText";

function App() {
  return (
    <Center h="100vh">
      <VStack gap="6">
        {/* We are now using your custom 'type' logic */}
        <BellumText type="h1" color="teal">
          Bellum Project
        </BellumText>
        
        <BellumText type="body1">
          The wrapper approach is officially working.
        </BellumText>
        
        <BellumText type="body2" color="gray.500">
          This is a smaller Body 2 text.
        </BellumText>
      </VStack>
    </Center>
  );
}

export default App;
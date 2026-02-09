import { Center, VStack } from "@chakra-ui/react";
import { BellumText } from "./library/essential-components/BellumText";
import { BellumIcon } from "./library/essential-components/BellumIcon";
// Import whichever icons you want to use here
import { Ghost, Flame } from "lucide-react";

function App() {
  return (
    <Center h="100vh">
      <VStack gap="6">
        <BellumIcon icon={Ghost} color="purple" size={60} />
        
        <BellumText type="h1" color="teal">
          Bellum Project
        </BellumText>
        
        <VStack gap="1">
          <BellumIcon icon={Flame} color="orange" size={24} />
          <BellumText type="body1">
            Pass-through icons are working!
          </BellumText>
        </VStack>
      </VStack>
    </Center>
  );
}

export default App;
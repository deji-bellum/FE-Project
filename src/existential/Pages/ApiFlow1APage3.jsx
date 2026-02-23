import { Box, VStack, HStack, Flex, Center, Link } from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; // Fix: Import from emotion instead of chakra
import { CheckCircle } from "lucide-react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumSidebar } from "../non-pages/BellumSidebar";

// Custom animation for the success checkmark
const popIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`;

export const ApiFlow1APage3 = () => {
  const apiLink = "https://belluminject/d1r12h2n";
  const animation = `${popIn} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both`;

  return (
    <Flex height="100vh" width="100vw" overflow="hidden">
      {/* Sidebar Component */}
      <BellumSidebar />

      {/* Main Content Area */}
      <Box flex="1" bg="white" overflowY="auto">
        <Center height="100%">
          <VStack gap="8" textAlign="center" maxW="600px" px="6">
            
            {/* Animated Icon 001 */}
            <Box 
              animation={animation} 
              bg="#003DAC" 
              borderRadius="full" 
              p="6"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CheckCircle size={80} color="white" strokeWidth={2.5} />
            </Box>

            {/* Success Message (Text 007, 008, 009) */}
            <VStack gap="2">
              <BellumText type="h1" style={{ fontSize: "40px", fontWeight: "800" }}>
                SUCCESS!
              </BellumText>
              
              <BellumText type="body1" color="gray.600">
                You have successfully created an API.
              </BellumText>

              <HStack gap="1" wrap="wrap" justify="center">
                <BellumText type="body1" color="gray.600">
                  Here is your link to the API : 
                </BellumText>
                <Link 
                  href={apiLink} 
                  isExternal 
                  color="#003DAC" 
                  fontWeight="600"
                  _hover={{ textDecoration: "underline" }}
                >
                  {apiLink}
                </Link>
              </HStack>
            </VStack>

          </VStack>
        </Center>
      </Box>
    </Flex>
  );
};
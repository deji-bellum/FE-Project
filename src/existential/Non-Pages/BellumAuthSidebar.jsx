import { VStack, Box, Image, Center } from "@chakra-ui/react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumIcon } from "../../library/essential-components/BellumIcon";
import { Cloud } from "lucide-react"; 

export const BellumAuthSidebar = ({
  headline = "Get all the data your team needs in one place with Bellum."
}) => {
  return (
    <Box 
      width="45vw" 
      height="1024px" // Specific height requested
      bg="#000B26" // Deep navy blue from your image
      p="12"
      position="relative"
      overflow="hidden"
      flexShrink="0"
    >
      <VStack height="100%" align="stretch" gap="16">
        
        {/* Bellum Logo Header */}
        <Box alignSelf="flex-end" display="flex" alignItems="center" gap="3">
          <Center bg="white" p="2" borderRadius="full">
            <BellumIcon icon={Cloud} size={20} color="#003DAC" />
          </Center>
          <BellumText 
            type="h2" 
            color="white" 
            style={{ fontWeight: "700", fontSize: "24px" }}
          >
            Bellum
          </BellumText>
        </Box>

        {/* Marketing Text (Text 223) */}
        <Box pr="6">
           <BellumText 
            type="h1" 
            color="white" 
            style={{ 
              fontSize: "64px", 
              lineHeight: "1.1", 
              fontWeight: "700",
              letterSpacing: "-0.02em"
            }}
          >
            {headline}
          </BellumText>
        </Box>

        {/* Product Image (Image 001) */}
        <Center mt="auto" position="relative" bottom="-60px">
          <Image 
            src={new URL('../../assets/Rectangle.png', import.meta.url).href} 
            alt="Bellum Dashboard Preview"
            borderRadius="2xl"
            shadow="2xl"
            maxWidth="110%" // Allows it to bleed slightly off center for effect
           />
        </Center>

      </VStack>
    </Box>
  );
};
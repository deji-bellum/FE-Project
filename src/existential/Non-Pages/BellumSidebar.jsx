import { VStack, HStack, Box, Flex } from "@chakra-ui/react";
import { BellumText } from "../../library/essential-components/BellumText";
import { BellumLine } from "../../library/essential-components/BellumLine";
import { DataSection, AppSection, ClusterSection, OthersSection } from "./SidebarSections";
import { Database } from "lucide-react";

export const BellumSidebar = () => {
  return (
    <Flex 
      as="nav"
      width="280px" 
      height="100vh" 
      bg="#000B26" 
      p="8" 
      flexShrink="0" 
      flexDirection="column"
      position="sticky"
      top="0"
    >
      {/* 1. Header: Logo (Fixed at the top) */}
      <Box mb="10">
        <HStack gap="3">
          <Box bg="white" p="1.5" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Database size={18} color="#000B26" />
          </Box>
          <BellumText type="h2" color="white" style={{ fontSize: "22px", fontWeight: "700" }}>
            Bellum
          </BellumText>
        </HStack>
      </Box>

      {/* 2. Entire Scrollable Area (Sections + Others) */}
      <Box 
        flex="1" 
        overflowY="auto" 
        pr="2"
        css={{
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': { background: '#ffffff20', borderRadius: '10px' },
        }}
      >
        <VStack align="flex-start" gap="8" width="100%">
          <DataSection />
          <BellumLine thickness={1} color="rgba(255, 255, 255, 0.1)" />
          
          <AppSection />
          <BellumLine thickness={1} color="rgba(255, 255, 255, 0.1)" />
          
          <ClusterSection />
          
          {/* Now including Others Section in the scroll flow */}
          <BellumLine thickness={1} color="rgba(255, 255, 255, 0.1)" />
          <OthersSection />
        </VStack>
      </Box>
    </Flex>
  );
};
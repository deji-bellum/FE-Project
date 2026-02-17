import React from "react";
import { Flex, Center, VStack } from "@chakra-ui/react";
import { BellumAuthSidebar } from "../existential/non-pages/BellumAuthSidebar";
import { BellumText } from "../library/essential-components/BellumText";
import { BellumTextBox } from "../library/essential-components/BellumTextBox";
import { BellumButton } from "../library/essential-components/BellumButton";

export default {
  title: "Existential/Non-Pages/BellumAuthSidebar",
  component: BellumAuthSidebar,
  parameters: {
    layout: "fullscreen", // Ensures the 100vh height fills the Storybook canvas
  },
};

// 1. Basic Component Preview
export const Default = () => <BellumAuthSidebar />;

// 2. Full Layout Simulation (How it looks on a real page)
export const AuthPageLayout = () => (
  <Flex minH="100vh" width="100vw">
    {/* The Sidebar component */}
    <BellumAuthSidebar />

    {/* Simulated Login Form Area */}
    <Center flex="1" bg="white" p="10">
      <VStack gap="8" width="400px" align="stretch">
        <VStack align="flex-start" gap="2">
          <BellumText type="h1">Login</BellumText>
          <BellumText type="body2" color="gray.600">
            Enter your credentials to access the Bellum dashboard.
          </BellumText>
        </VStack>

        <VStack gap="4" align="stretch">
          <BellumTextBox label="Email Address" placeholder="name@company.com" />
          <BellumTextBox label="Password" type="password" placeholder="••••••••" />
        </VStack>

        <BellumButton 
          variant="Primary" 
          size="Large" 
          content="Sign In" 
          width="full" 
        />
        
        <Center>
          <BellumText type="body2" color="#003DAC">
            Forgot password?
          </BellumText>
        </Center>
      </VStack>
    </Center>
  </Flex>
);
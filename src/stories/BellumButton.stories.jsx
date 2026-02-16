import React from "react";
import { BellumButton } from "../library/essential-components/BellumButton";
import { VStack, HStack } from "@chakra-ui/react";

export default {
  title: "Components/BellumButton",
  component: BellumButton,
};

export const Gallery = () => (
  <VStack gap="8" p="10" align="flex-start">
    <HStack gap="4">
      <BellumButton variant="Primary" size="Large" content="Primary Large" />
      <BellumButton variant="Primary" size="Medium" content="Primary Medium" />
      <BellumButton variant="Primary" size="Small" content="Primary Small" />
    </HStack>
    
    <HStack gap="4">
      <BellumButton variant="Secondary" size="Large" content="Secondary Large" />
      <BellumButton variant="Secondary" size="Medium" content="Secondary Medium" />
      <BellumButton variant="Secondary" size="Small" content="Secondary Small" />
    </HStack>

    <HStack gap="4">
      <BellumButton variant="Primary" disabled content="Disabled Button" />
      <BellumButton variant="Primary" selected content="Selected State" />
    </HStack>
  </VStack>
);
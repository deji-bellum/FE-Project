import React from "react";
import { BellumLine } from "../library/essential-components/BellumLine";
import { VStack, HStack, Box } from "@chakra-ui/react";

export default {
  title: "Components/BellumLine",
  component: BellumLine,
};

export const Gallery = () => (
  <VStack gap="10" p="10" align="flex-start">
    {/* Thick Horizontal Line */}
    <Box width="100%">
      <p>Thick Horizontal (5px)</p>
      <BellumLine thickness={5} length="100%" />
    </Box>

    {/* Vertical Line in an HStack */}
    <HStack height="100px" gap="5">
      <p>Left Side</p>
      <BellumLine orientation="vertical" thickness={2} length="80px" color="blue.500" />
      <p>Right Side</p>
    </HStack>
  </VStack>
);
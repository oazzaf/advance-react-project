import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Shao!";
const bio1 = "A full-stack developer";
const bio2 = "specialised in React and React Native";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={25}>
      <VStack spacing={4}>
        <Avatar src="https://i.pravatar.cc/400?img=62" size="2x1"/>
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>  
    </VStack>

  </FullScreenSection>
);

export default LandingSection;

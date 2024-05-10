import { Box, Flex, Input, Button, VStack, Text, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex height="100vh" overflow="hidden">
      <Box width={isMobile ? "100%" : "30%"} bg="gray.100" p={4}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Contacts</Text>
          <Button variant="ghost">Contact 1</Button>
          <Button variant="ghost">Contact 2</Button>
          <Button variant="ghost">Contact 3</Button>
          <Button variant="ghost">Contact 4</Button>
        </VStack>
      </Box>
      <Flex direction="column" flex="1" p={4}>
        <VStack spacing={4} flex="1" overflowY="auto">
          <Text alignSelf="flex-start" fontSize="lg">Chat with Contact 1</Text>
          <Flex direction="column" flex="1" overflowY="auto" bg="white" p={4} shadow="md">
            <Text mb={4}>Hello!</Text>
            <Text mb={4} alignSelf="flex-end" bg="blue.100" p={2}>Hi there!</Text>
            <Text mb={4}>How are you?</Text>
          </Flex>
        </VStack>
        <Flex mt={4}>
          <Input placeholder="Type a message" />
          <Button ml={2}>Send</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
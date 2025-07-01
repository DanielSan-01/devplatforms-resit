import React from 'react';
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';

function HowTo() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <Heading size="xl" mb={8}>
          How To Page
        </Heading>
        {/* Page content will go here */}
      </Container>
    </Box>
  );
}

export default HowTo; 
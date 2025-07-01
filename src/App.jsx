import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  VStack,
  Text,
  Badge,
  Avatar,
  AvatarBadge,
  Switch,
  useColorMode,
  useColorModeValue,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Alert,
  AlertIcon,
  AlertTitle,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
  SimpleGrid,
  Image,
  Stack,
  useToast,
  Link
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
import HowTo from './pages/HowTo.jsx';

// Navigation Component
function Navigation() {
  const location = useLocation();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box bg={bgColor} borderBottom="1px" borderColor={borderColor} mb={8}>
      <Container maxW="container.xl">
        <HStack spacing={8} py={4}>
          <Link
            as={RouterLink}
            to="/"
            fontWeight={location.pathname === '/' ? 'bold' : 'normal'}
            color={location.pathname === '/' ? 'blue.500' : 'inherit'}
            _hover={{ color: 'blue.500' }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/howto"
            fontWeight={location.pathname === '/howto' ? 'bold' : 'normal'}
            color={location.pathname === '/howto' ? 'blue.500' : 'inherit'}
            _hover={{ color: 'blue.500' }}
          >
            How To
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}

// Home Page Component (existing content)
function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [progress, setProgress] = useState(45);
  const toast = useToast();

  // Color mode values - automatically switches between light/dark
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const showToast = () => {
    toast({
      title: "Account created!",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        
        {/* Header with Dark Mode Toggle */}
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="xl" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
            Chakra UI Demo
          </Heading>
          <HStack>
            <Text>Dark Mode</Text>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </HStack>
        </Flex>

        {/* Why Chakra is Amazing - Quick Examples */}
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} mb={8}>
          
          {/* 1. Responsive Cards with Zero CSS */}
          <Card bg={cardBg} shadow="lg">
            <CardHeader>
              <Heading size="md">🚀 Zero CSS Required</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={3}>
                <Text>This entire layout uses ZERO custom CSS!</Text>
                <HStack>
                  <Badge colorScheme="green">Responsive</Badge>
                  <Badge colorScheme="blue">Accessible</Badge>
                  <Badge colorScheme="purple">Beautiful</Badge>
                </HStack>
                <Button colorScheme="teal" size="sm" onClick={showToast}>
                  Show Toast
                </Button>
              </VStack>
            </CardBody>
          </Card>

          {/* 2. Built-in Dark Mode */}
          <Card bg={cardBg} shadow="lg">
            <CardHeader>
              <Heading size="md">🌙 Dark Mode Built-in</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={3}>
                <Text>Colors automatically adapt to theme!</Text>
                <Progress value={progress} colorScheme="pink" size="lg" w="100%" />
                <HStack w="100%">
                  <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-</Button>
                  <Text fontSize="sm">{progress}%</Text>
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+</Button>
                </HStack>
              </VStack>
            </CardBody>
          </Card>

          {/* 3. Advanced Components with Minimal Code */}
          <Card bg={cardBg} shadow="lg">
            <CardHeader>
              <Heading size="md">⚡ Complex Components</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={3}>
                <HStack>
                  <Avatar size="md" name="John Doe" src="https://bit.ly/dan-abramov">
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                  <Box>
                    <Text fontWeight="bold">Dan Abramov</Text>
                    <Text fontSize="sm" color="gray.500">Online</Text>
                  </Box>
                </HStack>
                <Button onClick={onOpen} colorScheme="blue" w="100%">
                  Open Modal
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </Grid>

        {/* Stats Dashboard - Shows Professional Look */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardHeader>
            <Heading size="lg">📊 Professional Dashboard (5 minutes to build)</Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
              <Stat>
                <StatLabel>Users</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Revenue</StatLabel>
                <StatNumber>$45,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  9.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Orders</StatLabel>
                <StatNumber>1,670</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  4.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Conversion</StatLabel>
                <StatNumber>3.45%</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  12.05%
                </StatHelpText>
              </Stat>
            </SimpleGrid>
          </CardBody>
        </Card>

        {/* Interactive Elements */}
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={6} mb={8}>
          
          {/* Search and Alerts */}
          <Card bg={cardBg} shadow="lg">
            <CardHeader>
              <Heading size="md">🔍 Interactive Elements</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="Search anything..." />
                </InputGroup>
                
                <Alert status="success" borderRadius="md">
                  <AlertIcon />
                  <AlertTitle>Success!</AlertTitle>
                  Built-in alert styles
                </Alert>
                
                <Alert status="warning" borderRadius="md">
                  <AlertIcon />
                  <AlertTitle>Warning!</AlertTitle>
                  Multiple variants available
                </Alert>
              </VStack>
            </CardBody>
          </Card>

          {/* Product Card Example */}
          <Card bg={cardBg} shadow="lg">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Product"
              borderTopRadius="md"
              h="200px"
              objectFit="cover"
            />
            <CardBody>
              <Stack spacing={3}>
                <Heading size="md">Modern Sofa</Heading>
                <HStack>
                  <HStack>
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="yellow.400" />
                    <StarIcon color="gray.300" />
                  </HStack>
                  <Text color="gray.500">(123)</Text>
                </HStack>
                <Text color="blue.600" fontSize="2xl">$399</Text>
                <Tooltip label="Add to cart" hasArrow>
                  <Button colorScheme="blue" variant="solid">
                    Buy Now
                  </Button>
                </Tooltip>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        {/* Why Choose Chakra - Summary */}
        <Card bg={cardBg} shadow="lg" border="2px solid" borderColor="blue.200">
          <CardBody>
            <VStack spacing={4}>
              <Heading size="lg" color="blue.500">Why Developers Love Chakra UI</Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
                <VStack>
                  <Text fontSize="2xl">⚡</Text>
                  <Text fontWeight="bold">Lightning Fast</Text>
                  <Text textAlign="center" fontSize="sm">Build UIs 10x faster with pre-built components</Text>
                </VStack>
                <VStack>
                  <Text fontSize="2xl">🎨</Text>
                  <Text fontWeight="bold">Beautiful by Default</Text>
                  <Text textAlign="center" fontSize="sm">Professional designs without hiring a designer</Text>
                </VStack>
                <VStack>
                  <Text fontSize="2xl">♿</Text>
                  <Text fontWeight="bold">Accessible</Text>
                  <Text textAlign="center" fontSize="sm">WAI-ARIA compliant components out of the box</Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </CardBody>
        </Card>

        {/* Modal Example */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>🎉 Modal in 3 Lines of Code!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Text>This modal required almost no setup!</Text>
                <Alert status="info">
                  <AlertIcon />
                  Accessible, responsive, and beautiful by default
                </Alert>
                <Progress value={80} colorScheme="green" w="100%" />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Amazing!
              </Button>
              <Button variant="ghost" onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Container>
    </Box>
  );
}

// Main App Component with Router
function App() {
  return (
    <Router basename="/devplatforms-resit">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/howto" element={<HowTo />} />
      </Routes>
    </Router>
  );
}

export default App; 
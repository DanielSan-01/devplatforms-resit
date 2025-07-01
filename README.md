this markup doc aims to entertain and inform you about chackra UI and its key features and capabilities. there will also be a tutorial on how to get started with react and chackra. in the git pages link you can navigate to the how to section to see the code and get the tutorial https://danielsan-01.github.io/devplatforms-resit/howto

### What is Chakra UI?

chakra UI is a modern, open-source component library built for React applications. It provides developers with a set of accessible and themeable components out of the box, enabling faster and more consistent UI development.

chakra emphasizes developer experience, accessibility, and customizability. All components are built with WAI-ARIA standards, meaning accessibility is baked in by default .

## KEY FEAUTERS

### **pre-built components**
includes everything from buttons, modals and forms - providing you with a comprehensive toolkit right out of the box.

### **theming system**
powerful theming engine to customize colours, fonts, breakpoints and more to match your brand/style system.

### **style props**
you can style these components directly. With this inline styling removes need for CSS files.

### **built-in responsiveness**
also easy to change different styles for different breakpoints across all devices.

### **accessibility**
best practices and proper ARIA attributes built into every component by default.

## how does this help you as a ceveloper?

### accessibility by default
Many component libraries ignore accessibility, leaving it to the developer. Chakra UI takes care of accessibility features like focus trapping, keyboard support, and ARIA roles. This saves time and improves usability.

### speeds up development
Developers don't have to reinvent UI elements from scratch. With components like `<Button>`, `<Input>`, `<Modal>`, and `<Flex>`, you can build entire interfaces with minimal setup.

**Example:**
```jsx
<Button colorScheme="blue">Click Me</Button>
```

### reduce boilerplate code
Instead of writing CSS classes or opening a separate CSS file, you apply styles directly via props. This keeps the code cleaner and easier to manage.

### encourages consistency
Using a shared theme and reusable components leads to a consistent UI without much effort — important when working in teams or across multiple pages.

chakra UI is an excellent choice for developers who want to build clean, accessible, and responsive user interfaces fast — without compromising on customizability. 

---

this tutorial will show you how fast and simple you can use chackra UI, this will just be a fresh repo with react. 

## project structure

here's how your project should be organized when we have followed the steps:

<details>
<summary><strong>Project Structure</strong> (click to expand)</summary>

```
your-project/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── index.jsx
    ├── App.jsx
    ├── pages/
    │   └── HowTo.jsx
    └── components/
        └── ui/
            ├── color-mode.jsx
            ├── provider.jsx
            ├── toaster.jsx
            └── tooltip.jsx
```

</details>

assuming you just have a code editor we will start with node to install everything 
```bash
npm install
```

when we have npm installed we can start building!

### first initialize a new project
```bash
npm init -y
```
### second install react core dependencies
```bash
npm install react react-dom
```
### third install chakra ui and ist required dependencies
```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

then you create a basic file structure src folder
inn root create index.html and add this very basic file structure and add this tp the html file

<details>
<summary><strong>index.html</strong> (click to expand)</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Chakra UI Demo - React Tutorial" />
    <title>Chakra UI Demo</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
```

</details>

src folder create index.jsx and add this to the jsx file 

<details>
<summary><strong>index.jsx</strong> (click to expand)</summary>

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
```

</details>


instead of going codeblock for codeblock ive generated a very simple demonstration of all the UI components inside each of the elements there is a explenation that shows or explains the element or why things like these are easy to build with chackra, I will be importing and showing a lot to give you a good scope of what cackra can do there will also be small comments in the code pretaing to the function they serve. 

create inside src/ App.jsx 

<details>
<summary><strong>App.jsx</strong> (click to expand)</summary>

```jsx
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
  useToast
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';

function App() {
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
              <Heading size="md">Zero CSS Required</Heading>
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
              <Heading size="md">Dark Mode Built-in</Heading>
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
              <Heading size="md">Complex Components</Heading>
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
            <Heading size="lg">Professional Dashboard (5 minutes to build)</Heading>
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
              <Heading size="md">Interactive Elements</Heading>
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
                  <Text fontSize="2xl">Lightning Fast</Text>
                  <Text fontWeight="bold">Build UIs 10x faster with pre-built components</Text>
                </VStack>
                <VStack>
                  <Text fontSize="2xl">Beautiful by Default</Text>
                  <Text fontWeight="bold">Professional designs without hiring a designer</Text>
                </VStack>
                <VStack>
                  <Text fontSize="2xl">Accessible</Text>
                  <Text fontWeight="bold">WAI-ARIA compliant components out of the box</Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </CardBody>
        </Card>

        {/* Modal Example */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal in 3 Lines of Code!</ModalHeader>
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

export default App;
```

</details>

create index.jsx and add this

<details>
<summary><strong>index.jsx</strong> (click to expand)</summary>

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

</details>

then we need a new folder src/components/ui
here we need 4 files
• color-mode-jsx
• provider.jsx
• toaster.jsx
• tooltip.jsx

<details>
<summary><strong>color-mode.jsx</strong> (click to expand)</summary>

```jsx
'use client'

import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'

import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange {...props} />
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = forcedTheme || resolvedTheme
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  return {
    colorMode: colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <ClientOnly fallback={<Skeleton boxSize='8' />}>
        <IconButton
          onClick={toggleColorMode}
          variant='ghost'
          aria-label='Toggle color mode'
          size='sm'
          ref={ref}
          {...props}
          css={{
            _icon: {
              width: '5',
              height: '5',
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  },
)

export const LightMode = React.forwardRef(function LightMode(props, ref) {
  return (
    <Span
      color='fg'
      display='contents'
      className='chakra-theme light'
      colorPalette='gray'
      colorScheme='light'
      ref={ref}
      {...props}
    />
  )
})

export const DarkMode = React.forwardRef(function DarkMode(props, ref) {
  return (
    <Span
      color='fg'
      display='contents'
      className='chakra-theme dark'
      colorPalette='gray'
      colorScheme='dark'
      ref={ref}
      {...props}
    />
  )
})
```

</details>

<details>
<summary><strong>provider.jsx</strong> (click to expand)</summary>

```jsx
'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
```

</details>

<details>
<summary><strong>toaster.jsx</strong> (click to expand)</summary>

```jsx
'use client'

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from '@chakra-ui/react'

export const toaster = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: '4' }}>
        {(toast) => (
          <Toast.Root width={{ md: 'sm' }}>
            {toast.type === 'loading' ? (
              <Spinner size='sm' color='blue.solid' />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap='1' flex='1' maxWidth='100%'>
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
```

</details>

<details>
<summary><strong>tooltip.jsx</strong> (click to expand)</summary>

```jsx
import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react'
import * as React from 'react'

export const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const {
    showArrow,
    children,
    disabled,
    portalled = true,
    content,
    contentProps,
    portalRef,
    ...rest
  } = props

  if (disabled) return children

  return (
    <ChakraTooltip.Root {...rest}>
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content ref={ref} {...contentProps}>
            {showArrow && (
              <ChakraTooltip.Arrow>
                <ChakraTooltip.ArrowTip />
              </ChakraTooltip.Arrow>
            )}
            {content}
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  )
})
```

</details>

with all the files ready to go we need a build tool like parcell or vite
i will use vite in this tutorial

to install vite
```bash
npm install vite @vitejs/plugin-react --save-dev
```

<details>
<summary><strong>package.json scripts</strong> (click to expand)</summary>

add scripts to package.json file
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

</details>

then run dev server
```bash
npm run dev
```

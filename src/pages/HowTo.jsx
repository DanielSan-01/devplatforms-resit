import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Collapse,
  useDisclosure,
  Button,
  Code,
  useColorModeValue,
  Divider,
  UnorderedList,
  ListItem,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Collapsible Code Block Component
const CollapsibleCodeBlock = ({ title, language, children, defaultOpen = false }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: defaultOpen });
  
  return (
    <Box mb={4}>
      <Button
        onClick={onToggle}
        variant="ghost"
        leftIcon={isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        fontWeight="bold"
        size="sm"
        mb={2}
      >
        {title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          as="pre"
          bg={useColorModeValue('gray.100', 'gray.800')}
          p={4}
          borderRadius="md"
          overflow="auto"
          fontSize="sm"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
          <Code colorScheme="gray" fontSize="sm" whiteSpace="pre-wrap">
            {children}
          </Code>
        </Box>
      </Collapse>
    </Box>
  );
};

function HowTo() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          
          {/* Header */}
          <Heading size="xl" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
            Chakra UI Tutorial & Guide
          </Heading>
          
          <Text fontSize="lg">
            this is my first project with charka and i have to say its going to be one of my goto tools for react. this markdown text is why thoughts and what ive learned about chakra. i will tell you about it and show you how to set it up in yor project
          </Text>

          {/* What is Chakra UI */}
          <Box>
            <Heading size="lg" mb={4}>What is Chakra UI?</Heading>
            <Text mb={4}>
              Chakra UI is basically a bunch of pre-made React components that look good and work well. 
              Instead of building buttons, forms, and modals from scratch every time, you just import them 
              and customize them however you want.
            </Text>
            <Text>
              The thing that really sets it apart is the accessibility stuff - everything works with 
              screen readers and keyboards by default. As someone working in Norway where accessibility 
              compliance is legally required, this is honestly a huge relief.
            </Text>
          </Box>

          {/* Key Features */}
          <Box>
            <Heading size="lg" mb={4}>The stuff that actually matters</Heading>
            <VStack spacing={4} align="stretch">
              
              <Box>
                <Heading size="md" fontWeight="bold">Components that just work</Heading>
                <Text>Buttons, modals, forms, navigation - basically everything you need without having to build it yourself. I used to spend hours making dropdown menus that worked properly... not anymore.</Text>
              </Box>

              <Box>
                <Heading size="md" fontWeight="bold">Easy theming</Heading>
                <Text>You can change colors, fonts, spacing, etc. without diving into CSS hell. Though honestly, their defaults look pretty good so I don't always bother.</Text>
              </Box>

              <Box>
                <Heading size="md" fontWeight="bold">Style with props</Heading>
                <Text>This felt weird at first, but now I love it. You style components right where you use them: `bg="red.500"` instead of hunting through CSS files.</Text>
              </Box>

              <Box>
                <Heading size="md" fontWeight="bold">Mobile-friendly by default</Heading>
                <Text>Responsive design without the headache. You can set different styles for different screen sizes pretty easily.</Text>
              </Box>

              <Box>
                <Heading size="md" fontWeight="bold">Accessibility that works</Heading>
                <Text>Focus management, ARIA labels, keyboard navigation - it's all handled automatically. This alone saves me so much time.</Text>
              </Box>
            </VStack>
          </Box>

          {/* How does this help developers */}
          <Box>
            <Heading size="lg" mb={4}>How does this help you as a developer?</Heading>
            
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading size="md" mb={2}>Accessibility by default</Heading>
                <Text>
                  Many component libraries ignore accessibility, leaving it to the developer. 
                  Chakra UI takes care of accessibility features like focus trapping, keyboard support, and ARIA roles. 
                  This saves time and improves usability.
                </Text>
              </Box>

              <Box>
                <Heading size="md" mb={2}>Speeds up development</Heading>
                <Text mb={2}>
                  Developers don't have to reinvent UI elements from scratch. 
                  With components like <Code>{'<Button>'}</Code>, <Code>{'<Input>'}</Code>, <Code>{'<Modal>'}</Code>, and <Code>{'<Flex>'}</Code>, 
                  you can build entire interfaces with minimal setup.
                </Text>
                <Text fontWeight="bold">Example:</Text>
                <Code p={2} display="block" bg={useColorModeValue('gray.100', 'gray.800')}>
                  {'<Button colorScheme="blue">Click Me</Button>'}
                </Code>
              </Box>

              <Box>
                <Heading size="md" mb={2}>Reduce boilerplate code</Heading>
                <Text>
                  Instead of writing CSS classes or opening a separate CSS file, you apply styles directly via props. 
                  This keeps the code cleaner and easier to manage.
                </Text>
              </Box>

              <Box>
                <Heading size="md" mb={2}>Encourages consistency</Heading>
                <Text>
                  Using a shared theme and reusable components leads to a consistent UI without much effort — 
                  important when working in teams or across multiple pages.
                </Text>
              </Box>
            </VStack>

            <Alert status="info" mt={4}>
              <AlertIcon />
              Chakra UI is an excellent choice for developers who want to build clean, accessible, 
              and responsive user interfaces fast — without compromising on customizability.
            </Alert>
          </Box>

          {/* History */}
          <Box>
            <Heading size="lg" mb={4}>History</Heading>
            <Text>
              Chakra UI was created in 2019 by Segun Adebayo, a Nigerian software engineer, with the goal of building a simple and accessible component library for React. 
              The project gained rapid adoption due to its focus on developer experience and accessibility-first approach. Since its initial release, Chakra UI has evolved 
              through major versions, with version 2.0 introducing significant improvements to theming, performance, and TypeScript support. The library has grown from a 
              personal project to a widely-adopted solution used by thousands of developers worldwide.
            </Text>
          </Box>

          {/* Limitations */}
          <Box>
            <Heading size="lg" mb={4}>Limitations</Heading>
            <Text>
              While Chakra UI excels in many areas, it does have some limitations. The library can add significant bundle size to smaller projects, and some developers 
              find the utility-prop approach verbose compared to traditional CSS. Customization beyond the provided theme system can sometimes require more effort, 
              and the opinionated design system may not suit all brand requirements. Additionally, being React-specific limits its use in other frameworks, 
              and some advanced UI patterns may require custom implementations or third-party additions.
            </Text>
          </Box>

          {/* Ecosystem Integration */}
          <Box>
            <Heading size="lg" mb={4}>Ecosystem integration</Heading>
            <Text>
              Chakra UI integrates seamlessly with modern full-stack development workflows. It works excellently with cloud platforms like Vercel, Netlify, 
              and AWS Amplify for deployment, and pairs well with backend-as-a-service solutions like Supabase, Firebase, and PlanetScale. The library's TypeScript 
              support makes it ideal for teams using modern development tools, and its consistent API helps streamline collaboration between designers and developers. 
              When combined with state management solutions like Zustand or data-fetching libraries like SWR, Chakra UI becomes part of a comprehensive development 
              platform that supports rapid, accessible web application development.
            </Text>
          </Box>

          {/* Comparison Table */}
          <Box>
            <Heading size="lg" mb={4}>Comparison: Chakra UI vs DaisyUI</Heading>
            <Text mb={4}>
              DaisyUI is a plugin for Tailwind CSS that provides pre-styled components using Tailwind utility classes. Here's how it compares:
            </Text>
            <Box overflowX="auto">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid', borderColor: useColorModeValue('gray.300', 'gray.600') }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: 'bold' }}>Feature</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: 'bold' }}>Chakra UI</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontWeight: 'bold' }}>daisyUI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid', borderColor: useColorModeValue('gray.200', 'gray.700') }}>
                    <td style={{ padding: '12px', fontWeight: 'semibold' }}>Framework</td>
                    <td style={{ padding: '12px' }}>React component library</td>
                    <td style={{ padding: '12px' }}>Tailwind CSS plugin</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid', borderColor: useColorModeValue('gray.200', 'gray.700') }}>
                    <td style={{ padding: '12px', fontWeight: 'semibold' }}>Styling</td>
                    <td style={{ padding: '12px' }}>Utility-based with props</td>
                    <td style={{ padding: '12px' }}>Tailwind-based classes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid', borderColor: useColorModeValue('gray.200', 'gray.700') }}>
                    <td style={{ padding: '12px', fontWeight: 'semibold' }}>Accessibility</td>
                    <td style={{ padding: '12px' }}>Strong focus, built-in support</td>
                    <td style={{ padding: '12px' }}>Varies by component, developer-managed</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid', borderColor: useColorModeValue('gray.200', 'gray.700') }}>
                    <td style={{ padding: '12px', fontWeight: 'semibold' }}>Theming</td>
                    <td style={{ padding: '12px' }}>Built-in theme support</td>
                    <td style={{ padding: '12px' }}>Themes via Tailwind configuration</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid', borderColor: useColorModeValue('gray.200', 'gray.700') }}>
                    <td style={{ padding: '12px', fontWeight: 'semibold' }}>Customization</td>
                    <td style={{ padding: '12px' }}>Prop-driven, highly configurable</td>
                    <td style={{ padding: '12px' }}>Requires class overrides or config</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', fontWeight: 'semibold' }}>Setup</td>
                    <td style={{ padding: '12px' }}>React-based, works in JS/TS projects</td>
                    <td style={{ padding: '12px' }}>Works anywhere Tailwind is used</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>

          {/* Conclusion */}
          <Box>
            <Heading size="lg" mb={4}>Conclusion</Heading>
            <VStack spacing={4} align="stretch">
              <Text>
                DaisyUI has the advantage of allowing developers to quickly apply styling that remains consistent across the application. 
                Since it builds on Tailwind CSS, it also benefits from being relatively unopinionated, giving you flexibility in how you structure your UI.
              </Text>
              <Text>
                Chakra UI, on the other hand, is a full-featured React component library. One of the main reasons I chose to present Chakra UI 
                is its strong focus on accessibility. As a developer in Norway, where websites are legally required to meet accessibility standards, 
                having a library that prioritizes WCAG compliance is incredibly valuable. Chakra's components are built following best practices 
                for accessibility, which gives me confidence that I'm delivering inclusive experiences to all users.
              </Text>
              <Text>
                I didn't set up any of the alternatives to Chakra, so I can't speak directly to their setup processes, but I found getting 
                started with Chakra to be relatively straightforward and well-documented.
              </Text>
            </VStack>
          </Box>

          <Divider />

          {/* Tutorial Section */}
          <Text fontSize="lg">
            This tutorial will show you how fast and simple you can use Chakra UI, 
            This will just be a fresh repo with React.
          </Text>

          <Box>
            <Heading size="lg" mb={4}>Project Structure</Heading>
            <Text mb={4}>Here's how your project should be organized when we have followed the steps:</Text>
            
            <CollapsibleCodeBlock title="Project Structure" language="text">
{`your-project/
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
            └── tooltip.jsx`}
            </CollapsibleCodeBlock>
          </Box>

          {/* Installation Steps */}
          <Box>
            <Text mb={4}>Assuming you just have a code editor we will start with node to install everything</Text>
            <Code p={2} display="block" bg={useColorModeValue('gray.100', 'gray.800')} mb={4}>
              npm install
            </Code>

            <Text mb={4}>When we have npm installed we can start building!</Text>

            <VStack spacing={4} align="stretch">
              <Box>
                <Heading size="md">Set up your project</Heading>
                <Code p={2} display="block" bg={useColorModeValue('gray.100', 'gray.800')}>
                  npm init -y
                </Code>
              </Box>

              <Box>
                <Heading size="md">Install React</Heading>
                <Code p={2} display="block" bg={useColorModeValue('gray.100', 'gray.800')}>
                  npm install react react-dom
                </Code>
              </Box>

              <Box>
                <Heading size="md">Add Chakra UI</Heading>
                <Code p={2} display="block" bg={useColorModeValue('gray.100', 'gray.800')}>
                  npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
                </Code>
              </Box>
            </VStack>
          </Box>

          {/* File Creation Section */}
          <Box>
            <Text mb={4}>
              Then you create a basic file structure src folder in root create index.html 
              and add this very basic file structure and add this to the html file
            </Text>

            <CollapsibleCodeBlock title="index.html" language="html">
{`<!DOCTYPE html>
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
</html>`}
            </CollapsibleCodeBlock>

            <Text mb={4}>Src folder create index.jsx and add this to the jsx file</Text>

            <CollapsibleCodeBlock title="index.jsx" language="jsx">
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);`}
            </CollapsibleCodeBlock>
          </Box>

          {/* Component Files Section */}
          <Box>
            <Text mb={4}>
              Instead of going codeblock for codeblock I've generated a very simple demonstration of all the UI components 
              inside each of the elements there is an explanation that shows or explains the element or why things like these 
              are easy to build with Chakra, I will be importing and showing a lot to give you a good scope of what Chakra can do 
              there will also be small comments in the code pertaining to the function they serve
            </Text>

            <Text mb={4}>Create inside src/ App.jsx </Text>

            <CollapsibleCodeBlock title="App.jsx" language="jsx">
{`import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box, Button, Card, CardBody, CardHeader, Container, Flex, Grid, GridItem, Heading, HStack, VStack, Text, Badge,
  Avatar, AvatarBadge, Switch, useColorMode, useColorModeValue, IconButton, Input, InputGroup, InputLeftElement,
  Alert, AlertIcon, AlertTitle, Progress, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Tooltip, SimpleGrid, Image, Stack, useToast
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
        {/* Your amazing Chakra UI components here */}
      </Container>
    </Box>
  );
}

export default App;`}
            </CollapsibleCodeBlock>
          </Box>

          {/* UI Component Files */}
          <Box>
            <Text mb={4}>Then we need a new folder src/components/ui here we need 4 files:</Text>
            <UnorderedList mb={4}>
              <ListItem>color-mode.jsx</ListItem>
              <ListItem>provider.jsx</ListItem>
              <ListItem>toaster.jsx</ListItem>
              <ListItem>tooltip.jsx</ListItem>
            </UnorderedList>

            <CollapsibleCodeBlock title="color-mode.jsx" language="jsx">
{`'use client'

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

// ... rest of color mode utilities`}
            </CollapsibleCodeBlock>

            <CollapsibleCodeBlock title="provider.jsx" language="jsx">
{`'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}`}
            </CollapsibleCodeBlock>

            <CollapsibleCodeBlock title="toaster.jsx" language="jsx">
{`'use client'

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
            {/* Toast content */}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}`}
            </CollapsibleCodeBlock>

            <CollapsibleCodeBlock title="tooltip.jsx" language="jsx">
{`import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react'
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
})`}
            </CollapsibleCodeBlock>
          </Box>

          {/* Build Tools Section */}
          <Box>
            <Text mb={4}>
              With all the files ready to go we need a build tool like Parcel or Vite. 
              I will use Vite in this tutorial.
            </Text>

            <Text mb={2}>To install Vite:</Text>
            <Code p={2} display="block" bg={useColorModeValue('gray.100', 'gray.800')} mb={4}>
              npm install vite @vitejs/plugin-react --save-dev
            </Code>

            <CollapsibleCodeBlock title="package.json scripts" language="json">
{`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`}
            </CollapsibleCodeBlock>

            <Text mb={2}>Then run dev server:</Text>
            <Code p={2} display="block" bg={useColorModeValue('gray.100', 'gray.800')}>
              npm run dev
            </Code>
          </Box>

          {/* Success Message */}
          <Alert status="success">
            <AlertIcon />
            <Box>
              <Text fontWeight="bold">Congratulations!</Text>
              <Text>You now have a fully functional Chakra UI React application ready for development!</Text>
            </Box>
          </Alert>

        </VStack>
      </Container>
    </Box>
  );
}

export default HowTo; 

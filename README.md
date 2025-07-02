this is my first project with charka and i have to say its going to be one of my goto tools for react. this markdown text is why thoughts and what ive learned about chakra. i will tell you about it and show you how to set it up in yor project

### What is Chakra UI? (And why I actually like it)

Okay, so Chakra UI is this React component library that... well, it just makes sense. Instead of spending hours styling a button or figuring out how to make a modal work properly, you get all that stuff ready to go. 

What really sold me on it was the accessibility thing - I'm working in Norway where we actually have to meet accessibility standards (it's the law here), and Chakra just handles most of that automatically. Like, keyboard navigation, screen reader support, all that important stuff that's easy to forget when you're rushing to meet a deadline. 

## The stuff that actually matters

**You get components that just work**  
Buttons, modals, forms - basically everything you need without having to build it from scratch. I used to spend way too much time making custom dropdowns that broke on mobile... not anymore.

**Theming that doesn't suck**  
You can actually customize colors, fonts, spacing etc. without diving into CSS hell. Though I'll be honest - I usually just stick with their defaults because they look pretty good.

**Style with props instead of CSS**  
This was weird at first (coming from traditional CSS), but now I love it. You can style components right where you use them: `<Button bg="red.500" size="lg">`. No more hunting through CSS files to find where that one style is defined.

**Mobile-friendly by default**  
Responsive design without the headache. You can set different styles for different screen sizes pretty easily - though I still test everything on my phone because... well, you should.

**Accessibility that actually works**  
This is the big one for me. Focus management, ARIA labels, keyboard navigation - it's all there. Saved me so much time and worry.

## Why I actually use this (and you might too)

**No more accessibility guilt**  
Look, we all know we should be making our sites accessible, but who has time to research ARIA attributes and focus management? Chakra just... does it. I sleep better knowing my apps work for everyone, not just people with mice.

**You build stuff faster**  
Instead of writing the same button component for the hundredth time, you just use theirs. Want a modal? `<Modal>`. Need a form? Done. It's like having a really good starter kit that you don't have to maintain.

Quick example - this button has hover states, focus states, and proper contrast:
```jsx
<Button colorScheme="blue">Click Me</Button>
```
That would've been like 20 lines of CSS before.

**Less file juggling**  
I used to have CSS files everywhere. Now I style things right where I use them: `<Box p={4} bg="gray.100">`. Sure, some people hate this approach, but I find it way easier to understand what's happening.

**Everything looks consistent**  
When you're working with a team (or just future you), having everything use the same design system prevents those "why is this button slightly different?" moments. Trust me, this matters more than you think.

Bottom line: Chakra lets me focus on building features instead of fighting with CSS. And in Norway where accessibility compliance isn't optional, having that built-in is honestly a lifesaver. 

## How this whole thing started

Chakra UI came from Segun Adebayo back in 2019. He's a Nigerian developer who was probably as frustrated as the rest of us with building the same UI components over and over. His idea was pretty simple: make a React library that's actually accessible by default and doesn't suck to use.

It caught on pretty quickly, which honestly makes sense - when you use it, you can see why people like it. The v2 update (which is what I'm using now) made the theming system way better and added proper TypeScript support. These days it's used by tons of companies and solo developers who just want to get stuff done without reinventing the wheel.

## The not-so-great parts (being honest here)

It's not perfect though. The bundle size can get pretty hefty if you're building something small - probably overkill for a simple landing page. 

Some people hate the prop-based styling approach. If you're used to writing CSS the "normal" way, it can feel weird at first. I've seen developers complain about it being too verbose: `<Box paddingTop={4} marginBottom={2} backgroundColor="gray.100">` vs just `<div class="card">`.

Also, if your designer hands you some really custom design that doesn't fit Chakra's patterns... you might be in for some pain. I've had to fight with the theming system a few times when the design called for something really specific.

And obviously, it's React-only. If you're using Vue or Svelte or whatever, this won't help you.

## Ecosystem integration

Chakra UI integrates seamlessly with modern full-stack development workflows. It works excellently with cloud platforms like Vercel, Netlify, and AWS Amplify for deployment, and pairs well with backend-as-a-service solutions like Supabase, Firebase, and PlanetScale. The library's TypeScript support makes it ideal for teams using modern development tools, and its consistent API helps streamline collaboration between designers and developers. When combined with state management solutions like Zustand or data-fetching libraries like SWR, Chakra UI becomes part of a comprehensive development platform that supports rapid, accessible web application development.

## Comparison: Chakra UI vs DaisyUI

DaisyUI is a plugin for Tailwind CSS that provides pre-styled components using Tailwind utility classes. Here's how it compares:

| Feature | Chakra UI | daisyUI |
|---------|-----------|---------|
| Framework | React component library | Tailwind CSS plugin |
| Styling | Utility-based with props | Tailwind-based classes |
| Accessibility | Strong focus, built-in support | Varies by component, developer-managed |
| Theming | Built-in theme support | Themes via Tailwind configuration |
| Customization | Prop-driven, highly configurable | Requires class overrides or config |
| Setup | React-based, works in JS/TS projects | Works anywhere Tailwind is used |

## My take on all this

Look, DaisyUI is cool if you're already using Tailwind and want some pre-made components. It's pretty flexible and doesn't force you into any particular way of doing things.

But I keep coming back to Chakra because of the accessibility stuff. Working in Norway means I actually have to care about WCAG compliance (it's legally required here), and Chakra just handles so much of that automatically. It gives me confidence that I'm not accidentally making my sites unusable for people with disabilities.

I haven't tried setting up all the alternatives, but Chakra's docs are pretty good and I got it working without too much hassle. Plus, once you learn their component patterns, you can build interfaces really quickly.

---

## Alright, let's actually build something

Want to see how this works in practice? I'll walk you through setting up a basic React project with Chakra UI. Nothing fancy - just enough to get you started and see what all the fuss is about.

## How your project will look

After we're done, you'll have something like this:

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

Okay, assuming you've got Node.js installed (if not, go grab it first), let's get this party started.

First, make a new folder for your project and jump into it:
```bash
npm init -y
```

Obviously we need React:
```bash
npm install react react-dom
```

And then all the Chakra stuff:
```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Yeah, that's a bunch of dependencies. Emotion is what Chakra uses for styling, and Framer Motion handles animations. You need all of them, unfortunately.

Now let's create the basic files. In your project root, create an `index.html` file:

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

Now create a `src` folder and inside it, make an `index.jsx` file: 

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


For the main app, I've put together a demo that shows off a bunch of Chakra components. It's not the prettiest thing in the world, but it'll give you a good feel for how everything works together.

Create `App.jsx` in your `src` folder: 

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

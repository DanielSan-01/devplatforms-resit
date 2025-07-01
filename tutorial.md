first 
install npm
second istall react
´´´npm install react react-dom´´´

´´´
npx create-react-app modern-react-app-using-chackraui   
´´´

npm init -y

first initialize a new project
  npm init -y

second install react core dependencies
  npm install react react-dom
third install Chakra UI and its required dependencies
  npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

  then you create a basic file structure src folder and public folder
public folder create index.html and add this very basic file structure and add this tp the html file

    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Chakra UI Demo</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

src folder create index.js and add this to the js file

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

with this you will need a build tool like parcell or vite ill show parcel here since it dosent take any dependencies to run.

to install parcell
  npm install parcel --save-dev
add scripts to package.json file
{
  "scripts": {
    "start": "parcel public/index.html",
    "build": "parcel build public/index.html"
  }
}
then run dev server
  npm run start
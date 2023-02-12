import { baseTheme, ChakraProvider, extendBaseTheme, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/open-sans'
const theme = extendTheme({
    fonts:{
      heading: `'Open Sans', sans-serif`,
      body: `'Open Sans', sans-serif`
    }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)

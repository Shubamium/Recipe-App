import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/open-sans'
const theme = extendBaseTheme({
    fonts:{
      heading: `'Open Sans', sans-serif`,
      body: `'Open Sans', sans-serif`
    }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme} resetCS={true}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)

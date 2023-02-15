import { baseTheme, ChakraProvider, extendBaseTheme, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './page/Home'
import '@fontsource/open-sans'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import ErrorPage from './page/ErrorPage'
import Food from './page/Food'
import FoodLoader from './page/FoodLoader'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const theme = extendTheme({
    fonts:{
      heading: `'Open Sans', sans-serif`,
      body: `'Open Sans', sans-serif`
    }
})
const queryClient = new QueryClient();
const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Home/>, 
      errorElement: <ErrorPage/>,
    },
    {
      path:'food/:foodId',
      element:<Food/>,
      loader:FoodLoader
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}>
              </RouterProvider>
              <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
)

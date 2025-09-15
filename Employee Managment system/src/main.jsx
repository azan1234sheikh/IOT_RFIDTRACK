import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChakraProvider value={defaultSystem}>
  <AuthProvider>

          <App />
    </AuthProvider>
     
    </ChakraProvider>
  </StrictMode>,
)

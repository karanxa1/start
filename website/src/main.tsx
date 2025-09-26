import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Toaster } from 'sonner'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContextProvider.tsx'
import './index.css'

// Initialize EmailJS
emailjs.init('_lXoQZlv61yu4rwTm')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <Toaster 
          position="top-right" 
          richColors 
          closeButton 
          duration={4000}
        />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
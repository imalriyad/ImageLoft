import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router.jsx';
import ContextProvider from './contextapi/ContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router}>
    <Home />
    </RouterProvider>
    </ContextProvider>
   
  </StrictMode>,
)

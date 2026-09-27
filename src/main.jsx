import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from '../components/About.jsx';
import License from '../components/License.jsx';
import Layout from '../components/Layout.jsx';
import SplashScreen from '../components/SplashScreen.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <SplashScreen /> },
      { path: "/home", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/license", element: <License /> },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Chat from './routes/Chat.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/',
    element: <Home />,
  }
]);
function App() {
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
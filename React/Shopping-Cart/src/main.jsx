import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShoppingItem from './ShoppingItem.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/0",
    element: <ShoppingItem index={0}/>,
  },
  {
    path: "/1",
    element: <ShoppingItem index={1}/>,
  },
  {
    path: "/2",
    element: <ShoppingItem index={2}/>,
  },
  {
    path: "/3",
    element: <ShoppingItem index={3}/>,
  },
  {
    path: "/4",
    element: <ShoppingItem index={4}/>,
  },
  {
    path: "/5",
    element: <ShoppingItem index={5}/>,
  },
  {
    path: "/6",
    element: <ShoppingItem index={6}/>,
  },
  {
    path: "/7",
    element: <ShoppingItem index={7}/>,
  },
  {
    path: "/8",
    element: <ShoppingItem index={8}/>,
  },
  {
    path: "/9",
    element: <ShoppingItem index={9}/>,
  },
  {
    path: "/10",
    element: <ShoppingItem index={10}/>,
  },
  {
    path: "/11",
    element: <ShoppingItem index={11}/>,
  },
  {
    path: "/12",
    element: <ShoppingItem index={12}/>,
  },
  {
    path: "/13",
    element: <ShoppingItem index={13}/>,
  },
  {
    path: "/14",
    element: <ShoppingItem index={14}/>,
  },
  {
    path: "/15",
    element: <ShoppingItem index={15}/>,
  },
  {
    path: "/16",
    element: <ShoppingItem index={16}/>,
  },
  {
    path: "/17",
    element: <ShoppingItem index={17}/>,
  },
  {
    path: "/18",
    element: <ShoppingItem index={18}/>,
  },
  {
    path: "/19",
    element: <ShoppingItem index={19}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
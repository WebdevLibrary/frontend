import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BorrowPage from './pages/BorrowPage';
import ReturnPage from './pages/ReturnPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

  },
  {
    path: "borrowbook/:qr",
    element: <BorrowPage/>
  },
  {
    path: "returnbook/:id",
    element: <ReturnPage/>
  },
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
 // <React.StrictMode>
    <RouterProvider router={router}/>
 // </React.StrictMode>
);


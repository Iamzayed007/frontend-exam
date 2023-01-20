import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Posts from './components/posts';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home';
import Create from './pages/create';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "create",
    element: <Create/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

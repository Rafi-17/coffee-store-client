import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import AddCoffee from './Components/AddCoffee';
import Home from './Components/Home';
import UpdateCoffee from './Components/UpdateCoffee';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Providers/AuthProvider';
import Users from './Components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/coffees')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/coffees/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/users')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
)

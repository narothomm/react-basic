import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './components/ContextProvider.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CounterUsingReducer from './components/CounterUsingReducer.jsx'
import FormHandle from './components/FormHandle.jsx'
import HookForm from './components/HookForm.jsx'
import ProductDetails from "./components/ProductDetails.jsx"
import Posts, { loadposts } from './components/Posts.jsx';
import Post, { loadpost } from './components/Post.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Cart from './components/Cart.jsx'
import PrivateRout from './privateRoute/PrivateRout.jsx'
import Login from './components/Login.jsx'
import Users from './components/Users.jsx'
import SignUp from './components/SignUp.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage></ErrorPage>,
     children:[
     {
    path:"counter",
    element: <CounterUsingReducer/>
    },
      {
      path:"product-details",
      element:<PrivateRout><ProductDetails/></PrivateRout>
    },
    {
      path:"posts",
      element:<Posts/>,
      loader:loadposts,
    },
     {
        path: '/post/:id',
        element: <Post/>,
        loader: loadpost,
        errorElement:<h1>Sorry this post is not found</h1>
      },
    {
      path:"/cart",
      element:<Cart/>
    },
  {
    path:'/signup',
    element:<SignUp/>
  },
    {
    path:"/login",
    element: <Login/>
   },
   {
    path:"/users",
    element: <Users/>
   }
  ]
  },

 
   {
    path:"formhandle",
    element: <FormHandle/>
   },
   {
    path:"hookform",
    element: <HookForm/>
   },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>                 
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider> 
  </StrictMode>,
)

// আমরা <RouterProvider /> কে <ContextProvider> এর ভিতরে রাখি, যেন সব রাউটেড কম্পোনেন্ট 
// (যেমন: /home, /about) আমাদের বানানো context (যেমন user data) ব্যবহার করতে পারে।

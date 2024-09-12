import React, { useContext } from "react";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Error from "../pages/Error.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { AuthContext } from "../context/index.js";
import Loader from "./UI/Loader/Loader.jsx";

const AppRouter = () => {
   const {isAuth, isLoading} = useContext(AuthContext);
   console.log(isAuth)

   if (isLoading) {
    return <Loader/>
   }

  return (
    isAuth
    ?
    <Routes>
    {privateRoutes.map(route =>
           <Route 
               element={route.element} 
               path={route.path}
               exact={route.exact}
               key={route.path}
           />
    )}
    <Route
       path="*"
       element={<Navigate to="/posts" replace />} />
 

  
</Routes>
    :
    <Routes>
     {publicRoutes.map(route =>
            <Route 
                element={route.element} 
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
     )}
      <Route
       path="*"
       element={<Navigate to="/login/" replace />}
   />
    
  

    
</Routes>



  )
};
export default AppRouter;

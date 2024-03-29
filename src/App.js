import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import  Header  from "./components/Header.js";
import { Body } from "./components/Body";
import { RestaurantCard } from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contectus from "./components/Contectus"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider  } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";



const Grocery = lazy(()=> import("./components/Grocery"));




const AppLayOut =  () =>{
        return (
        <Provider store={appStore}>       
        <div className="app">
         <Header/>
         <Outlet/>
        
        </div>
        <Footer />
        </Provider> 
        
        );
};
const appRouter = createBrowserRouter([{
        path: "/",
        element: <AppLayOut />,
        children:[
                {
                        path:"/",
                        element: <Body />,
                },
                {
                        path:"/about",
                        element: <About />,
                },
                {
                        path:"/contectus",
                        element: <Contectus/>,
                },
                {
                        path:"/grocery",
                        element: <Suspense fallback={<h1>Loading! Gentalmen please wait...</h1>}><Grocery/></Suspense> 
                },
                {
                        path:"/restaurants/:resId",
                        element: <RestaurantMenu/>,
                },
                {
                        path:"/cart",
                        element: <Cart/>,
                },
        ],
        errorElement: <Error />, 
        
},


])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />);
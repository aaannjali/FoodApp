import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should load Header component with a login button", ()=>{
        render(
                <BrowserRouter>
                <Provider store ={appStore}>
                        <Header />
                </Provider>
                </BrowserRouter>
        
         );

         const loginButton = screen.getByRole("button");
         expect(loginButton).toBeInTheDocument();

});

it("should change Login Button to Logout on click", ()=>{
        render(
                <BrowserRouter>
                <Provider store ={appStore}>
                        <Header />
                </Provider>
                </BrowserRouter>
        
         );

         const loginButton = screen.getByRole("button", {name: "Login"});
         
         fireEvent.click(loginButton);

         const logoutButton = screen.getByRole("button", {name : "Logout"});
         expect(loginButton).toBeInTheDocument();

});
import { LOGO_URL } from "../utils/contants"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
        const [btnName, setbtnName] = useState("Login");
        const onlineStatus = useOnlineStatus();

        const data = useContext(UserContext);

        //selector
        //subscribing the store using selector
        const cartItems = useSelector((store) => store.cart.items);


        return (
                <div className="flex justify-between bg-gray-100 shadow-lg font-bold ">
                        <div className="logo " >
                                <img className="w-40 " src={LOGO_URL} />
                        </div>
                        <div className="flex items-center">
                                <ul className="flex p-4 m-4">
                                        <li className="px-4">
                                                Online Status: { onlineStatus ? "✅" : "🔴"}
                                        </li>
                                        <li className="px-4 "><Link to="/">Home</Link></li>
                                        <li className="px-4 "><Link to="/about">About us</Link></li>
                                        <li className="px-4 "><Link to="/contectus">Contact Us</Link></li>
                                        <li className="px-4 "><Link to="/grocery">Grocery</Link></li>
                                        <li className="px-4 "><Link to= "/cart">Cart-({cartItems.length} items) </Link>  </li> 
                                        <button className="login" onClick={()=>{
                                                btnName == "Login" ?
                                                setbtnName("Logout"):
                                                setbtnName("Login");
                                        }}>{btnName}</button>

                                </ul>

                        </div>

                </div>
        )
}



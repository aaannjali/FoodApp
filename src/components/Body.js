import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Body = () => {
        const [listoFReastaurants, setlistoFReastaurants] = useState([]);
        const [filterRes, setfilterRes] = useState([]);
        const [searchText, setsearchText] = useState("");
        useEffect(() => {
                fetchData();
        }, []);

        const fetchData = async () => {
                const data = await fetch(
                        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6007975&lng=88.3465958&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json = await data.json();

                setlistoFReastaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
                setfilterRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        };
        const onlineStatus = useOnlineStatus();

        if (onlineStatus === false) {
          return (
            <h1>Looks like you are offline. Please check your internet connection.</h1>
          );
        }

        return listoFReastaurants.length == 0 ? <Shimmer /> : (
                <div className="body ">
                        <div className="filter flex justify-center ">
                                <div className="m-4 p-4 flex items-center rounded-lg">
                                        <input type="text" className="border-solid  border-2 border-gray-300 p-1 rounded-md focus:outline-none focus:border-blue-500" value={searchText} onChange={(e) => {
                                                setsearchText(e.target.value);
                                        }} />
                                        <button className=" m-4 items-center  border  bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                                         onClick={() => {

                                                const filterRes = listoFReastaurants.filter((res) =>
                                                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                                );


                                                setfilterRes(filterRes);
                                        }}
                                        >Search</button>
                                </div>

                                <div className="m-4 p-4 flex items-center ">
                                <button className="px-4 py-2 text-white rounded-lg font-bold  bg-blue-700 hover:bg-blue-700  border" onClick={() => {
                                        const filteredList = listoFReastaurants.filter(
                                                (res) => res.info.avgRating > 4
                                        );
                                        setlistoFReastaurants(filteredList);
                                }}> Top Rated Resturants </button>

                                </div>
                               </div>
                        <div className="flex flex-wrap">
                                {filterRes.map((restarant) => (
                                        <Link key={restarant.info.id} to={"/restaurants/" + restarant.info.id} > <RestaurantCard resData={restarant.info} /> </Link>
                                ))}
                        </div>
                        
                </div>
        );
};
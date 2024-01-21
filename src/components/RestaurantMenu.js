import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = ()=>{
        

        const [showIndex, setshowIndex] = useState(null);
        
        const { resId } = useParams();
         console.log(resId);
        
        const resInfo = useRestaurantMenu(resId);


        if(resInfo == null) return <Shimmer />

        const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

        const {itemCards} = 
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        
        console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        //console.log(categories);

        return(
                <div className="text-center">
                        <h1 className="font-bold my-6 text-2xl">{name}</h1>
                        <h3 className="font-bold text-lg">{cuisines. join(", ")} - {costForTwoMessage}</h3>
                        <h2>Menu</h2>
                
                
                        {categories.map((category , index) => (
                        <RestaurantCategory key={category?.card?.card.title}  data={category?.card?.card}
                        
                        showItems = {index == showIndex ? true : false}
                        setshowIndex = {() => setshowIndex(index)}
                        />))}
                
                     
                </div>
        );
};

export default RestaurantMenu;
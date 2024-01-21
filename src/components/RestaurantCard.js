
import { CDN_URL } from "../utils/contants";

export const RestaurantCard = (props) => {
    const { resData } = props;
 
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
     
      deliveryTime,
    } = resData;
  
        return (
            <div className="w-[350px] space-x-8 m-2  ">
                <div className="res-card m-4 p-2  bg-white shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
                
                <img className="rounded-lg " src= {CDN_URL + cloudinaryImageId} />
                <h3 className="font-bold py-4 text-lg" >{name}</h3>
                <p>{cuisines.join(" , ")}</p>
             
                <h4>{avgRating} Stars</h4>
                
                <h4>30-40{deliveryTime} minutes</h4>
            </div> 

            </div>
               
        );
};
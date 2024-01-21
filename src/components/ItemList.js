import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/contants";


const ItemList = ({ items }) => {

        const dispatch = useDispatch();

        const handleAddItem = (item) => {
                //dispatch an action
                console.log(item);
                dispatch (addItem (item));

        };


        return (
                <div >
                        {items.map((item) => (
                                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">



                                        <div className="w-9/12">
                                                <div className="p-2 font-bold ">
                                                        <span>{item.card.info.name}</span>

                                                </div>
                                                <span className="py-6">  - ₹ {item.card.info.price
                                                        ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                                                <h2 className="text-xl text-gray-500">{item.card.info.description}</h2>
                                        </div>
                                        <div className="w-3/12 p-4" >
                                                <div className="absolute ">
                                                        <button className="p-2 mx-16  shadow-lg rounded-lg bg-black text-white "

                                                                onClick = {() => handleAddItem(item)}>
                                                                Add + </button>
                                                </div>
                                                <img className="rounded-xl" src={CDN_URL + item.card.info.imageId}  ></img>
                                        </div>

                                </div>
                        ))}
                </div>
        );
};

export default ItemList;
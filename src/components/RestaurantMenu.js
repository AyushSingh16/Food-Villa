import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {

    const {id} = useParams();        //reading dynamic URL params

    const restaurant = useRestaurant(id);

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem("Grapes"));
    };

    return (!restaurant) ? <Shimmer/> :(
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant?.data?.cards[2]?.info?.id} </h2>

                <img src={IMG_CDN_URL + restaurant?.data?.cards[2]?.info?.cloudinaryImageId} />
            
                <h2>{restaurant?.data?.cards[2]?.info?.city}</h2>

                <h2>{restaurant?.data?.cards[2]?.info?.avgRating}</h2>
                <h2>{restaurant?.data?.cards[2]?.info?.locality}</h2>
                <h2>{restaurant?.data?.cards[2]?.info?.costForTwo}</h2>
            </div>
            <div>
                <button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItem()} >Add Items</button>
            </div>
        </div>

    );
};

export default RestaurantMenu;
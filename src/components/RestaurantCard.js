import {IMG_CDN_URL} from "../constants";
import {useContext} from "react";
import userContext from "../utils/userContext";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    name,                       //destructured important things received from the body
    cuisines, 
    lastMileTravelString, 
    cloudinaryImageId
  }) => {
    const {user} = useContext(userContext);
    return (
      <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-200">
        <img 
        src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{user.name}-{user.email}</h4>
      </div>
    );
  };


export default RestaurantCard;
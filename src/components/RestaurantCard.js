import {IMG_CDN_URL} from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    name,                       //destructured important things received from the body
    cuisines, 
    lastMileTravelString, 
    cloudinaryImageId
  }) => {
    return (
      <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-200">
        <img 
        src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };


export default RestaurantCard;
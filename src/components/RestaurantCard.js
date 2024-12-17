import {IMG_CDN_URL} from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    name,                       //destructured important things received from the body
    cuisines, 
    lastMileTravelString, 
    cloudinaryImageId
  }) => {
    return (
      <div className="card">
        <img 
        src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };


export default RestaurantCard;
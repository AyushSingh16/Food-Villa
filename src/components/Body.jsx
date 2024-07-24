import { restaurantList } from "../constants";
import RestaurantCard  from "./RestaurantCard";
import { useState } from "react";


const Body = () => {
    // let searchTxt = "KFC";     //one-way data binding
    
    //searchText is a local state variable
    const[searchInput ,setSearchInput] = useState("KFC");     //To create state variable

    return (

    <>
    <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search" 
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
        }}
        />
    </div>
    
    <div className="restaurant-list">
    {
       //restaurant is a prop, we have given a prop to this component named restaurant whose value is equal to restaurantList's first restaurant
          
       restaurantList.map((restaurant) => {
            return <RestaurantCard  {...restaurant.data} key={restaurant.data.id} />;   // similar to {RestaurantCard(restaurantList[0])}i.e. it is a function call only
          })
    }
    </div>
    </>
    );
  };

export default Body;
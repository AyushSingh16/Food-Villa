import { restaurantList } from "../constants";
import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; 

function filterData(searchText, restaurants){

  const filterData = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
  return filterData;
}


const Body = () => {
    // let searchTxt = "KFC";     //one-way data binding
    
    //searchText is a local state variable
    // destructuring is done here

    const[allRestaurants,setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);
    const[searchText ,setSearchText] = useState("");     //To create state variable

    useEffect(() => {

      //API call
      getRestaurants(); 

    },[]);

    
    async function getRestaurants()
    { 
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
      
      const json = await data.json();
      console.log(json);

      //optional chaining
      
      setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    console.log("render");

    //conditional rendering
    //if restaurant == empty => Shimmer UI
    //else restaurant == data => actual data UI

    //not render component
    if(!allRestaurants) return null;

    if(filteredRestaurants?.length === 0) return <h1>No restaurant found!</h1>

    return (allRestaurants?.length === 0 ) ? <Shimmer/> :  (
    <>
    <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search" 
          value={searchText}
          onChange={(e) => {
            //e.target.value => whatever you write in search box input
            setSearchText(e.target.value); //this will modify my searchInput
        }}
        />
        <button 
        className="search-btn"
        onClick={ () => {
          //need to filter the search data
          const data = filterData(searchText, allRestaurants);
          //update the state -> restaurants variable
          setFilteredRestaurants(data);

        }}  
        >
        Search
        </button>
    </div>
    
    <div className="restaurant-list">
    {
       //restaurant is a prop, we have given a prop to this component named restaurant whose value is equal to restaurantList's first restaurant
          
       filteredRestaurants.map((restaurant) => {
            return <RestaurantCard  {...restaurant.info} key={restaurant.info.id} />;   // similar to {RestaurantCard(restaurantList[0])}i.e. it is a function call only
          })
    }
    </div>
    </>
    );
  };

export default Body;
// import { restaurantList } from "../constants";
import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; 
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {

    const[allRestaurants,setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);
    const[searchText ,setSearchText] = useState("");     //To create state variable

    useEffect(() => {

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

    const isOnline = useOnline();

    if(!isOnline)
    {
      return <h1>Offline, Please check your Internet Connection!!</h1> 
    }
      
    

    if(!allRestaurants) return null;

    return (allRestaurants?.length === 0 ) ? <Shimmer/> :  
    (
    <>
    <div className="search-container p-5 my-5 bg-pink-200">
        <input 
          type="text" 
          className="focus:bg-blue-100 m-2 p-2" 
          placeholder="Search" 
          value={searchText}
          onChange={(e) => {
            //e.target.value => whatever you write in search box input
            setSearchText(e.target.value); //this will modify my searchInput
        }}
        />
        <button 
        className="search-btn p-2 m-2 bg-purple-500 rounded-md text-white hover:bg-purple-700"
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
    
    <div className="flex flex-wrap">
    {
       //restaurant is a prop, we have given a prop to this component named restaurant whose value is equal to restaurantList's first restaurant
          
          filteredRestaurants.map((restaurant) => {
            return (
            <Link to={"/restaurant/"  + restaurant?.info?.id} key={restaurant.info.id} >
              <RestaurantCard  {...restaurant.info} />
            </Link>
          );   // similar to {RestaurantCard(restaurantList[0])}i.e. it is a function call only
          })
    }
    </div>
    </>
    );
  };

export default Body;
import RestaurantCard from "./RestaurantCard";
// import { restaurantList} from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filteredData } from "../utils/helper";
import useResData from "../hooks/useResData";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";

const Body = () => {
  
  const [searchTXT, setSearchText] = useState('');
  const {allRestaurants, filteredRestaurants, setFilteredRestaurants} = useResData();
  console.log(filteredRestaurants);
  console.log(allRestaurants);

  // if(filteredRestaurants.length === 0) return <h1>No restaurant match your input...!</h1>

  if(!allRestaurants) return  null;

  return allRestaurants?.length === 0 ? (
       <RestaurantCardSkeleton />
    ) : (
    <>
    <div className=" flex justify-center align-middle mt-32">
      <input type="text"
             className=" px-4 py-6 bg-white w-2/4 h-10 mr-2 outline-none border-2"
             placeholder="search for restaurant"
             value={searchTXT}
             onChange={(e) => setSearchText(e.target.value)}/>
      <button type="submit" 
              className="bg-orange-600 h-13 py-2 px-4 w-24 rounded-md hover:" 
              onClick={() => {
                let data = filteredData(allRestaurants, searchTXT);
                setFilteredRestaurants(data);
      }}
      >
        Submit
      </button>       
    </div>
    <div className="flex flex-wrap mx-10">
         {
          filteredRestaurants.map( (restaurant) => (
            <>
              <Link key={restaurant?.info?.id} to={`/restaurant/${restaurant.info.id}`}>
                  <RestaurantCard{...restaurant?.info}  />
                  {console.log(restaurant.info)}
              </Link>
            </>
          ))
          }
    </div>
  </>
  )
} 
 
export default Body;
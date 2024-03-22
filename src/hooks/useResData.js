import { swiggy_URL } from "../constants";
import { useState, useEffect } from "react";

const useResData = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_URL);
    const json = await data.json();
    // console.log(json);
    console.log(json);
    const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // const resData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(resData);
    setFilteredRestaurants(resData);
    setAllRestaurants(resData);
    // console.log(allRestaurants);
  };
  return {allRestaurants, filteredRestaurants, setFilteredRestaurants};
}

export default useResData;
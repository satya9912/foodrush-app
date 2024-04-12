import { IMAGE_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla
  }) => {
    /**
     * * Optional chaining is a feature introduced in JavaScript that provides a 
     * concise way to access properties or call functions on an object that
    *  might be null or undefined without causing an error. 
    * It allows you to avoid lengthy and repetitive null checks 
    * before accessing nested properties or calling nested functions.
    */
    return(
        <div className="w-80 p-3 m-3 shadow-md transition ease-in-out hover:w-[318px] duration-700">
            <div>
            <img 
            className=" w-72 h-44 object-cover rounded-3xl p-2"
            alt="res-logo" src={IMAGE_CDN_URL + cloudinaryImageId} />
            </div>
            <div className="pl-3">
                <h3 className="font-semibold text-xl mb-1">{name}</h3>
                <p className="text-gray-600 mb-2">{cuisines && cuisines.join(', ')}</p>
                <div id="rating-container" className="flex align-middle mb-2">
                        <span className="font-semibold text-gray-600 text-md mr-1 mt-1"> {avgRating} </span>
                        <img className="w-5 h-6 object-contain mr-2 mt-1" src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png" alt="star" />
                        <p className="text-base text-gray-600 mt-1">estimated time : {sla.slaString}</p>
                </div>
                <p className="text-lg text-gray-600">{costForTwo}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;
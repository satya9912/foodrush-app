import { MENU_ITEM_TYPE_KEY } from '../constants';
import { useState, useEffect } from 'react';
import { getMenuURL } from '../constants';
import { useParams } from 'react-router-dom';

const useRestaurant = () => {

  const {resId} = useParams();
  const menuURL = getMenuURL(resId);

    useEffect(()=> {
        getRestaurantInfo()
      }, []);
    
      const [restaurantMenu, setRestaurantMenu] = useState([]);
      const [menuItems, setMenuItems] = useState([]);
      
      async function getRestaurantInfo(){
        const data = await fetch(menuURL);
        const json = await data.json();
        // console.log(json)
        const resData = json?.data?.cards[0]?.card?.card?.info
        // console.log(resData);
        setRestaurantMenu(resData);
        // const menuItems = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.card.info
        // console.log(menuItems);
         // Set menu item data
              const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
              groupedCard?.cardGroupMap?.REGULAR?.
              cards?.map(x => x.card?.card)?.
              filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
              map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
    
              // console.log(menuItemsData);
    
          const uniqueMenuItems = [];
          menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
          }
          })
          setMenuItems(uniqueMenuItems);
      }
      return {menuItems, restaurantMenu};
}

export default useRestaurant;

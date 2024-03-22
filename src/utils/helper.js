export function filteredData(restaurants, searchTXT){
    searchTXT?.toLowerCase();
    let filteredData = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchTXT));
    return filteredData;
  }
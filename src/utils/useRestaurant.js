import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&submitAction=ENTER`);

    const json = await data.json();
    setRestauraunt(json.data);
  }

  return restaurant;
};

export default useRestaurant;

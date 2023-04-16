import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import{filterData} from "../utils/helper"
import useOnline from "../utils/useOnline";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("filteredRestaurants: ", filteredRestaurants);
  console.log("allRestaurants: ", allRestaurants);



  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      process.env.MENU_API_URL
    );
    const json = await data.json();
    console.log("json: ", json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (<h1>You are offline please check your internet connection !</h1>);
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="md:p-5 bg-pink-50 my-5 ">
        <input
          type="text"
          className="focus:bg-slate-300 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div
        className="grid md:grid-cols-5 gap-4 xs:grid-cols-1"
        onClick={(e) => {
          e.nativeEvent;
          console.log("e.nativeEvent: ", e.nativeEvent);
        }}
      >
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

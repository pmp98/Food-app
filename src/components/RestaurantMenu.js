import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log("id: ", id);

  const restaurant = useRestaurant(id);
  console.log('restaurant: ', restaurant);
  const api = restaurant?.cards[0].card.card.info;
  const menuDrill=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="pl-5">
        <h2 className="text-2xl font-bold font-sans p-4">{api?.name}</h2>
        <img src={IMG_CDN_URL + api.cloudinaryImageId} />
        <h3 className="text-xl font-mono- font-semibold">{api?.area}</h3>
        <h3 className="text-xl font-mono- font-semibold">{api?.city}</h3>
        <h3 className="text-xl font-mono- font-semibold">{api?.avgRating} stars</h3>
        <h3 className="text-xl font-mono- font-semibold">{api?.costForTwoMessage}</h3>
      </div>
      <div className="p-5">
        <h1 className="text-xl font-mono- font-semibold">Menu</h1>
        <ul data-testid="menu">
          {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item) => (
            <li key={item.id}>
              {item.card.info.name} -{" "}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item.card.info.name)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

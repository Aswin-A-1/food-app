import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import RestaurentContianer from "./RestaurentContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { GET_RES_URL } from "../utils/constants";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const filterTopRated = () => {
    const filteredList = listOfRestaurent.filter(
      (restuarent) => restuarent.info.avgRating > 4,
    );
    setListOfRestaurent(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RES_URL);
    const json = await data.json();
    const restaurantCard = json?.data?.cards.find(
      (item) => item?.card?.card?.id === "restaurant_grid_listing_v2",
    );
    setListOfRestaurent(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setAllRestaurants(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  const searchRestaurants = () => {
    const filteredList = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setListOfRestaurent(filteredList);
  };

  return listOfRestaurent.length === 0 ? (
    <div className="body">
      <div className="filter">
        <Search
          searchText={searchText}
          onSearch={searchRestaurants}
          setSearchText={setSearchText}
        />
        <TopRatedBtn onFilter={filterTopRated} />
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <Search
          searchText={searchText}
          onSearch={searchRestaurants}
          setSearchText={setSearchText}
        />
        <TopRatedBtn onFilter={filterTopRated} />
      </div>
      <RestaurentContianer restuarents={listOfRestaurent} />
    </div>
  );
};

export default Body;

import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import RestaurentContianer from "./RestaurentContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.00730&lng=76.51620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const restaurantCard = json?.data?.cards.find(
      (item) => item?.card?.card?.id === "restaurant_grid_listing_v2",
    );
    setListOfRestaurent(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  if (listOfRestaurent.length === 0) {
    return (
    <div className="body">
      <Search />
      <TopRatedBtn onFilter={filterTopRated} />
    <Shimmer />
    </div>)
  }

  return (
    <div className="body">
      <Search />
      <TopRatedBtn onFilter={filterTopRated} />
      <RestaurentContianer restuarents={listOfRestaurent} />
    </div>
  );
};

export default Body;

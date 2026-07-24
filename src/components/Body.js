import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import RestaurentContianer from "./RestaurentContainer";
import { useState } from "react";
import reslist from "../utils/mockData";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(reslist);
  const filterTopRated = () => {
    const filteredList = listOfRestaurent.filter(
      (restuarent) => restuarent.info.avgRating > 4,
    );
    setListOfRestaurent(filteredList);
  };
  return (
    <div className="body">
      <Search />
      <TopRatedBtn onFilter={filterTopRated} />
      <RestaurentContianer restuarents={listOfRestaurent}/>
    </div>
  );
};

export default Body;

import RestaurentCard from "./RestaurentCard";
import reslist from "../utils/mockData";

const RestaurentContianer = () => {
  return (
    <div className="res-container">
      {reslist.map((restaurant) => (
        <RestaurentCard resData={restaurant}/>
      ))}
    </div>
  );
};

export default RestaurentContianer;
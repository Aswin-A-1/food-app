import RestaurentCard from "./RestaurentCard";

const RestaurentContianer = ({restuarents}) => {
  return (
    <div className="res-container">
      {restuarents.map((restaurant, index) => (
        <RestaurentCard key={index} resData={restaurant}/>
      ))}
    </div>
  );
};

export default RestaurentContianer;
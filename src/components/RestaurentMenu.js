import { useEffect, useState } from "react";
import { GET_RES_INFO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RES_INFO_URL+resId);
    const json = await data.json();
    setResInfo(json.data);
    setResInfo(json.data);
  };

  if(resInfo === null) return (<Shimmer/>)

  const{ name, costForTwo, cuisines, avgRating } = resInfo.cards[2].card.card.info

  const items = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(', ')}</h2>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h2>Menu</h2>
      <ul>
        {items.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs: {item.card.info.price/100}</li>)}
      </ul>
    </div>
  );
};

export default RestaurentMenu;

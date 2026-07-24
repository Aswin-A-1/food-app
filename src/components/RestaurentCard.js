import {CDN_URL} from '../utils/constants'

const RestaurentCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props.resData.info
  const { deliveryTime } = props.resData.info.sla
  return (
    <div className="restaurent-card">
      <img
        className="logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurentCard;
import { IMG_CDN_URL } from "../constants";


const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  id,
}) => {
  
  return (
    <div className="w-56 p-2 m-2 shadow-lg h-auto  bg-pink-50 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h4 className="font-semibold">{name}</h4>
    </div>
  );
};

export default RestrauntCard;

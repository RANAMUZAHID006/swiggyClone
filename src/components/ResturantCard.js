import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="w-[290px] m-1  p-2">
      <img className="w-100" src={CDN_URL + cloudinaryImageId} alt="img" />

      <div className=" bg-gray-100 p-3">
        <h3 className="font-bold py-4">{name}</h3>
        <h4 className="my-2">{cuisines.join(", ")}</h4>
        <h4 className="my-2">{avgRating}Star</h4>
        <h4 className="my-2">{costForTwo}For Two</h4>
        <h4 className="my-2">{sla.slaString}</h4>
        <h4 className="my-2">{loggedInUser}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;

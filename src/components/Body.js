// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [listOfResturants, setListofResturant] = useState([]);

  console.log(listOfResturants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //optional Rendering
    setListofResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are offline pls check your connection </h1>;

  //Ternary conditional Rendering
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex justify-center pt-5">
        <input
          className="border-2 border-black"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-red-600 px-3 py-2 text-white"
          onClick={() => {
            const filteredRestaurant = listOfResturants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center my-5">
        <button
          onClick={() => {
            const filterList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofResturant(filterList);
          }}
          className="bg-red-600 text-white p-3"
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((resturant) => (
          <Link key={resturant.info.id} to={"/restaurant/" + resturant.info.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

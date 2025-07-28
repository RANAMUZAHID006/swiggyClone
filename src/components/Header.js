import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing in the store a selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center bg-red-600 px-4">
      <div className="logo-container ">
        <img className="w-36 bg-red-600" src={LOGO_URL} alt="img" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-white">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about"> About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart"> Cart({cartItems.length} items)</Link>
          </li>
          <button
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
            className="bg-white px-4 py-1 text-red-600 rounded-lg"
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

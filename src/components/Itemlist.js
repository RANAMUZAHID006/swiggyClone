import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -Rs.
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-12 rounded-lg bg-black text-white shadow-lg "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="items-img"
              className="w-40 p-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { markCompleted, deleteItem } from "../redux/action";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex py-2 justify-between items-center">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={item.id}
          checked={item.completed}
          onChange={() => dispatch(markCompleted(item.id))}
        />
        <label
          htmlFor={item.id}
          className={`text-2xl mb-1 ${item.completed ? "line-through" : ""}`}
        >
          {item.title}
        </label>
      </div>
      <span
        onClick={() => dispatch(deleteItem(item.id))}
        className="flex justify-center items-center bg-gray-200 w-[34px] h-[34px] rounded-full cursor-pointer hover:bg-opacity-70"
      >
        <AiOutlineDelete color="red" size={20} />
      </span>
    </div>
  );
};

export default Item;

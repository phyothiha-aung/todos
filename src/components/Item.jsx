import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Item = () => {
  return (
    <div className="flex p-2 justify-between items-center">
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <p className="text-2xl mb-1">Item</p>
      </div>
      <span className="flex justify-center items-center bg-gray-200 w-[34px] h-[34px] rounded-full cursor-pointer hover:bg-opacity-70">
        <AiOutlineDelete color="red" size={20} />
      </span>
    </div>
  );
};

export default Item;

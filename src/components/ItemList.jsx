import React from "react";
import Item from "./Item";

const ItemList = ({ todos }) => {
  return (
    <div className="w-full mt-2 px-4 min-h-[200px] max-h-[400px] overflow-y-scroll scroll-none">
      {todos.map((todo) => (
        <Item key={todo.id} item={todo} />
      ))}
    </div>
  );
};

export default ItemList;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/action";
import { v4 as uuidv4 } from "uuid";

const ModalBox = ({ setModal }) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch(addItem({ id: uuidv4(), title: text, completed: false }));
    setModal(false);
  };
  return (
    <div
      onClick={() => setModal(false)}
      className="fixed z-10 left-0 right-0 w-full h-full bg-[#0009] flex justify-center items-center"
    >
      <div className="bg-white max-w-sm w-full flex items-center rounded-md overflow-hidden">
        <input
          type="text"
          className="w-full px-2 py-4 outline-none"
          onClick={(e) => e.stopPropagation()}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-gray-400 mr-1 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ModalBox;

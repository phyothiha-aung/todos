import React from "react";
import { GrAdd } from "react-icons/gr";

const Options = ({ radioOption, setRadioOption, setModal }) => {
  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-between h-6 bg-gray-400 py-6 px-4">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id="all"
          name="option"
          value="all"
          checked={radioOption === "all"}
          onChange={handleRadioChange}
        />
        <label htmlFor="all">All</label>
        <input
          type="radio"
          id="active"
          name="option"
          value="active"
          checked={radioOption === "active"}
          onChange={handleRadioChange}
        />
        <label htmlFor="active">Active</label>
        <input
          type="radio"
          id="completed"
          name="option"
          value="completed"
          checked={radioOption === "completed"}
          onChange={handleRadioChange}
        />
        <label htmlFor="completed">Completed</label>
      </div>
      <span
        onClick={() => setModal(true)}
        className="flex justify-center items-center bg-gray-200 w-[34px] h-[34px] rounded-full cursor-pointer hover:bg-opacity-70"
      >
        <GrAdd size={20} />
      </span>
    </div>
  );
};

export default Options;

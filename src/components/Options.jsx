import React from "react";

const Options = ({ radioOption, setRadioOption }) => {
  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
  };
  return (
    <div className="flex items-center gap-3 h-6 bg-gray-400 py-6 px-3">
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
  );
};

export default Options;

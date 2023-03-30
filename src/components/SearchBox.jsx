import React from "react";

const SearchBox = ({ query, setQuery }) => {
  return (
    <div className="w-full px-3">
      <input
        className="w-full outline-none p-3 text-lg"
        type="search"
        name="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

import React from "react";
import ItemList from "./components/ItemList";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="bg-gray-300 max-w-[700px] w-full p-4">
        <h1 className="text-3xl text-black text-center font-bold mb-3">
          Todo List
        </h1>
        <SearchBox />
        <ItemList />
      </div>
    </div>
  );
}

export default App;

import React from "react";

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-gray-300 max-w-[700px] w-full">
        <h1 className="text-3xl text-black text-center font-bold m-3">
          Todo List
        </h1>
        <input
          className="w-full outline-none p-3 text-lg"
          type="search"
          name="search"
          placeholder="Search"
        />
        <div className="w-full">
          <div className="flex flex-col p-2">
            <p className="text-lg">Item</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

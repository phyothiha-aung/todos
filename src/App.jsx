import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import SearchBox from "./components/SearchBox";
import { useSelector } from "react-redux";
import Options from "./components/Options";
import ModalBox from "./components/ModalBox";

function App() {
  const todos = useSelector((state) => state);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [radioOption, setRadioOption] = useState("all");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let radioFiltered = [];
    if (radioOption === "all") {
      radioFiltered = [...todos];
    } else if (radioOption === "active") {
      radioFiltered = todos.filter((td) => td.completed === false);
    } else {
      if (radioOption === "completed") {
        radioFiltered = todos.filter((td) => td.completed === true);
      }
    }

    if (query) {
      const filteredTodos = radioFiltered.filter((td) =>
        td.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered([...filteredTodos]);
    } else {
      setFiltered([...radioFiltered]);
    }
  }, [query, todos, radioOption]);

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      {modal && <ModalBox setModal={setModal} />}
      <div className="bg-gray-300 max-w-[700px] min-w-[300px] w-full">
        <h1 className="text-3xl text-black text-center font-bold my-4">
          Todo List
        </h1>
        <SearchBox query={query} setQuery={setQuery} />
        <ItemList todos={filtered} />
        <Options
          radioOption={radioOption}
          setRadioOption={setRadioOption}
          setModal={setModal}
        />
      </div>
    </div>
  );
}

export default App;

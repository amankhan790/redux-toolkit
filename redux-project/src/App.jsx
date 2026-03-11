import React from "react";
import "./App.css";
import SearchBar from "./compoment/searchBar";
import Tabs from "./compoment/Tabs";
import ResultGrid from "./compoment/ResultGrid";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white  w-full">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;

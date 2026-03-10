import React from "react";
import "./App.css";
import SearchBar from "./compoment/searchBar";
import Tabs from "./compoment/Tabs";

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-full">
      <SearchBar />
      <Tabs />
    </div>
  );
};

export default App;

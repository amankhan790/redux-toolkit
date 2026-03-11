import React from "react";
import SearchBar from "../compoment/searchBar";
import Tabs from "../compoment/Tabs";
import ResultGrid from "../compoment/ResultGrid";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default Home;

import React from "react";
import SearchBar from "../compoment/searchBar";
import Tabs from "../compoment/Tabs";
import ResultGrid from "../compoment/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../compoment/Navbar";

const Home = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <SearchBar />

      {!query ? (
        <div className="text-center mt-10 text-gray-400">
          Please enter a search term to see results.
        </div>
      ) : (
        <>
          <Tabs />
          <ResultGrid />
        </>
      )}
    </div>
  );
};

export default Home;

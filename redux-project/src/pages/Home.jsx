import React from "react";
import SearchBar from "../compoment/searchBar";
import Tabs from "../compoment/Tabs";
import ResultGrid from "../compoment/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <div className="bg-blue-700 py-5 flex justify-between font-bold text-xl px-10">
        <div className="">Media Search</div>
        <div className="flex gap-4">
          <Link className="bg-white text-base fort-medium text-black rounded px-3 py-1" to="/">Search</Link>
          <Link className="bg-white text-base fort-medium text-black rounded px-3 py-1" to="/collection">Collection</Link>
        </div>
      </div>
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

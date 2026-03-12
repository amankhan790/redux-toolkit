import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-700 py-5 flex justify-between font-bold text-xl px-10">
        <Link to={"/"} className="">
          Media Search
        </Link>
        <div className="flex gap-4">
          <Link
            className="bg-white text-base fort-medium text-black rounded px-3 py-1"
            to="/"
          >
            Search
          </Link>
          <Link
            className="bg-white text-base fort-medium text-black rounded px-3 py-1"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

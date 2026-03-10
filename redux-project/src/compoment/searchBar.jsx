import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));

    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-gray-800 p-10 rounded flex gap-5"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className="w-full px-5  rounded border-2 text-xl py-2 outline-none "
          type="text"
          placeholder="Search here...."
        />
        <button
          className="px-5 active:scale-95 rounded border-2 text-xl py-2 outline-none"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

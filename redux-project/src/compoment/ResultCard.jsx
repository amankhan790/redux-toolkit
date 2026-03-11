import React from "react";
import { useDispatch } from "react-redux";
import { addToCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCollection = () => {
    dispatch(addToCollection(item));
    console.log("hey");
  };
  return (
    <>
      <div className="w-[18vw] h-80 rounded bg-gray-300 relative">
        {item.type === "photo" ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.thumbnail}
              alt={item.tittle}
              className="w-full h-full object-cover rounded"
            />
          </a>
        ) : (
          <a href={item.src} target="_blank" rel="noopener noreferrer">
            <video
              autoPlay
              muted
              loop
              src={item.src}
              poster={item.thumbnail}
              className="w-full h-full object-cover rounded"
              controls
            />
          </a>
        )}
        <div className="mb-2 absolute bottom-0 flex gap-2 justify-between items-center w-full px-2 py-1">
          <h1 className="text-lg font-bold pl-2 shadow-md capitalize">
            {item.tittle.slice(0, 30)}...
          </h1>
          <button
            className="text-white bg-indigo-600 rounded hover:bg-indigo-700 px-3 py-1 cursor-pointer"
            onClick={() => {
              handleAddToCollection(item);
            }}
          >
            save
          </button>
        </div>
      </div>
    </>
  );
};

export default ResultCard;

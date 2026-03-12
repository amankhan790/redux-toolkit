import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../compoment/CollectioCard";
import { clearCollection } from "../redux/features/collectionSlice";

const Collection = () => {
  const collection = useSelector((store) => store.collection.items);

  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div>
      <div className="flex justify-between mt-10 px-5">
        <h1 className="text-3xl font-bold ">My Collection</h1>
        <button
          className="bg-red-500 rounded px-5 py-1"
          onClick={() => {
            clearAll();
          }}
        >
          Clear All
        </button>
      </div>
      {collection.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4 mb-20">
          <h1 className="text-2xl font-bold">Your collection is empty</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full mt-10 px-4">
          {collection.map((itemItem) => {
            return <CollectionCard key={itemItem.id} item={itemItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Collection;

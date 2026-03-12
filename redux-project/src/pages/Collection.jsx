import React, { use } from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../compoment/CollectioCard";

const Collection = () => {
  const collection = useSelector((store) => store.collection.items);
  return (
    <div>
      <div className="bg-blue-700 py-5 font-bold text-xl">My Collection</div>
      {collection.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4">
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

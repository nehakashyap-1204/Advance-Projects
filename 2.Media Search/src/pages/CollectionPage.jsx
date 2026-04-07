import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

function CollectionPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);
  const clearAll = () => {
    dispatch(clearCollection());
  };
  return (
    <div className=" overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-medium">Your Collection</h2>
          <button
            className="bg-red-600 px-5 py-2 text-lg font-medium rounded active:scale-95 transition cursor-pointer"
            onClick={clearAll}
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-2xl font-medium text-center">
          Collection is Empty
        </h2>
      )}

      <div className="w-full flex justify-start flex-wrap gap-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CollectionPage;

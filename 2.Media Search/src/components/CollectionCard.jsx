import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

function CollectionCard({ item }) {
  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removeToast());
  };
  return (
    <div className="relative w-[15vw] h-75 bg-white rounded-xl overflow-hidden">
      <a target="_blank" href={item.url} className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-end w-full px-4 py-8 absolute bottom-0 gap-3 text-white"
      >
        <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
        <button
          onClick={() => removeFromCollection(item)}
          className="bg-purple-800 px-3 py-1 font-medium rounded cursor-pointer active:scale-95"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;

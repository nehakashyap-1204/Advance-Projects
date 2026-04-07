import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

function Tabs() {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-10">
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
            className={`${
              activeTab == elem ? "bg-purple-800" : "bg-purple-600"
            } px-5 py-2 rounded text-white text-xl cursor-pointer uppercase transition`}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;

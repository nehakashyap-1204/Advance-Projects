import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-(--c1)">
      <h2 className="font-medium text-2xl"> Media Search</h2>
      <div className="flex gap-5 items-center">
        <Link
          className="text-base font-medium bg-(--c4) text-(--c1) rounded px-3 py-1 active:scale-95"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium bg-(--c4) text-(--c1) rounded px-3 py-1 active:scale-95"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

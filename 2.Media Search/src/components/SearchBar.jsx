import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

function Searchbar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex gap-5 py-10 px-14 bg-(--c2)"
      >
        <input
          required
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;

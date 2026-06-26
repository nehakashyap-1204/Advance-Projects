import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({
  suggestions,
  filterCategory,
  sortBy,
  onView,
  onUpvote,
}) {
  // filter category
  const filtered = suggestions.filter(
    (s) => filterCategory === "All" || s.category === filterCategory
  );

  // sort by
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Most Upvotes") return b.upvotes - a.upvotes;
    if (sortBy === "Least Upvotes") return a.upvotes - b.upvotes;
    if (sortBy === "Most Comments") return b.comments - a.comments;
    if (sortBy === "Least Comments") return a.comments - b.comments;
  });
  // conditional rendering
  if (sorted.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center">
        <p className="text-gray-500 text-lg">No suggestions found. Add One!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sorted.map((s) => {
        return (
          <FeedbackItem
            key={s.id}
            suggestions={s}
            onUpvote={onUpvote}
            onView={onView}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;

import { ChevronUp, MessageSquare } from "lucide-react";
import React from "react";

function FeedbackItem({ suggestions, onUpvote, onView }) {
  return (
    <div
      className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer shadow-md"
      onClick={() => onView && onView(suggestions)}
    >
      <div className="flex items-start gap-6">
        <button
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
            suggestions.upvoted
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-200"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onUpvote && onUpvote(suggestions.id);
          }}
        >
          <ChevronUp size={16} />
          <span className="font-bold text-sm">{suggestions.upvotes}</span>
        </button>

        <div className="flex-1">
          <h3 className="font-bold text-gray-800 text-lg mb-1 hover:text-blue-600 transition-all">
            {suggestions.title}
          </h3>
          <p className="text-gray-600 mb-3">Suggestion Description</p>
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-lg text-sm font-semibold">
            {suggestions.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MessageSquare className="text-gray-400" size={18} />
          <span className="font-bold text-gray-800">
            {suggestions.comments}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;

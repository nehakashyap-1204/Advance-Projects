import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";
import React, { useState } from "react";

function DetailView({
  feedback,
  comments,
  onBack,
  onUpvote,
  onOpenEdit,
  onAddComment,
}) {
  const [newComment, setNewComment] = useState("");

  const handlePost = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      name: "Current User",
      username: "@currentuser",
      avatar: "https://i.pravatar.cc/150?img=1",
      text: newComment,
      date: "just now",
    };

    onAddComment(feedback.id, comment);
    setNewComment("");
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start  gap-4">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Go Back
        </button>
        <button
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
          onClick={onOpenEdit}
        >
          Edit Feedback
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <button
            className={`flex sm:flex-col items-center gap-2 sm:gap-1 rounded-lg px-3 py-2 transition-all ${
              feedback.upvoted
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-blue-200 text-gray-800"
            }`}
            onClick={onUpvote}
          >
            <ChevronUp size={16} />
            <span className="font-bold text-sm">{feedback.upvotes}</span>
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-gray-800 text-xl mb-2">
              {feedback.title}
            </h2>
            <p className="text-gray-600 mb-3">{feedback.description} </p>
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
              {feedback.category}
            </span>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <MessageSquare className="text-gray-400" size={18} />
            <span className="font-bold text-gray-800">{feedback.comments}</span>
          </div>
        </div>
      </div>

      {/* { Conditional Rendering} */}
      {comments && comments.length > 0 && (
        <div className="bg-white rounded-xl p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-6">
            {comments.length} Comments
          </h3>
          <div className="space-y-6">
            {comments.map((comment) => {
              return (
                <div key={comment.id} className="flex gap-4">
                  <img
                    src={comment.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">
                          {comment.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {comment.username}
                        </p>
                      </div>
                      <button className="text-blue-600 font-semibold text-sm hover:underline">
                        Reply
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm leading leading-relaxed">
                      {comment.text}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* { conditional rendering} */}
            <div className="border-b border-gray-100"></div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6">
        <h3 className="font-bold text-gray-800 text-lg mb-4">Add Comment</h3>
        <textarea
          className="w-full border border-gray-200 rounded-lg  p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          maxLength={250}
          placeholder="Type your comment here"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
          <span className="text-gray-500 text-sm">
            {250 - newComment.length} Character Left
          </span>
          <button
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-all"
            onClick={handlePost}
            disabled={!newComment.trim()}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailView;

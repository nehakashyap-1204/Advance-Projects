import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import FeedbackList from "../components/FeedbackList";
import FeedbackModal from "../components/FeedbackModal";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addSuggestion, toggleUpvote } from "../store/feedbackSlice";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //   Redux data
  const suggestions = useSelector((state) => state.feedback.suggestions);
  const comments = useSelector((state) => state.feedback.comments);

  // ui state local
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Upvotes");

  // if the current url is /add then modelOpen = true
  const modelOpen = location.pathname === "/add";

  // derived counts from roadmap cards
  const roadmapCounts = useMemo(
    () => ({
      planned: suggestions.filter((s) => s.status === "Planned").length,
      inProgress: suggestions.filter((s) => s.status === "In-Progress").length,
      live: suggestions.filter((s) => s.status === "Live").length,
    }),
    [suggestions]
  );

  // handlers
  const openAdd = () => navigate("/add");
  const closeModel = () => navigate("/"); //go back to previous route

  const handleAdd = (payload) => {
    dispatch(addSuggestion(payload));
    closeModel();
  };

  const handleUpvotes = (id) => dispatch(toggleUpvote(id));

  const handleView = (item) => {
    navigate(`/feedback/${item.id}`);
  };
  return (
    // <div className="max-w-6xl mx-auto">
    //   <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    //     <Sidebar
    //       filterCategory={filterCategory}
    //       setFilterCategory={setFilterCategory}
    //       roadmapCounts={roadmapCounts}
    //       openRoadmap={() => navigate("/roadmap")}
    //       openAdd={openAdd}
    //     />

    //     <div className="lg:col-span-3 space-y-6">
    //       <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    //         <div className="flex items-center gap-4 flex-wrap">
    //           <span className="text-white font-bold">
    //             {suggestions.length} Suggestion
    //           </span>
    //           <div className="flex items-center gap-2">
    //             <span className="text-gray-300 text-sm">Sort by:</span>
    //             <select
    //               name=""
    //               id=""
    //               value={sortBy}
    //               onChange={(e) => setSortBy(e.target.value)}
    //               className="bg-transparent text-gray-400 font-semibold text-sm border-none outline-none cursor-pointer"
    //             >
    //               <option value="Most Upvotes">Most Upvotes</option>
    //               <option value="Least Upvotes">Least Upvotes</option>
    //               <option value="Most Comments">Most Comments</option>
    //               <option value="Least Comments">Least Comments</option>
    //             </select>
    //           </div>
    //         </div>

    //         <button
    //           className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all"
    //           onClick={openAdd}
    //         >
    //           + Add Feedback
    //         </button>
    //       </div>
    //       <FeedbackList
    //         suggestions={suggestions}
    //         filterCategory={filterCategory}
    //         sortBy={sortBy}
    //         onView={handleView}
    //         onUpvote={handleUpvotes}
    //       />
    //     </div>
    //   </div>

    //   <FeedbackModal
    //     isOpen={modelOpen}
    //     onClose={closeModel}
    //     onAdd={handleAdd}
    //     editingFeedback={null}
    //   />
    // </div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          roadmapCounts={roadmapCounts}
          openRoadmap={() => navigate("/roadmap")}
          openAdd={openAdd}
        />

        <div className="lg:col-span-3 space-y-6">
          {/* Header */}
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="text-white font-bold text-lg">
                {suggestions.length} Suggestions
              </span>

              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">Sort by:</span>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-gray-300 text-sm font-semibold outline-none cursor-pointer"
                >
                  <option value="Most Upvotes">Most Upvotes</option>
                  <option value="Least Upvotes">Least Upvotes</option>
                  <option value="Most Comments">Most Comments</option>
                  <option value="Least Comments">Least Comments</option>
                </select>
              </div>
            </div>

            <button
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all"
              onClick={openAdd}
            >
              + Add Feedback
            </button>
          </div>

          <FeedbackList
            suggestions={suggestions}
            filterCategory={filterCategory}
            sortBy={sortBy}
            onView={handleView}
            onUpvote={handleUpvotes}
          />
        </div>
      </div>

      <FeedbackModal
        isOpen={modelOpen}
        onClose={closeModel}
        onAdd={handleAdd}
        editingFeedback={null}
      />
    </div>
  );
}

export default HomePage;

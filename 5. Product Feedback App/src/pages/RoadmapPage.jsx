import React from "react";
import RoadmapView from "../components/RoadmapView";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleUpvote } from "../store/feedbackSlice";

function RoadmapPage() {
  const suggestions = useSelector((s) => s.feedback.suggestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpvote = (id) => dispatch(toggleUpvote(id));
  const handleView = (item) => navigate(`/feedback/${item.id}`);
  const openAdd = () => navigate("/add");

  return (
    <div className="max-w-6xl mx-auto">
      <RoadmapView
        suggestions={suggestions}
        onBack={() => navigate("/")}
        onView={handleView}
        onAdd={openAdd}
        onUpvote={handleUpvote}
      />
    </div>
  );
}

export default RoadmapPage;

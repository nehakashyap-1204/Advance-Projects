import React, { useEffect, useMemo } from "react";
import DetailView from "../components/DetailView";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  deleteSuggestion,
  toggleUpvote,
  updateSuggestion,
} from "../store/feedbackSlice";
import FeedbackModal from "../components/FeedbackModal";

function DetailPage() {
  const { id } = useParams();
  const suggestionId = Number(id);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const suggestions = useSelector((s) => s.feedback.suggestions);
  const comments = useSelector((s) => s.feedback.comments);

  const feedback = useMemo(() => {
    return suggestions.find((s) => s.id === suggestionId);
  }, [suggestions, suggestionId]);

  useEffect(() => {
    if (!feedback) {
      navigate("/");
    }
  }, [feedback, navigate]);

  if (!feedback) return null;

  const isEditRoute = location.pathname.endsWith("/edit");

  const closeModel = () => navigate(-1);

  const handleUpvote = () => dispatch(toggleUpvote(feedback.id));

  const handleAddComments = (suggestionId, comment) => {
    dispatch(addComment({ suggestionId, comment }));
  };

  const handleUpdate = (payload) => {
    dispatch(updateSuggestion(payload));
    closeModel();
  };

  const handleDelete = (id) => {
    dispatch(deleteSuggestion(id));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <DetailView
        feedback={feedback}
        comments={comments[feedback.id] || []}
        onBack={() => navigate("/")}
        onUpvote={handleUpvote}
        onOpenEdit={() => navigate(`/feedback/${feedback.id}/edit`)}
        onAddComment={handleAddComments}
      />

      <FeedbackModal
        isOpen={isEditRoute}
        onClose={closeModel}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        editingFeedback={isEditRoute ? feedback : null}
      />
    </div>
  );
}

export default DetailPage;

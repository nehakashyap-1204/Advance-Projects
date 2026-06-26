import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

function FeedbackModal({
  isOpen,
  onClose,
  onAdd,
  editingFeedback,
  onUpdate,
  onDelete,
}) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Feature",
    status: "Planned",
    description: "",
  });

  useEffect(() => {
    if (editingFeedback) {
      setFormData({
        title: editingFeedback.title || "",
        category: editingFeedback.category || "Feature",
        status: editingFeedback.status || "Planned",
        description: editingFeedback.description || "",
      });
    } else {
      setFormData({
        title: "",
        category: "Feature",
        status: "Planned",
        description: "",
      });
    }
  }, [editingFeedback, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      return;
    }

    if (editingFeedback) {
      onUpdate?.({ ...editingFeedback, ...formData });
    } else {
      onAdd?.(formData);
    }

    onClose();
  };

  const handleDelete = () => {
    if (!editingFeedback) return;
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      onDelete?.(editingFeedback.id);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {editingFeedback ? "Edit Feedback" : "Create New Feedback"}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Feedback Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Add a short,descriptive headline"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Category
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="Feature">Feature</option>
              <option value="Ui">Ui</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Status
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Live">Live</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Feedback Details
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {editingFeedback && (
              <button
                className="w-full sm:flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
            <button
              className="w-full sm:flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold transition-all"
              type="button"
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </button>
            <button
              className="w-full sm:flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all"
              type="submit"
            >
              {editingFeedback ? "Save Changes" : "Add Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;

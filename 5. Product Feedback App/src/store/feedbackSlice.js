import { createSlice } from "@reduxjs/toolkit";
import { initialSuggestions, initialComments } from "../data/initialData";

const initialState = {
  suggestions: initialSuggestions,
  comments: initialComments,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addSuggestion: (state, action) => {
      const payload = action.payload;
      const newSuggestions = {
        id: Date.now(),
        title: payload.title,
        description: payload.description,
        category: payload.category || "Feature",
        status: payload.status || "Planned",
        upvotes: 0,
        comments: 0,
        upvoted: false,
      };

      state.suggestions.push(newSuggestions);
    },

    updateSuggestion: (state, action) => {
      const { id, ...changes } = action.payload;

      const idx = state.suggestions.findIndex((s) => s.id === id);

      if (idx !== -1) {
        state.suggestions[idx] = {
          ...state.suggestions[idx],
          ...changes,
        };
      }
    },

    deleteSuggestion: (state, action) => {
      const id = action.payload;

      // remove suggestion
      state.suggestions = state.suggestions.filter((s) => s.id !== id);

      // remove comments for that suggestion
      delete state.comments[id];
    },

    toggleUpvote: (state, action) => {
      const id = action.payload;
      const item = state.suggestions.find((s) => s.id === id);

      if (item) {
        item.upvoted = !item.upvoted;
        item.upvotes = item.upvoted
          ? item.upvotes + 1
          : Math.max(0, item.upvotes - 1);
      }
    },

    addComment: (state, action) => {
      const { suggestionId, comment } = action.payload;

      // Create an empty array if this suggestion has no comments yet
      if (!state.suggestions[suggestionId]) {
        state.comments[suggestionId] = [];
      }

      // Add the new comment
      state.comments[suggestionId].push({
        id: Date.now(),
        ...comment,
      });

      // Update comment count on the suggestion
      const suggestion = state.suggestions.find((s) => s.id === suggestionId);

      if (suggestion) {
        suggestion.comments = state.comments[suggestionId].length;
      }
    },

    replaceAll: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addSuggestion,
  updateSuggestion,
  deleteSuggestion,
  toggleUpvote,
  addComment,
  replaceAll,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;

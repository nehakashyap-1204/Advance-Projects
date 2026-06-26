export const initialSuggestions = [
  {
    id: 1,
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    upvotes: 112,
    comments: 2,
    category: "Enhancement",
    upvoted: false,
    status: "Planned",
  },
  {
    id: 2,
    title: "Dark mode support",
    description: "Allow users to switch between light and dark themes.",
    upvotes: 89,
    comments: 1,
    category: "Feature",
    upvoted: false,
    status: "In-Progress",
  },
  {
    id: 3,
    title: "Improve mobile navigation",
    description: "The navigation menu is difficult to use on smaller screens.",
    upvotes: 74,
    comments: 2,
    category: "UX",
    upvoted: false,
    status: "Planned",
  },
  {
    id: 4,
    title: "Fix login redirect issue",
    description:
      "Users are sometimes redirected to the wrong page after login.",
    upvotes: 56,
    comments: 0,
    category: "Bug",
    upvoted: false,
    status: "In-Progress",
  },
  {
    id: 5,
    title: "Redesign dashboard layout",
    description:
      "Simplify the dashboard to make key information easier to find.",
    upvotes: 101,
    comments: 1,
    category: "UI",
    upvoted: false,
    status: "Live",
  },
  {
    id: 6,
    title: "Add profile picture upload",
    description: "Allow users to upload and update their profile pictures.",
    upvotes: 67,
    comments: 0,
    category: "Feature",
    upvoted: false,
    status: "Planned",
  },
];

export const initialComments = {
  1: [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      avatar: "https://i.pravatar.cc/150?img=1",
      text: "This is a great feature idea! Would love to see it implemented soon.",
    },
    {
      id: 2,
      name: "Sarah Smith",
      username: "sarahs",
      avatar: "https://i.pravatar.cc/150?img=2",
      text: "I agree with this suggestion. It would improve usability a lot.",
    },
  ],

  2: [
    {
      id: 3,
      name: "Michael Lee",
      username: "michaellee",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Dark mode would make the app much easier on the eyes.",
    },
  ],

  3: [
    {
      id: 4,
      name: "Ananya Patel",
      username: "ananyap",
      avatar: "https://i.pravatar.cc/150?img=4",
      text: "The navigation definitely needs some improvement on mobile.",
    },
    {
      id: 5,
      name: "David Wilson",
      username: "davidw",
      avatar: "https://i.pravatar.cc/150?img=5",
      text: "I've experienced the same issue several times.",
    },
  ],

  4: [],

  5: [
    {
      id: 6,
      name: "Emma Brown",
      username: "emmab",
      avatar: "https://i.pravatar.cc/150?img=6",
      text: "This redesign would make the dashboard much cleaner.",
    },
  ],
};

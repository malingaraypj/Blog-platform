import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModalProvider } from "./contexts/modelContext";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/helper";

// Importing pages
// import PostDetails from "./components/center/PostDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";

//importing landing page and ites childrens
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import DiscoverPosts from "./pages/discoverPosts";
import FollowingPosts from "./pages/FollowingPosts";
import PostDetails from "./pages/PostDetails";

const router = createBrowserRouter([
  { path: "/", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    path: "/app",
    element: <LandingPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "home",
        element: <Home />,
        children: [
          { index: true, element: <DiscoverPosts /> },
          {
            path: "discover",
            element: <DiscoverPosts />,
          },
          {
            path: "following",
            element: <FollowingPosts />,
          },
        ],
      },
      { path: "explore", element: <div>Explore...</div> },
      { path: "notification", element: <div>Notifications...</div> },
      { path: "messages", element: <div>Messages...</div> },
      { path: "profile", element: <UserProfile /> },
      { path: "more", element: <div>More...</div> },

      // global post details route
      { path: ":postId", element: <PostDetails /> },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

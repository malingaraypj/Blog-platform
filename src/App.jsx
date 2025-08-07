import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { ModalProvider } from "./contexts/modelContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/post";
import PostDetails from "./components/center/PostDetails";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <LandingPage />,
  },
  { path: "/:postId", element: <PostDetails /> },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </QueryClientProvider>
  );
};

export default App;

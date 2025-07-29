import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PostProvider from "./contexts/postContext";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
]);

const App = () => {
  return (
    <PostProvider>
      <RouterProvider router={router} />;
    </PostProvider>
  );
};

export default App;

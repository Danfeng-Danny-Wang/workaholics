import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Lobby from "./pages/Lobby.jsx";
import ChatBox from "./pages/ChatBox.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Lobby",
        element: <Lobby />,
      },
      {
        path: "/ChatBox",
        element: <ChatBox />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

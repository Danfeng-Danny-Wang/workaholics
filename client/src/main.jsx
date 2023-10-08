import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx'
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/Login',
        element: <Login />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

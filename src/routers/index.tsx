import Login from "../pages/Login";
import Home from "../pages/Home";
import UserRegister from "../pages/Login/Register";

export const PrivateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

export const PublicRoutes = [
  {
    path: "register",
    element: <UserRegister />,
  },
  {
    path: "",
    element: <Login />,
  },
];

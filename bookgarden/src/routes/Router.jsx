import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import AllBooks from '../views/AllBooks/AllBooks'
import AddBook from "../views/AddBook/AddBook";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {path: '/allbooks', element: <AllBooks />},
    { path: "/addbook", element: <AddBook />},
  ]);
  return routes;
};

export default Router;

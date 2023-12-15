import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import AllBooks from "../views/AllBooks/AllBooks";
import AddBook from "../views/AddBook/AddBook";
import DetailBook from "../views/DetailBook/DetailBook";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/allbooks", element: <AllBooks /> },
    { path: "/addbook", element: <AddBook /> },
    { path: "/allbooks/:id", element: <DetailBook /> },
  ]);
  return routes;
};

export default Router;

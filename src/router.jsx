import Layout from "./components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import S2info from "./components/section-2/S2info";
import Search from "./page/Search";
import Alpha from "./components/alfavit/Alpha";
import AlphaSearch from "./components/alfavit/AlphaSearch";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "section2/:idMeal",
        element: <S2info />,
      },
      {
        path: "search/:value",
        element: <Search />,
      },
      {
        path: "/alpha",
        element: <Alpha />,
      },
      {
        path: "/alpha/:letter", 
        element: <AlphaSearch />,
      },
    ],
  },
]);
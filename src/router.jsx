import Layout from "./components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import S2info from "./components/section-2/S2info";
import Search from "./page/Search";
import Alpha from "./components/alfavit/Alpha";
import AlphaSearch from "./components/alfavit/AlphaSearch";
import Country from "./components/country/Country";
import CountrySearch from "./components/country/CountrySearch";
import PlistInfo from "./components/Productlist/info/PlistInfo";


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
        path: "search/:value",
        element: <Search />,
      },
      {
        path: "alpha",
        element: <Alpha />,
      },
      {
        path: "/alpha/:letter", 
        element: <AlphaSearch />,
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"/country/:country",
        element:<CountrySearch/>
      },
      {
        path:"info/:id",
        element:<PlistInfo/>
      }
    ],
  },
]);
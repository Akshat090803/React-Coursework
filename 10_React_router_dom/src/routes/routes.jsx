import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Explore from "./Explore";
import Detail from "./detail";
import App from "../App";
import PageNotexist from "./PageNotExist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {path:"/explore",element:<Explore/> , children:[
        {path:"/explore/:id",element:<Detail/>}
      ]}
    ],
  },
  {path:'*',element:<PageNotexist/>}
]);

export default routes;

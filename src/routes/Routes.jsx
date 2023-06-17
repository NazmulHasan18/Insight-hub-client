import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Events from "../Pages/Events/Events";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/events",
            element: <Events></Events>,
         },
      ],
   },
]);

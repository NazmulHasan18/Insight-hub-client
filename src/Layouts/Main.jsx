import { Outlet, useLocation } from "react-router-dom";
import MainNav from "../Pages/Shared/MainNav/MainNav";
import Footer from "../Pages/Shared/Footer/Footer";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";

const Main = () => {
   const location = useLocation().pathname;
   return (
      <div>
         <MainNav></MainNav>
         {location === "/" ? (
            <>
               <Blogs></Blogs>
               <Home></Home>
            </>
         ) : (
            <Outlet></Outlet>
         )}
         <Footer></Footer>
      </div>
   );
};

export default Main;

import { Outlet } from "react-router-dom";
import MainNav from "../Pages/Shared/MainNav/MainNav";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
   return (
      <div>
         <MainNav></MainNav>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;

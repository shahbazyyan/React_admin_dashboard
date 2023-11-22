import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Users from "./pages/users/Users";
import Product from "./pages/products/Product";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import './styles/global.scss';
import Login from "./components/login/Login";

function App() {

  function Layout () {
      return (
        <div className="main">
          <Navbar/>
             <div className="container">
               <div className="menu-container">
                     <Menu/>
               </div>
               <div className="content-container">
                   <Outlet/>
               </div>
             </div>
          <Footer/>
        </div>
      )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/users",
          element: <Users/>
        },
        {
          path: "/products",
          element: <Product/>
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App

import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Users from "./pages/users/Users";
import Product from "./pages/products/Product";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Home/>
        </div>
      ),
    },
    {
      path: "users",
      element: <Users/>,
    },
    {
      path: "products",
      element: <Product/>,
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App

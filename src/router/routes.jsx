import {createBrowserRouter} from "react-router-dom";

import Error from "../pages/Error";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetailPage";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: <Error />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
  },
]);
import React, {useEffect,useState}from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes.jsx";
import ProductContext from "./context/ProductContext";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
      <ProductContext.Provider value={{products,isLoading}}>
        <RouterProvider router={routes} />
      </ProductContext.Provider>
    </>
  );
}

export default App;

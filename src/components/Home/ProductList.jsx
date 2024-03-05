import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../context/ProductContext";
import Loading from "../Loading";

const ProductList = ({searchInput }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {products, isLoading} = useContext(ProductContext);

  useEffect(() => {
    const filteredList = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filteredList);
  }, [products, searchInput]);

  return (
    <section id="products" className="flex flex-row flex-wrap ">
      {isLoading && <Loading />}
      {filteredProducts.length === 0 && !isLoading && (
        <p className="my-auto">No products found.</p>
      )}
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col w-72 items-center gap-5 p-2 rounded-md shadow-md m-2"
        >
          <img src={product.image} alt={product.title} className="w-32 h-32" />
          <h2 className="text-lg font-bold text-center">{product.title}</h2>
          <p className="text-lg">{product.price}</p>
          <div className="flex flex-row gap-x-2">
            <Link
              to={`/products/${product.id}`}
              className="px-3 rounded-md cursor-pointer"
            >
              View Details
            </Link>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md cursor-pointer">
              Pay
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;

import { useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import Loading from "../components/Loading";
import Error from "./Error";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, isLoading } = useContext(ProductContext);

  // memoize the find product to optimize performance
  const product = useMemo(
    () => products.find((product) => product.id === Number(productId)),
    [products, productId]
  );

  const previousPage = () => {
    const currentProductId = Number(productId);
    if (currentProductId <= 1) {
      return currentProductId;
    }
    return currentProductId - 1;
  };
  const nextPage = () => {
    const currentProductId = Number(productId);
    if (currentProductId >= products.length) {
      return currentProductId;
    }
    return currentProductId + 1;
  };

  if (!product && !isLoading) {
    return <Error />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-96  mx-auto">
      {/* loading state  */}
      {isLoading && <Loading />}
      {/* product detail  */}
      {product && (
        <>
          {/* card */}
          <h1 className="text-3xl font-bold my-5">Product Detail</h1>
          <div className="flex flex-col items-center gap-5 p-5 rounded-md shadow-md m-5 w-96 h-[200rem] max-h-[200rem]">
            <img
              src={product.image}
              alt={product.title}
              className="w-64 h-64"
            />
            <h2 className="text-2xl font-bold text-center">{product.title}</h2>
            <p className="text-2xl">{product.price}</p>
            <p className=" text-base ">{product.description}</p>
          </div>

          {/* button  */}
          <div className="flex flex-row text-center space-x-1">
            <Link
              to={`/products/${previousPage()}`}
              className="bg-gray-500 rounded cursor-pointer p-3 w-20"
            >
              Previous
            </Link>
            <Link
              to="/"
              className="bg-blue-500 p-3 text-white  rounded-md cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={`/products/${nextPage()}`}
              className="bg-gray-500 rounded cursor-pointer p-3 w-20"
            >
              Next
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SortBy from "./sort/SortBy";
export default function Products({ products, setProductList }) {
  return (
    <>
      <SortBy products={products} setProductList={setProductList}></SortBy>
      <div className="grid lg:grid-cols-4 gap-6 m-2 md:grid-cols-3 sm-grid-cols-2 justify-items-center content-center">
        {products.map((product, index) => {
          return (
            <div key={index} className="border-2 border-gray-200 pb-1 ">
              <div>
                <Link to={`/products/${index}`}>
                  <h2 className="font-bold">{product.name}</h2>
                  <p className="text-green-700 font-bold">
                    $
                    {product.price_array[
                      product.price_array.length - 1
                    ].toFixed(2)}
                  </p>
                </Link>
              </div>
              <button className="mt-1 border rounded-full px-4 py-1 text-sm text-blue-700 font-semibold border-gray-900 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                <Link to={`/products/${index}`}>More Info</Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

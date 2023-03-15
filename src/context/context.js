import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);

  let getData = async () => {
    let response = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    setProducts(response);
  };

  useEffect(() => {
    getData();
  }, []);

  const updateProductByCategory = async (category) => {
    setProducts([]);
    let api = "https://fakestoreapi.com/products";
    let response = await (await fetch(`${api}/${category}`)).json();
    setProducts(response);
  };
  const updateSingleProduct = async (productId) => {
    let api = "https://fakestoreapi.com/products";
    let response = await (await fetch(`${api}/${productId}`)).json();
    setSingleProduct(response);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        updateProductByCategory,
        singleProduct,
        setSingleProduct,
        updateSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;

import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/context";
import DetailsCard from "./DetailsCard";
import DetailsSkeleton from "./DetailsSkeleton";

function Details() {
  const { productid } = useParams();
  const { singleProduct, updateSingleProduct, setSingleProduct } =
    useContext(ProductsContext);
  const productLength = singleProduct.length;

  useEffect(() => {
    updateSingleProduct(productid);
    return setSingleProduct([]);
  }, []);
  return (
    <>
      {productLength == 0 ? (
        <DetailsSkeleton />
      ) : (
        <DetailsCard product={singleProduct} />
      )}
    </>
  );
}
export default Details;

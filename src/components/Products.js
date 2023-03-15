import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { ProductsContext } from "../context/context";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./CardSkeleton";
import FilterBtns from "./FilterBtns";
function Products() {
  let [data, setData] = useState([]);
  let dataLength = data.length;
  let { products } = useContext(ProductsContext);

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <>
      <div id="products">
        <h1 className="pt-5 heading mb-5">Our Products</h1>
        <FilterBtns />
        <div className="container py-5">
          <div className="row">
            {dataLength ? (
              data.map((ele) => {
                return <Card product={ele} key={ele.id} />;
              })
            ) : (
              <CardSkeleton cardsNumber={8} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

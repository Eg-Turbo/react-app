import { useContext } from "react";
import { ProductsContext } from "../context/context";
function FilterBtns() {
  let { updateProductByCategory } = useContext(ProductsContext);
  return (
    <div className="filters mt-5 w-100 d-flex justify-content-center align-items-center flex-wrap">
      <button
        type="button"
        className="btn btn-secondary me-4 my-4"
        onClick={() => {
          updateProductByCategory("");
        }}
      >
        All
      </button>

      <button
        type="button"
        className="btn btn-secondary me-4 my-4"
        onClick={() => {
          updateProductByCategory("category/jewelery");
        }}
      >
        jewelery
      </button>

      <button
        type="button"
        className="btn btn-secondary me-4 my-4"
        onClick={() => {
          updateProductByCategory("category/electronics");
        }}
      >
        electronics
      </button>

      <button
        type="button"
        className="btn btn-secondary me-4 my-4"
        onClick={() => {
          updateProductByCategory("category/men's clothing");
        }}
      >
        men's clothing
      </button>

      <button
        type="button"
        className="btn btn-secondary my-4 "
        onClick={() => {
          updateProductByCategory("category/women's clothing");
        }}
      >
        women's clothing
      </button>
    </div>
  );
}
export default FilterBtns;

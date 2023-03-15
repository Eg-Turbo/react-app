import { Link } from "react-router-dom";

function Card({ product: { image, title, price, id } }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3  ">
      <div className="card card-height ml-3 mb-3 p-3">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 12)}</h5>
          <p className="card-text">{price}$</p>
          <Link to={`/details/${id}`} className="btn btn-primary">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Card;

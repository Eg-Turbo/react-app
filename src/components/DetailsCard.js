import { Link } from "react-router-dom";

function DetailsCard({ product: { image, title, description, price } }) {
  return (
    <div className="container details-cont d-flex justify-content-center align-items-center">
      <div className="card mb-3 p-5">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={image} className="img-fluid rounded-start" alt={title} />
          </div>
          <div className="col-md-7 d-flex flex-wrap">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <h3 className="card-text">{price}$</h3>
            </div>
            <Link
              to={`/#products`}
              className="btn btn-primary me-3 ms-4 align-self-end"
            >
              Add to cart
            </Link>
            <Link to={`/`} className="btn btn-primary align-self-end">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsCard;

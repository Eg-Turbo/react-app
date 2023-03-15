import Skeleton from "react-loading-skeleton";

function CardSkeleton({ cardsNumber }) {
  return Array(cardsNumber)
    .fill(0)
    .map((ele) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
        <div className="card card-height ml-3 mb-3 p-3 w-100 ">
          <Skeleton className="w-100" height={250} />
          <div className="card-body">
            <Skeleton width={180} />
            <p className="card-text">
              <Skeleton width={180} />
            </p>
            <Skeleton width={120} height={35} className="pb-3" />
          </div>
        </div>
      </div>
    ));
}

export default CardSkeleton;

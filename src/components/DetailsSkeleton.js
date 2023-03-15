import Skeleton from "react-loading-skeleton";
function DetailsSkeleton() {
  return (
    <div className="container details-cont d-flex justify-content-center align-items-center">
      <div className="card mb-3 p-5 w-100">
        <div className="row g-0">
          <div className="col-md-5">
            <Skeleton width={200} height={500} className="w-100" />
          </div>
          <div className="col-md-7 d-flex flex-wrap">
            <div className="card-body d-flex flex-column flex-wrap justify-content-between">
              <Skeleton className="w-100" count={10} />
              <div className="d-flex ">
                <Skeleton width={100} height={50} className="me-4" />
                <Skeleton width={100} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsSkeleton;

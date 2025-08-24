import { Link } from "react-router-dom";
import "../Style/ProductLeftImg.css";
function LeftImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-1 mx-4 px-5 pt-5">
      <div className="row mt-3 ms-3 px-5 pt-3 me-2 ">
        <div className="col px-5 ">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="col ms-5 pe-0 px-5">
          <h2 className="my-4 ps-0 pt-3">{productName}</h2>
          <p className="right_para">{productDescription}</p>
          <div className="row">
            <div className="col-5">
              {tryDemo && (
                <a className="fs-6" href={tryDemo}>
                  {tryDemo} &nbsp; <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
            <div className="col ms-0">
              {learnMore && (
                <a className="fs-6" href={learnMore}>
                  {learnMore} &nbsp; <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          </div>
          <div className="Badges py-4">
            <a href={googlePlay}>
              <img
                className="badges"
                src="/media/images/googlePlayBadge.svg"
                alt="googlePlayBadge"
              />
            </a>
            <a href={appStore}>
              <img
                className="badges ms-3"
                src="/media/images/appstoreBadge.svg"
                alt="appstoreBadge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;

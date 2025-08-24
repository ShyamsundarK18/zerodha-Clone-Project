// import { Link } from "react-router-dom";
// import "../Style/ProductRightImg.css";
// function RightImage({ productName, productDescription, learnMore, imageUrl }) {
//   return (
//     <div className="container p-5 mt-4 mx-5">
//       <div className="row mx-3 px-5">
//         <div className="col-5 ps-2 left-para-col">
//           <h2 className="my-4 ">{productName}</h2>
//           <p className="left_para">{productDescription}</p>
//           {learnMore && (
//             <Link className="fs-6">
//               {learnMore} &nbsp; <i className="fa-solid fa-arrow-right"></i>
//             </Link>
//           )}
//         </div>
//         <div className="col-7 ps-5">
//           <img src={imageUrl} alt={productName} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightImage;

import { Link } from "react-router-dom";
import "../Style/ProductRightImg.css";

function RightImage({ productName, productDescription, learnMore, imageUrl }) {
  return (
    <div className="container p-5 mt-4 mx-5 main-container">
      <div className="row mx-3 px-5 flex-column flex-md-row align-items-start">
        {/* Image on top for small screens, right for desktop */}
        <div className="col-12 col-md-7 ps-0 ps-md-5 order-1 order-md-2 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>

        {/* Text below image on small screens, left side on desktop */}
        <div className="col-12 col-md-5 ps-2 left-para-col order-2 order-md-1 text-center text-md-start">
          <h2 className="my-4">{productName}</h2>
          <p className="left_para">{productDescription}</p>
          {learnMore && (
            <Link className="fs-6">
              {learnMore} &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightImage;

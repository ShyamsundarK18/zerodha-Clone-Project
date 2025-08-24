// import "../Style/Pricing.css";

// function Pricing() {
//   return (
//     <div className="container mx-5 py-5">
//       <div className="row ps-5 mx-5">
//         {/* Left Column */}
//         <div className="col-md-5 pe-md-5 mb-4 mb-md-0">
//           <h2 className="fs-2 mb-4">Unbeatable pricing</h2>
//           <p>
//             We pioneered the concept of discount broking and price transparency
//             in India. Flat fees and no hidden charges.
//           </p>
//           <a href="#" className="text-primary text-decoration-none fs-6">
//             See pricing <i className="fa-solid fa-arrow-right-long"></i>
//           </a>
//         </div>

//         {/* Right Column */}
//         <div className="col-md-7 mt-3">
//           <div className="row g-4 mt-1">
//             <div className="col-md-4 d-flex align-items-center">
//               <img
//                 src="/media/images/pricingMF.svg"
//                 alt="Free Account"
//                 className="icon-img"
//               />
//               <p className="mb-0 pricing-text">
//                 Free account <br /> opening
//               </p>
//             </div>

//             <div className="col-md-4 d-flex align-items-center">
//               <img
//                 src="/media/images/pricingMF.svg"
//                 alt="Free Delivery"
//                 className="icon-img"
//               />
//               <p className="mb-0 pricing-text">
//                 Free equity delivery <br /> and direct mutual funds
//               </p>
//             </div>

//             <div className="col-md-4 d-flex align-items-center">
//               <img
//                 src="/media/images/other-trades.svg"
//                 alt="₹20 Trading"
//                 className="icon-img me-3"
//               />
//               <p className="mb-0 pricing-text">
//                 Intraday and <br /> F&amp;O
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pricing;

import "../Style/Pricing.css";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center mx-4">
        {/* Left Column */}
        <div className="col-12 col-md-5 mb-4 mb-md-0 text-center text-md-start">
          <h2 className="fs-2 mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-primary text-decoration-none fs-6">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-7">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column flex-sm-row align-items-center">
              <img
                src="/media/images/pricingMF.svg"
                alt="Free Account"
                className="icon-img"
              />
              <p className="mb-0 pricing-text">
                Free account <br /> opening
              </p>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column flex-sm-row align-items-center">
              <img
                src="/media/images/pricingMF.svg"
                alt="Free Delivery"
                className="icon-img"
              />
              <p className="mb-0 pricing-text">
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column flex-sm-row align-items-center">
              <img
                src="/media/images/other-trades.svg"
                alt="₹20 Trading"
                className="icon-img "
              />
              <p className="mb-0 pricing-text ms-1">
                Intraday and <br /> F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

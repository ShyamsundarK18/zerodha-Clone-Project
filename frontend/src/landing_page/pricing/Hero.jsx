// import "../Style/PricingHero.css";

// function Hero() {
//   return (
//     <div className="container">
//       <div className="text-center my-5 py-5">
//         <h2>Charges</h2>
//         <h5 className="text-muted pt-2">List of all charges and taxes</h5>
//       </div>

//       <div className="row p-5 text-center">
//         <div className="col p-5">
//           <img
//             className="pricing-img"
//             src="/media/images/pricing0.svg"
//             alt="pricing0"
//           />
//           <h3 className="mb-4 mt-3">Free equity delivery</h3>
//           <p className="pricing-hero-para">
//             All equity delivery investments (NSE, BSE), are absolutely free — ₹
//             0 brokerage.
//           </p>
//         </div>
//         <div className="col px-3 py-5">
//           <img
//             className="pricing-img"
//             src="/media/images/other-trades.svg"
//             alt="other-trades"
//           />
//           <h3 className="mb-4 mt-3">Intraday and F&O trades</h3>
//           <p className="pricing-hero-para">
//             Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
//             intraday trades across equity, currency, and commodity trades. Flat
//             ₹20 on all option trades.
//           </p>
//         </div>
//         <div className="col p-5">
//           <img
//             className="pricing-img"
//             src="/media/images/pricing0.svg"
//             alt="pricing0"
//           />
//           <h3 className="mb-4 mt-3">Free direct MF</h3>
//           <p className="pricing-hero-para">
//             All direct mutual fund investments are absolutely free — ₹ 0
//             commissions & DP charges.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import "../Style/PricingHero.css";

function Hero() {
  return (
    <div className="container">
      <div className="text-center my-5 py-5">
        <h2>Charges</h2>
        <h5 className="text-muted pt-2">List of all charges and taxes</h5>
      </div>

      <div className="row text-center p-3 p-md-5">
        {/* Use col-12 on mobile, col-md-4 for desktop, consistent padding */}
        <div className="col-12 col-md-4 p-3 p-md-5">
          <img
            className="pricing-img"
            src="/media/images/pricing0.svg"
            alt="pricing0"
          />
          <h3 className="mb-4 mt-3">Free equity delivery</h3>
          <p className="pricing-hero-para">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-5">
          <img
            className="pricing-img"
            src="/media/images/other-trades.svg"
            alt="other-trades"
          />
          <h3 className="mb-4 mt-3">Intraday and F&O trades</h3>
          <p className="pricing-hero-para">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-5">
          <img
            className="pricing-img"
            src="/media/images/pricing0.svg"
            alt="pricing0"
          />
          <h3 className="mb-4 mt-3">Free direct MF</h3>
          <p className="pricing-hero-para">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

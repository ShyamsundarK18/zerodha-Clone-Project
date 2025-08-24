// function Education() {
//   return (
//     <div className="container my-5 py-5">
//       <div className="row m-5">
//         <div className="col">
//           <img src="/media/images/education.svg" alt="" />
//         </div>
//         <div className="col pe-4">
//           <h2 className="fs-2 mb-4">Free and open market education</h2>
//           <p>
//             Varsity, the largest online stock market education book in the world
//             covering everything from the basics to advanced trading.
//           </p>
//           <a href="#" className="text-primary text-decoration-none fs-6">
//             Varsity <i className="fa-solid fa-arrow-right-long"></i>
//           </a>
//           <p className="mt-5">
//             TradingQ&A, the most active trading and investment community in
//             India for all your market related queries.
//           </p>
//           <a href="#" className="text-primary text-decoration-none fs-6">
//             TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;

function Education() {
  return (
    <div className="container  my-5 py-5">
      <div className="row align-items-center g-4">
        {/* Image Column */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="/media/images/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>

        {/* Text Column */}
        <div className="col-12 col-md-6 pe-md-4 text-center text-md-start">
          <h2 className="fs-2 mb-4">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-primary text-decoration-none fs-6">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="text-primary text-decoration-none fs-6">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

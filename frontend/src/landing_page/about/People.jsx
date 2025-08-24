// import React from "react";
// import "../Style/AboutPeople.css";
// import { Link } from "react-router-dom";

// function People() {
//   return (
//     <div className="container ps-0 pt-0 p-5">
//       <div className="row ms-0 mt-0 px-5 m-5">
//         <div className="col pe-0 p-4 mt-5 text-center">
//           <img
//             className="people_img my-3  ms-5"
//             src="/media/images/nithinKamath.jpg"
//             alt="Nithin"
//           />
//           <h4 className="ms-4 px-3">Nithin Kamath</h4>
//           <p className=" ms-3 p-3">Founder, CEO</p>
//         </div>
//         <div className="col pt-0 p-5 ps-0">
//           <h1 className="mb-5 pb-3">People</h1>
//           <p className="people_para">
//             Nithin bootstrapped and founded Zerodha in 2010 to overcome the
//             hurdles he faced during his decade long stint as a trader. Today,
//             Zerodha has changed the landscape of the Indian broking industry.
//           </p>
//           <p className="people_para">
//             He is a member of the SEBI Secondary Market Advisory Committee
//             (SMAC) and the Market Data Advisory Committee (MDAC).
//           </p>
//           <p className="people_para">Playing basketball is his zen.</p>
//           <p>
//             Connect on <Link className="fs-6">Homepage</Link> /{" "}
//             <Link className="fs-6">TradingQnA </Link> /{" "}
//             <Link className="fs-6">Twitter</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default People;

// import React from "react";
// import "../Style/AboutPeople.css";
// import { Link } from "react-router-dom";

// function People() {
//   return (
//     <div className="container py-5">
//       <div className="row gx-5 gy-4 align-items-center">
//         {/* Image Section */}
//         <div className="col-12 col-lg-5 text-center">
//           <img
//             className="people_img my-3"
//             src="/media/images/nithinKamath.jpg"
//             alt="Nithin"
//           />
//           <h4 className="px-3">Nithin Kamath</h4>
//           <p className="p-3">Founder, CEO</p>
//         </div>

//         {/* Text Section */}
//         <div className="col-12 col-lg-7">
//           <h1 className="mb-4">People</h1>
//           <p className="people_para">
//             Nithin bootstrapped and founded Zerodha in 2010 to overcome the
//             hurdles he faced during his decade long stint as a trader. Today,
//             Zerodha has changed the landscape of the Indian broking industry.
//           </p>
//           <p className="people_para">
//             He is a member of the SEBI Secondary Market Advisory Committee
//             (SMAC) and the Market Data Advisory Committee (MDAC).
//           </p>
//           <p className="people_para">Playing basketball is his zen.</p>
//           <p>
//             Connect on <Link className="fs-6">Homepage</Link> /{" "}
//             <Link className="fs-6">TradingQnA</Link> /{" "}
//             <Link className="fs-6">Twitter</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default People;

import React from "react";
import "../Style/AboutPeople.css";
import { Link } from "react-router-dom";

function People() {
  return (
    <div className="container py-5">
      {/* Heading centered above everything */}
      <h1 className="text-center mb-5">People</h1>

      <div className="row gx-5 gy-4 align-items-start">
        {/* Image Section */}
        <div className="col-12 col-lg-5 text-center pt-0 mt-0">
          <img
            className="people_img my-3"
            src="/media/images/nithinKamath.jpg"
            alt="Nithin"
          />
          <h4 className="px-3">Nithin Kamath</h4>
          <p className="p-3">Founder, CEO</p>
        </div>

        {/* Text Section */}
        <div className="col-12 col-lg-7">
          <p className="people_para">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="people_para">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="people_para">Playing basketball is his zen.</p>
          <p>
            Connect on <Link className="fs-6">Homepage</Link> /{" "}
            <Link className="fs-6">TradingQnA</Link> /{" "}
            <Link className="fs-6">Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;

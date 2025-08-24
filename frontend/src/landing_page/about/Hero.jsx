// import React from "react";
// import "../Style/AboutHero.css";

// function Hero() {
//   return (
//     <div className="container pb-0 p-5">
//       <h1 className="hero_heading py-4 fs-2 text-center">
//         We pioneered the discount broking model in India. <br /> Now, we are
//         breaking ground with our technology.
//       </h1>

//       <div className="row p-5 mb-0 m-2">
//         <div className="col  my-5 p-5">
//           <p className="hero_para">
//             We kick-started operations on the 15th of August, 2010 with the goal
//             of breaking all barriers that traders and investors face in India in
//             terms of cost, support, and technology. We named the company
//             Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
//             barrier.
//           </p>

//           <p className="hero_para">
//             Today, our disruptive pricing models and in-house technology have
//             made us the biggest stock broker in India.
//           </p>
//           <p className="hero_para">
//             Over 1.6+ crore clients place billions of orders every year through
//             our powerful ecosystem of investment platforms, contributing over
//             15% of all Indian retail trading volumes.
//           </p>
//         </div>
//         <div className="col  my-5 p-5">
//           <p className="hero_para">
//             In addition, we run a number of popular open online educational and
//             community initiatives to empower retail traders and investors.
//           </p>
//           <p className="hero_para">
//             Rainmatter, our fintech fund and incubator, has invested in several
//             fintech startups with the goal of growing the Indian capital
//             markets.
//           </p>
//           <p className="hero_para">
//             And yet, we are always up to something new every day. Catch up on
//             the latest updates on our blog or see what the media is saying about
//             us or learn more about our business and product philosophies.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import "../Style/AboutHero.css";

function Hero() {
  return (
    <div className="container pb-0 p-3 p-md-5 hero_section">
      <h1 className="hero_heading py-4 fs-2 text-center">
        We pioneered the discount broking model in India. <br /> Now, we are
        breaking ground with our technology.
      </h1>

      <div className="row px-3 px-md-5 mb-0 mx-1">
        <div className="col-12 col-md-6 my-4 p-3 p-md-5">
          <p className="hero_para">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="hero_para">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="hero_para">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-12 col-md-6 my-4 p-3 p-md-5">
          <p className="hero_para">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="hero_para">
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p className="hero_para">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

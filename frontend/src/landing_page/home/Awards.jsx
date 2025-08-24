// function Awards() {
//   return (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-6 p-5">
//           <img src="/media/images/largestBroker.svg" />
//         </div>

//         <div className="col-6 p-5 mt-5">
//           <h1>Largest stock broker in India</h1>
//           <p className="mb-5">
//             2+ million Zerodha clients contribute to over 15% of all retail
//             order volumes in India daily by trading and investing in:
//           </p>

//           <div className="row">
//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Futures and Options</p>
//                 </li>
//                 <li>
//                   <p>Commodity derivatives</p>
//                 </li>
//                 <li>
//                   <p>Currency derivatives</p>
//                 </li>
//               </ul>
//             </div>

//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Stocks & IPOs</p>
//                 </li>
//                 <li>
//                   <p>Direct mutual funds</p>
//                 </li>
//                 <li>
//                   <p>Bonds and Govt. Securities</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <img src="/media/images/pressLogos.png" style={{ width: "90%" }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Awards;

// function Awards() {
//   return (
//     <div className="container my-5">
//       <div className="row align-items-center">
//         {/* Image Column */}
//         <div className="col-12 col-md-6 p-4 text-center">
//           <img
//             src="/media/images/largestBroker.svg"
//             alt="Largest Broker"
//             className="img-fluid"
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>

//         {/* Text Column */}
//         <div className="col-12 col-md-6 p-4">
//           <h1 className="mb-3 text-center text-md-start">
//             Largest stock broker in India
//           </h1>
//           <p className="mb-4 text-center text-md-start">
//             2+ million Zerodha clients contribute to over 15% of all retail
//             order volumes in India daily by trading and investing in:
//           </p>

//           <div className="row">
//             <div className="col-6">
//               <ul className="list-unstyled">
//                 <li>Futures and Options</li>
//                 <li>Commodity derivatives</li>
//                 <li>Currency derivatives</li>
//               </ul>
//             </div>

//             <div className="col-6">
//               <ul className="list-unstyled">
//                 <li>Stocks & IPOs</li>
//                 <li>Direct mutual funds</li>
//                 <li>Bonds and Govt. Securities</li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-center text-md-start mt-4">
//             <img
//               src="/media/images/pressLogos.png"
//               alt="Press Logos"
//               className="img-fluid"
//               style={{ maxWidth: "90%", height: "auto" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Awards;

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-md-6 p-5 text-center">
          <img
            src="/media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 p-4 p-md-5 mt-4 mt-md-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="/media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;

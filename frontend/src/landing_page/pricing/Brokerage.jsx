// function Brokerage() {
//   return (
//     <div className=" px-5 " style={{ marginLeft: "80px", marginRight: "90px" }}>
//       <h4 className=" ps-2 mx-5 mt-5 pt-5">Charges for account opening</h4>
//       <div className=" table-responsive m-5 mt-4 border rounded">
//         <table className="px-5 table table-borderless align-middle">
//           <thead>
//             <tr className="border">
//               <th>Type of account</th>
//               <th>Charges</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Online account</td>
//               <td>
//                 <span style={{ backgroundColor: "#4bba47", color: "white" }}>
//                   &nbsp;&nbsp;free&nbsp;&nbsp;
//                 </span>
//               </td>
//             </tr>
//             <tr className="table-light">
//               <td>Offline account</td>
//               <td>
//                 <span style={{ backgroundColor: "#4bba47", color: "white" }}>
//                   &nbsp;&nbsp;free&nbsp;&nbsp;
//                 </span>
//               </td>
//             </tr>
//             <tr>
//               <td>NRI account (offline only)</td>
//               <td> ₹ 500</td>
//             </tr>
//             <tr className="table-light">
//               <td>
//                 Partnership, LLP, HUF, or Corporate accounts (offline only)
//               </td>
//               <td> ₹ 500</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <h4 className=" ps-2 mx-5 mt-5 pt-3">
//         Charges for optional value added services
//       </h4>
//       <div className=" table-responsive m-5 mt-4 border rounded">
//         <table className="px-5 table table-borderless align-middle">
//           <thead>
//             <tr className="border">
//               <th>Service</th>
//               <th>Billing Frquency</th>
//               <th>Charges</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Tickertape</td>
//               <td>Monthly / Annual</td>
//               <td>Free: 0 | Pro: 249/2399</td>
//             </tr>
//             <tr className="table-light">
//               <td>Smallcase</td>
//               <td>Per transaction</td>
//               <td>Buy & Invest More: 100 | SIP: 10</td>
//             </tr>
//             <tr>
//               <td>Kite Connect</td>
//               <td>Monthly</td>
//               <td>Connect: 500 | Historical: 500</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Brokerage;

import React from "react";
import "../Style/PricingBrokerage.css"; // We'll add small responsive tweaks here

function Brokerage() {
  return (
    <div className="container-fluid px-5 px-md-5 brokerage-container mx-5">
      {/* Charges for account opening */}
      <h4 className="ps-2 mx-md-5 mt-5 pt-5 text-center text-md-start">
        Charges for account opening
      </h4>
      <div className="table-responsive m-3 m-md-5 mt-4 border rounded">
        <table className="table table-borderless align-middle">
          <thead>
            <tr className="border">
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="badge text-bg-success px-3">free</span>
              </td>
            </tr>
            <tr className="table-light">
              <td>Offline account</td>
              <td>
                <span className="badge text-bg-success px-3">free</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr className="table-light">
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Charges for optional value-added services */}
      <h4 className="ps-2 mx-md-5 mt-5 pt-3 text-center text-md-start">
        Charges for optional value-added services
      </h4>
      <div className="table-responsive m-3 m-md-5 mt-4 border rounded">
        <table className="table table-borderless align-middle">
          <thead>
            <tr className="border">
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr className="table-light">
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;

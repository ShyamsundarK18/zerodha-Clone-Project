// import "../Style/SupportCreateTicket.css";

// function CreateTicket() {
//   return (
//     <div className="container m-5 px-5">
//       <div className="row px-2 mx-5">
//         <div className="col-8 pe-4">
//           <button
//             className="support-btn border rounded-top-1"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#AccountOpening"
//             aria-expanded="false"
//             aria-controls="AccountOpening"
//           >
//             <span className="d-flex align-items-center">
//               <span className="support-btn-icon rounded-1">
//                 <i className="fa-solid fa-circle-plus"></i>
//               </span>
//               &nbsp; Account Opening
//             </span>
//             <span className="dropdown-icon">
//               <i className="fa-solid fa-caret-down"></i>
//             </span>
//           </button>

//           <div className="collapse" id="AccountOpening">
//             <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
//               <a href="#">
//                 <li>Resident individual</li>
//               </a>

//               <a href="#">
//                 <li>Minor</li>
//               </a>

//               <a href="#">
//                 <li>Non Resident Indian (NRI)</li>
//               </a>

//               <a href="#">
//                 <li>Company, Partnership, HUF and LLP</li>
//               </a>

//               <a href="#">
//                 <li>Glossary</li>
//               </a>
//             </div>
//           </div>

//           <br />

//           <button
//             className="support-btn border rounded-top-1"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#YourZerodhaAccount"
//             aria-expanded="false"
//             aria-controls="YourZerodhaAccount"
//           >
//             <span className="d-flex align-items-center">
//               <span className="support-btn-icon rounded-1">
//                 <i class="fa-solid fa-circle-user"></i>
//               </span>
//               &nbsp; Your Zerodha Account
//             </span>
//             <span className="dropdown-icon">
//               <i className="fa-solid fa-caret-down"></i>
//             </span>
//           </button>

//           <div className="collapse" id="YourZerodhaAccount">
//             <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
//               <a href="#">
//                 <li>Your Profile</li>
//               </a>

//               <a href="#">
//                 <li>Account modification</li>
//               </a>

//               <a href="#">
//                 <li>
//                   Client Master Report (CMR) and Depository Participant (DP)
//                 </li>
//               </a>

//               <a href="#">
//                 <li>Nomination</li>
//               </a>

//               <a href="#">
//                 <li>Transfer and conversion of securities</li>
//               </a>
//             </div>
//           </div>
//           <br />

//           <button
//             className="support-btn border rounded-top-1"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#Kite"
//             aria-expanded="false"
//             aria-controls="Kite"
//           >
//             <span className="d-flex align-items-center">
//               <span className="support-btn-icon rounded-1">
//                 <i className="fa-solid fa-chart-simple"></i>
//               </span>
//               &nbsp; Kite
//             </span>
//             <span className="dropdown-icon">
//               <i className="fa-solid fa-caret-down"></i>
//             </span>
//           </button>

//           <div className="collapse" id="Kite">
//             <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
//               <a href="#">
//                 <li>IPO</li>
//               </a>

//               <a href="#">
//                 <li>Trading FAQs</li>
//               </a>

//               <a href="#">
//                 <li>Margin Trading Facility (MTF) and Margins</li>
//               </a>

//               <a href="#">
//                 <li>Charts and orders</li>
//               </a>

//               <a href="#">
//                 <li>Alerts and Nudges</li>
//               </a>
//               <a href="#">
//                 <li>General</li>
//               </a>
//             </div>
//           </div>

//           <br />
//           <button
//             className="support-btn border rounded-top-1"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#Funds"
//             aria-expanded="false"
//             aria-controls="Funds"
//           >
//             <span className="d-flex align-items-center">
//               <span className="support-btn-icon rounded-1">
//                 <i className="fa-solid fa-indian-rupee-sign"></i>
//               </span>
//               &nbsp; Funds
//             </span>
//             <span className="dropdown-icon">
//               <i className="fa-solid fa-caret-down"></i>
//             </span>
//           </button>

//           <div className="collapse" id="Funds">
//             <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
//               <a href="#">
//                 <li>Add money</li>
//               </a>

//               <a href="#">
//                 <li>Withdraw money</li>
//               </a>

//               <a href="#">
//                 <li>Add bank accounts</li>
//               </a>

//               <a href="#">
//                 <li>eMandates</li>
//               </a>
//             </div>
//           </div>
//           <br />

//           <button
//             className="support-btn border rounded-top-1"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#Console"
//             aria-expanded="false"
//             aria-controls="Console"
//           >
//             <span className="d-flex align-items-center">
//               <span className="support-btn-icon rounded-1">
//                 <i className="fa-solid fa-terminal"></i>
//               </span>
//               &nbsp; Console
//             </span>
//             <span className="dropdown-icon">
//               <i className="fa-solid fa-caret-down"></i>
//             </span>
//           </button>

//           <div className="collapse" id="Console">
//             <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
//               <a href="#">
//                 <li>Portfolio</li>
//               </a>

//               <a href="#">
//                 <li>Corporate actions</li>
//               </a>

//               <a href="#">
//                 <li>Funds statement</li>
//               </a>

//               <a href="#">
//                 <li>Reports</li>
//               </a>

//               <a href="#">
//                 <li>Profile</li>
//               </a>

//               <a href="#">
//                 <li>Segments</li>
//               </a>
//             </div>
//           </div>
//           <br />

//           <button
//             className="support-btn border rounded-top-1"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#Coin"
//             aria-expanded="false"
//             aria-controls="Coin"
//           >
//             <span className="d-flex align-items-center">
//               <span className="support-btn-icon rounded-1">
//                 <i className="fa-solid fa-coins"></i>
//               </span>
//               &nbsp; Coin
//             </span>
//             <span className="dropdown-icon">
//               <i className="fa-solid fa-caret-down"></i>
//             </span>
//           </button>

//           <div className="collapse" id="Coin">
//             <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
//               <a href="#">
//                 <li>Mutual funds</li>
//               </a>

//               <a href="#">
//                 <li>National Pension Scheme (NPS)</li>
//               </a>

//               <a href="#">
//                 <li>Fixed Deposit (FD)</li>
//               </a>

//               <a href="#">
//                 <li>Features on Coin</li>
//               </a>

//               <a href="#">
//                 <li>Payments and Orders</li>
//               </a>
//               <a href="#">
//                 <li>General</li>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-4">
//           <div className="quarterly-settlement d-flex">
//             <div className="color-section"></div>
//             <ul>
//               <li>
//                 <a href="#">Quarterly Settlement of Funds - July 2025</a>
//               </li>
//               <li>
//                 <a href="#">
//                   Exclusion of F&O contracts on 8 securities from August 29,
//                   2025
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="mt-4">
//             <table className="table table-bordered">
//               <thead>
//                 <tr>
//                   <th className="table-head">Quick links</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <a className="fs-6 table-links" href="#">
//                       &nbsp; 1. Track account opening
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <a className="fs-6 table-links" href="#">
//                       &nbsp; 2. Track segment activation
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <a className="fs-6 table-links" href="#">
//                       &nbsp; 3. Intraday margins
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <a className="fs-6 table-links" href="#">
//                       &nbsp; 4. Kite user manual
//                     </a>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateTicket;

import "../Style/SupportCreateTicket.css";

function CreateTicket() {
  return (
    <div className="container m-5 px-5 px-md-5">
      <div className="row  gx-4">
        <div className="col-12 col-lg-8 pe-lg-4">
          <button
            className="support-btn border rounded-top-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#AccountOpening"
            aria-expanded="false"
            aria-controls="AccountOpening"
          >
            <span className="d-flex align-items-center">
              <span className="support-btn-icon rounded-1">
                <i className="fa-solid fa-circle-plus"></i>
              </span>
              &nbsp; Account Opening
            </span>
            <span className="dropdown-icon">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </button>

          <div className="collapse" id="AccountOpening">
            <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
              <a href="#">
                <li>Resident individual</li>
              </a>

              <a href="#">
                <li>Minor</li>
              </a>

              <a href="#">
                <li>Non Resident Indian (NRI)</li>
              </a>

              <a href="#">
                <li>Company, Partnership, HUF and LLP</li>
              </a>

              <a href="#">
                <li>Glossary</li>
              </a>
            </div>
          </div>

          <br />

          <button
            className="support-btn border rounded-top-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#YourZerodhaAccount"
            aria-expanded="false"
            aria-controls="YourZerodhaAccount"
          >
            <span className="d-flex align-items-center">
              <span className="support-btn-icon rounded-1">
                <i class="fa-solid fa-circle-user"></i>
              </span>
              &nbsp; Your Zerodha Account
            </span>
            <span className="dropdown-icon">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </button>

          <div className="collapse" id="YourZerodhaAccount">
            <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
              <a href="#">
                <li>Your Profile</li>
              </a>

              <a href="#">
                <li>Account modification</li>
              </a>

              <a href="#">
                <li>
                  Client Master Report (CMR) and Depository Participant (DP)
                </li>
              </a>

              <a href="#">
                <li>Nomination</li>
              </a>

              <a href="#">
                <li>Transfer and conversion of securities</li>
              </a>
            </div>
          </div>
          <br />

          <button
            className="support-btn border rounded-top-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Kite"
            aria-expanded="false"
            aria-controls="Kite"
          >
            <span className="d-flex align-items-center">
              <span className="support-btn-icon rounded-1">
                <i className="fa-solid fa-chart-simple"></i>
              </span>
              &nbsp; Kite
            </span>
            <span className="dropdown-icon">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </button>

          <div className="collapse" id="Kite">
            <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
              <a href="#">
                <li>IPO</li>
              </a>

              <a href="#">
                <li>Trading FAQs</li>
              </a>

              <a href="#">
                <li>Margin Trading Facility (MTF) and Margins</li>
              </a>

              <a href="#">
                <li>Charts and orders</li>
              </a>

              <a href="#">
                <li>Alerts and Nudges</li>
              </a>
              <a href="#">
                <li>General</li>
              </a>
            </div>
          </div>

          <br />
          <button
            className="support-btn border rounded-top-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Funds"
            aria-expanded="false"
            aria-controls="Funds"
          >
            <span className="d-flex align-items-center">
              <span className="support-btn-icon rounded-1">
                <i className="fa-solid fa-indian-rupee-sign"></i>
              </span>
              &nbsp; Funds
            </span>
            <span className="dropdown-icon">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </button>

          <div className="collapse" id="Funds">
            <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
              <a href="#">
                <li>Add money</li>
              </a>

              <a href="#">
                <li>Withdraw money</li>
              </a>

              <a href="#">
                <li>Add bank accounts</li>
              </a>

              <a href="#">
                <li>eMandates</li>
              </a>
            </div>
          </div>
          <br />

          <button
            className="support-btn border rounded-top-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Console"
            aria-expanded="false"
            aria-controls="Console"
          >
            <span className="d-flex align-items-center">
              <span className="support-btn-icon rounded-1">
                <i className="fa-solid fa-terminal"></i>
              </span>
              &nbsp; Console
            </span>
            <span className="dropdown-icon">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </button>

          <div className="collapse" id="Console">
            <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
              <a href="#">
                <li>Portfolio</li>
              </a>

              <a href="#">
                <li>Corporate actions</li>
              </a>

              <a href="#">
                <li>Funds statement</li>
              </a>

              <a href="#">
                <li>Reports</li>
              </a>

              <a href="#">
                <li>Profile</li>
              </a>

              <a href="#">
                <li>Segments</li>
              </a>
            </div>
          </div>
          <br />

          <button
            className="support-btn border rounded-top-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Coin"
            aria-expanded="false"
            aria-controls="Coin"
          >
            <span className="d-flex align-items-center">
              <span className="support-btn-icon rounded-1">
                <i className="fa-solid fa-coins"></i>
              </span>
              &nbsp; Coin
            </span>
            <span className="dropdown-icon">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </button>

          <div className="collapse" id="Coin">
            <div className="card card-body border-top-0 rounded-top-0  support-btn-items">
              <a href="#">
                <li>Mutual funds</li>
              </a>

              <a href="#">
                <li>National Pension Scheme (NPS)</li>
              </a>

              <a href="#">
                <li>Fixed Deposit (FD)</li>
              </a>

              <a href="#">
                <li>Features on Coin</li>
              </a>

              <a href="#">
                <li>Payments and Orders</li>
              </a>
              <a href="#">
                <li>General</li>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
          <div className="quarterly-settlement d-flex flex-column flex-sm-row">
            <div className="color-section"></div>
            <ul>
              <li>
                <a href="#">Quarterly Settlement of Funds - July 2025</a>
              </li>
              <li>
                <a href="#">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="table-head">Quick links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a className="fs-6 table-links" href="#">
                      &nbsp; 1. Track account opening
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a className="fs-6 table-links" href="#">
                      &nbsp; 2. Track segment activation
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a className="fs-6 table-links" href="#">
                      &nbsp; 3. Intraday margins
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a className="fs-6 table-links" href="#">
                      &nbsp; 4. Kite user manual
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

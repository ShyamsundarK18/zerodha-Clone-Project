// import "../Style/SupportHero.css";

// function Hero() {
//   return (
//     <div className="support-container">
//       <div className="d-flex justify-content-between">
//         <h1 className="mb-4 pb-2">Support Portal</h1>
//         <a href="#" className="my-ticket">
//           {" "}
//           <span>
//             <i className="fa-solid fa-bullseye"></i>
//           </span>{" "}
//           My tickets
//         </a>
//       </div>
//       <div className="input-group input-group-lg">
//         <span
//           className="input-group-text"
//           id="inputGroup-sizing-lg border-end-0"
//         >
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </span>
//         <input
//           type="text"
//           className="form-control support-input border-start-0"
//           aria-label="Sizing example input"
//           aria-describedby="inputGroup-sizing-lg"
//           placeholder="Eg: how do i activate F&O..."
//         />
//       </div>
//     </div>
//   );
// }

// export default Hero;

import "../Style/SupportHero.css";

function Hero() {
  return (
    <div className="support-container">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <h1 className="mb-0">Support Portal</h1>
        <a href="#" className="my-ticket">
          <span>
            <i className="fa-solid fa-bullseye"></i>
          </span>{" "}
          My tickets
        </a>
      </div>

      <div className="input-group input-group-lg mt-3">
        <span className="input-group-text border-end-0">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="form-control support-input border-start-0"
          placeholder="Eg: how do I activate F&O..."
        />
      </div>
    </div>
  );
}

export default Hero;

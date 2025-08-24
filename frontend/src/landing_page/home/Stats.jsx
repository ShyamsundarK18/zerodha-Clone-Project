// function Stats() {
//   return (
//     <div className="container p-4">
//       <div className="row">
//         <div className="col-6 p-5">
//           <h1 className="fs-2 mb-5">Trust with confidence</h1>

//           <h2 className="fs-4">Customer-first always</h2>
//           <p className="text-muted mb-5">
//             That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
//             of equity investments and contribute to 15% of daily retail exchange
//             volumes in India.
//           </p>

//           <h2 className="fs-4">No spam or gimmicks</h2>
//           <p className="text-muted mb-5">
//             No gimmicks, spam, "gamification", or annoying push notifications.
//             High quality apps that you use at your pace, the way you like. Our
//             philosophies.
//           </p>

//           <h2 className="fs-4">The Zerodha universe</h2>
//           <p className="text-muted mb-5">
//             Not just an app, but a whole ecosystem. Our investments in 30+
//             fintech startups offer you tailored services specific to your needs.
//           </p>

//           <h2 className="fs-4">Do better with money</h2>
//           <p className="text-muted mb-5">
//             With initiatives like Nudge and Kill Switch, we don't just
//             facilitate transactions, but actively help you do better with your
//             money.
//           </p>
//         </div>

//         <div className="col-6 p-5">
//           <img
//             style={{ width: "98%" }}
//             src="/media/images/ecosystem.png"
//             alt="The Zerodha Universe"
//           />

//           <div className="text-center">
//             <a href="#" className="text-primary text-decoration-none fs-6">
//               Explore our products{" "}
//               <i className="fa-solid fa-arrow-right-long"></i>
//             </a>

//             <a href="#" className="text-primary ms-5 text-decoration-none fs-6">
//               Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;

function Stats() {
  return (
    <div className="container p-4">
      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted mb-4">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img
            className="img-fluid mb-3"
            src="/media/images/ecosystem.png"
            alt="The Zerodha Universe"
          />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a href="#" className="text-primary text-decoration-none fs-6">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href="#" className="text-primary text-decoration-none fs-6">
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

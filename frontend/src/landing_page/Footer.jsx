import "./Style/Footer.css";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row gy-4 px-md-5">
          {/* Logo & Socials */}
          <div className="col-12 col-md-4 col-lg-3">
            <img
              className="footer-logo"
              src="/media/images/logo.svg"
              alt="Logo"
            />
            <p className="mt-4 footer-logo-para">
              <i className="fa-regular fa-copyright"></i>&nbsp; 2025 InvestIQ —
              Zerodha Clone Project by Shyamsundar Kumar. Built using MERN stack
              for educational purposes only.
            </p>
            <div className="d-flex flex-wrap gap-3 pt-2">
              <a className="footer-icons hover-black" href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="footer-icons hover-blue" href="#">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a
                className="footer-icons hover-red"
                href="https://www.instagram.com/_shyamgehlot_26"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="footer-icons hover-blue" href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="d-flex flex-wrap gap-3 pt-3">
              <a
                className="footer-icons hover-red"
                href="https://www.youtube.com/@shyamgeht7105"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a className="footer-icons hover-green" href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a className="footer-icons hover-blue" href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-6 col-md">
            <h4 className="fs-5 mb-3">Account</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Open demat account</a>
              </li>
              <li>
                <a href="#">Minor demat account</a>
              </li>
              <li>
                <a href="#">NRI demat account</a>
              </li>
              <li>
                <a href="#">Commodity</a>
              </li>
              <li>
                <a href="#">Dematerialisation</a>
              </li>
              <li>
                <a href="#">Fund transfer</a>
              </li>
              <li>
                <a href="#">MTF</a>
              </li>
              <li>
                <a href="#">Referral program</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h4 className="fs-5 mb-3">Support</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support portal</a>
              </li>
              <li>
                <a href="#">How to file a complaint?</a>
              </li>
              <li>
                <a href="#">Status of your complaints</a>
              </li>
              <li>
                <a href="#">Bulletin</a>
              </li>
              <li>
                <a href="#">Circular</a>
              </li>
              <li>
                <a href="#">Z-Connect blog</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h4 className="fs-5 mb-3">Company</h4>
            <ul className="footer-list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Philosophy</a>
              </li>
              <li>
                <a href="#">Press & media</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Zerodha Cares (CSR)</a>
              </li>
              <li>
                <a href="#">Zerodha.tech</a>
              </li>
              <li>
                <a href="#">Open source</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h4 className="fs-5 mb-3">Quick links</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Upcoming IPOs</a>
              </li>
              <li>
                <a href="#">Brokerage charges</a>
              </li>
              <li>
                <a href="#">Market holidays</a>
              </li>
              <li>
                <a href="#">Economic calendar</a>
              </li>
              <li>
                <a href="#">Calculators</a>
              </li>
              <li>
                <a href="#">Markets</a>
              </li>
              <li>
                <a href="#">Sectors</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Long Paragraph Section */}
        <div className="footer-long-para mt-5">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE &amp; MCX-SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            - SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to
            <a href="#"> complaints@zerodha.com</a>, for DP related to
            <a href="#"> dp@zerodha.com</a>. Please ensure you carefully read
            the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on <a href="#"> SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            <a href="#">Smart Online Dispute Resolution</a> |
            <a href="#"> Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.{" "}
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a href="#"> create a ticket here</a>.
          </p>
        </div>

        {/* Bottom Links */}
        {/* Bottom Links */}
        <div className="footer-bootom-para text-center mt-4 pt-3 border-top w-100">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Policies & procedures</a>
          <a href="#">Privacy policy</a>
          <a href="#">Disclosure</a>
          <a href="#">For investor's attention</a>
          <a href="#">Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

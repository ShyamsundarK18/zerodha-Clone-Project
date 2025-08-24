import React, { useState } from "react";
import "../Style/PricingTables.css";

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderTable = () => {
    switch (activeTab) {
      case "equity":
        return (
          <div className="table-responsive border rounded m-5 mb-4">
            <table
              className=" px-5 table table-borderless align-middle"
              style={{ fontSize: "0.9rem" }}
            >
              <thead>
                <tr className="border">
                  <th></th>
                  <th>Equity Delivery</th>
                  <th>Equity Intraday</th>
                  <th>F&O - Futures</th>
                  <th>F&O - Options</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>
                    0.03% or Rs. 20/executed <br /> order whichever is lower
                  </td>
                  <td>
                    0.03% or Rs. 20/executed <br /> order whichever is lower
                  </td>
                  <td>Flat Rs. 20 per executed order</td>
                </tr>
                <br />
                <tr className="table-light">
                  <td>STT/CTT</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on the sell side</td>
                  <td>0.02% on the sell side</td>
                  <td>
                    <ul>
                      <li>
                        0.125% of the intrinsic value on <br />
                        options that are bought and exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>Transaction Charges</td>
                  <td>
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>

                  <td>
                    NSE: 0.00173%
                    <br />
                    BSE: 0
                  </td>
                  <td>
                    NSE: 0.03503% (on premium) <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                <br />

                <tr className="table-light">
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI <br /> charges + transaction <br />
                    charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI <br /> charges + transaction <br />
                    charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI <br /> charges + transaction <br />
                    charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges <br /> + transaction
                    charges)
                  </td>
                </tr>
                <br />
                <tr>
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <br />
                <tr className="table-light m-0 p-0">
                  <td>Stamp charges</td>
                  <td>0.015% or ₹1500 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "currency":
        return (
          <div className="table-responsive border rounded m-5 mb-4">
            <table
              className=" px-5 table table-borderless align-middle"
              style={{ fontSize: "0.9rem" }}
            >
              <thead>
                <tr className="border">
                  <th></th>
                  <th>Currency futures</th>
                  <th>Currency options</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or ₹ 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                <br />
                <tr className="table-light">
                  <td>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                <br />
                <tr>
                  <td>Transaction Charges</td>
                  <td>
                    NSE: 0.00035%
                    <br />
                    BSE: 0.00045%
                  </td>
                  <td>
                    NSE: 0.0311%
                    <br />
                    BSE: 0.001%
                  </td>
                </tr>
                <br />

                <tr className="table-light">
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <br />
                <tr>
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <br />
                <tr className="table-light m-0 p-0">
                  <td>Stamp charges</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "commodity":
        return (
          <div className="table-responsive border rounded m-5 mb-4">
            <table
              className=" px-5 table table-borderless align-middle"
              style={{ fontSize: "0.9rem" }}
            >
              <thead>
                <tr className="border">
                  <th></th>
                  <th>Commodity futures</th>
                  <th>Commodity options</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                <br />
                <tr className="table-light">
                  <td>STT/CTT</td>
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>
                <br />
                <tr>
                  <td>Transaction Charges</td>
                  <td>
                    MCX: 0.0021%
                    <br />
                    NSE: 0.0001%
                  </td>
                  <td>
                    MCX: 0.0418%
                    <br />
                    NSE: 0.001%
                  </td>
                </tr>
                <br />

                <tr className="table-light">
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <br />
                <tr>
                  <td>SEBI charges</td>
                  <td>
                    Agri: <br /> ₹1 / crore <br /> Non-agri: <br />
                    ₹10 / crore
                  </td>
                  <td>₹10 / crore</td>
                </tr>
                <br />
                <tr className="table-light m-0 p-0">
                  <td>Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-3 px-5">
      <ul className="nav nav-underline px-5">
        <li className="nav-item fs-4">
          <button
            style={{ fontWeight: "initial" }}
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item fs-4">
          <button
            style={{ fontWeight: "initial" }}
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-itemn fs-4">
          <button
            style={{ fontWeight: "initial" }}
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>
      <hr className="mt-0  mx-5" />

      <div className="tab-content">{renderTable()}</div>
      <p className="text-center fs-4 mt-0 pt-0">
        <a href="#" className="fs-4">
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>

      <div className="row px-5">
        <h4 className="my-5">Charges explained</h4>
        <div className="col">
          <h6>Securities/Commodities transaction tax</h6>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h6>Transaction/Turnover Charges</h6>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h6>Call & trade</h6>
          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <h6>Stamp charges</h6>

          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h6>NRI brokerage charges</h6>

          <ul>
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <h6>Account with debit balance</h6>
          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>

          <ul>
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>

          <h6>Margin Trading Facility (MTF)</h6>

          <ul>
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>

            <li>
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>
        <div className="col ps-5">
          <h6>GST</h6>

          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <h6>SEBI Charges</h6>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h6>DP (Depository participant) charges</h6>
          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h6>Pledging charges</h6>

          <p>₹30 + GST per pledge request per ISIN.</p>

          <h6>AMC (Account maintenance charges)</h6>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, Click here
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, Click here
          </p>

          <h6>Corporate action order charges</h6>
          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h6>Off-market transfer charges</h6>
          <p>₹25 per transaction.</p>
          <h6>Physical CMR request</h6>
          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h6>Payment gateway charges</h6>
          <p>₹9 + GST (Not levied on transfers done via UPI)</p>
          <h6>Delayed Payment Charges</h6>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>
          <h6>Trading using 3-in-1 account with block functionality</h6>
          <ul>
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>

      <div className="mx-5">
        <h6 className="py-3">Disclaimer</h6>
        <p className="fs-6">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

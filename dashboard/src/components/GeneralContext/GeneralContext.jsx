import React, { useState } from "react";

import BuyActionWindow from "../BuyActionWindow/BuyActionWindow";
import SellActionWindow from "../SellActionWindow/SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, onBuySuccess) => {},
  closeBuyWindow: () => {},

  openSellWindow: (uid, qty) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  //Buy functionality
  const [buyCallback, setBuyCallback] = useState(null);
  const [buyLTP, setBuyLTP] = useState(0.0);

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid, onBuySuccess, ltp) => {
    setSelectedStockUID(uid);
    setBuyCallback(() => onBuySuccess);
    setBuyLTP(ltp); // 👈 Add this

    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setBuyCallback(null);
  };

  // Sell functionality

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellUID, setSelectedSellUID] = useState("");
  const [sellPayload, setSellPayload] = useState(null);

  const [holdingQty, setHoldingQty] = useState(0); // assuming you can pass this

  const handleOpenSellWindow = (uid, qty, ltp, onSellSuccess) => {
    setSellPayload({ uid, qty, ltp, onSellSuccess });

    setIsSellWindowOpen(true);
    setSelectedSellUID(uid);
    setHoldingQty(qty);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSellPayload(null);

    setSelectedSellUID("");
    setHoldingQty(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          onBuySuccess={buyCallback}
          ltp={buyLTP}
        />
      )}
      {isSellWindowOpen && sellPayload && (
        <SellActionWindow
          uid={sellPayload.uid}
          holdingQty={sellPayload.qty}
          ltp={sellPayload.ltp}
          onSellSuccess={sellPayload.onSellSuccess}
        />

        //<SellActionWindow uid={selectedSellUID} holdingQty={holdingQty} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

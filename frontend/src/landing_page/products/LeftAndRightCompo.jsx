import React from "react";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
function LeftAndRightCompo() {
  return (
    <>
      <LeftImage
        imageUrl="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more"
        googlePlay="googlePlay"
        appStore="appStore"
      />
      <RightImage
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more"
        imageUrl="/media/images/console.png"
      />
      <LeftImage
        imageUrl="/media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        googlePlay="googlePlay"
        appStore="appStore"
      />
      <RightImage
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite Connect"
        imageUrl="/media/images/landing_res.png"
      />
      <LeftImage
        imageUrl="/media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="googlePlay"
        appStore="appStore"
      />
    </>
  );
}

export default LeftAndRightCompo;

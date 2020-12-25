import React from "react";
import "./index.css";
import OpenTrades from "./OpenTrades";
import TradingHistory from "./TradingHistory";
import TrainingWallet from "./TrainingWallet";

const Sidebar = () =>{
   return (
      <div id="side-bar">
      <OpenTrades />
      <hr />
      <TradingHistory />
      <hr />
      <TrainingWallet />
      </div>
   )
}

export default Sidebar;
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChromecast } from '@fortawesome/free-brands-svg-icons'
import {Button} from "react-bootstrap"

const TrainingWallet = () =>{
   return (
      <div id="training-wallet">
         <div className="comp-header clearfix">
            <div className="float-left">
               <FontAwesomeIcon icon={faChromecast} />
               <span className="text">TRADING WALLET</span>
            </div>
            <div className="float-right">
               <FontAwesomeIcon icon={faChevronRight} />
            </div>
         </div>
         <div className="main-section">
            <div className="section-info">
               <label className="info-label">Total Trades</label>
               <h3 className="simple-text">$ 34,752.00</h3>
            </div>
            <div className="section-info">
               <label className="info-label hidden-opacity">Hide</label>
               <div>
                <Button variant="outline-secondary" className="active-outline">TOP UP</Button>
               </div>
            </div>
         </div>
         <div className="main-section">
         <div className="section-info">
            <label className="info-label">Holding</label>
            <h3 className="simple-text">$ 4,102.00</h3>
         </div>
         <div className="section-info">
            <label className="info-label hidden-opacity">Hide</label>
            <div>
            <Button variant="dark" className="active-btn">BUY DAI</Button>
            </div>
         </div>
      </div>         
      </div>   
   )
}

export default TrainingWallet;
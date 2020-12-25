import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faSignature } from '@fortawesome/free-solid-svg-icons'

const OpenTrades = () =>{
   return (
      <div>
         <div className="comp-header clearfix">
            <div className="float-left">
               <FontAwesomeIcon icon={faSignature} />
               <span className="text">OPEN TRADES</span>
            </div>
            <div className="float-right">
               <FontAwesomeIcon icon={faChevronRight} />
            </div>
         </div>
         <div className="main-section">
            <div className="section-info">
               <label className="info-label">In progress</label>
               <h3 className="simple-text">15</h3>
            </div>
            <div className="section-info">
               <label className="info-label">Closest outcome</label>
               <h3 className="simple-text">25m 40s</h3>
               <h4 className="simple-text-sm">ETH 48 hour</h4>
            </div>
         </div>
      </div>
   )
}

export default OpenTrades;
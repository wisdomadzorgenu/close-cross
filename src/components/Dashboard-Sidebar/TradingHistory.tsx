import React,{useState} from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChartLine } from '@fortawesome/free-solid-svg-icons'
import sampleTradingHistory from "../../assets/history.png"
import {Button} from "react-bootstrap"


const TradingHistory = () =>{
   const [activeBtn,updateActiveBtn] = useState("week")

   return (
      <div id="trading-history">
         <div className="comp-header clearfix">
            <div className="float-left">
               <FontAwesomeIcon icon={faChartLine} />
               <span className="text">TRADING HISTORY</span>
            </div>
            <div className="float-right">
               <FontAwesomeIcon icon={faChevronRight} />
            </div>
         </div>
         <div className="trading-btn">
            <Button variant="light" className={"info-label "+ (activeBtn==='last'?"active-btn":"")} 
               onClick={(e)=>{updateActiveBtn("last")}}>
               Last
            </Button>
            <Button variant="light" className={"info-label "+ (activeBtn==='day'?"active-btn":"")} 
               onClick={(e)=>{updateActiveBtn("day")}}>
               day
            </Button>
            <Button variant="light" className={"info-label "+ (activeBtn==='week'?"active-btn":"")} 
               onClick={(e)=>{updateActiveBtn("week")}}>
               week
            </Button>
            <Button variant="light" className={"info-label "+ (activeBtn==='month'?"active-btn":"")} 
               onClick={(e)=>{updateActiveBtn("month")}}>
               month
            </Button>
            <Button variant="light" className={"info-label "+ (activeBtn==='all'?"active-btn":"")} 
               onClick={(e)=>{updateActiveBtn("all")}}>
               all
            </Button>
         </div>
         <div className="main-section">
            <div className="section-info">
               <label className="info-label">Total Trades</label>
               <h3 className="simple-text">245</h3>
            </div>
            <div className="section-info">
               <label className="info-label">Profit</label>
               <h3 className="simple-text">+21.5%</h3>
            </div>
         </div>
         <div>
            <img className="history" src={sampleTradingHistory} alt="history"/>
         </div>
      </div>
   )
}

export default TradingHistory;
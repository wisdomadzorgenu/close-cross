import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import "./index.css"

interface PropsStateType{
   headline:string,
   trades:string,
   outputTimes:string,
   duration:string,
   totalFunds:string,
   labels:number,
   graphData:{x:number,y:number}[],
   sideGraphData:{x:number,y:number}[],
   graphPicture:any,
   sideGraphPicture:any,
   gain:boolean
}

const Item = (props:PropsStateType)=>{
   console.log(props.graphPicture)

   return (
      <div className="main-panel">
         <div className="headline-section">
            <div>
               <FontAwesomeIcon icon={faStar} className="awesome-icon" />
               <h4 className="headline">
                  {props.headline}
                  <label className="info-label">{props.trades}</label>                  
               </h4>
            </div>
         </div>
         <div className="trades-outcome">
            <div>
               <FontAwesomeIcon icon={faChevronRight} className="space-right awesome-icon"/>                        
               <label className="info-label big">{props.outputTimes}</label>
            </div>
            <label className="info-label">Outcome in {props.duration}</label>
         </div>
         <div className="main-graph">
            <img src={props.graphPicture} alt="graph"/>
         </div>
         <div className="rotated-graph">
            <img src={props.sideGraphPicture} alt="rotated graph"/>
         </div>
         <div className="funds-section">
            <h4 className="total-funds">$ {props.totalFunds}</h4>
            <label className="info-label">Total commitment funds</label>
         </div>
      </div>
   )
}

export default Item;
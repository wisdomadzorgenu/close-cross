import React,{useState} from "react";
import {Button,ButtonGroup,Form} from "react-bootstrap"
import Item from "./Item"
import "./index.css"

//sample graph images
import sampleGraph1 from "../../assets/sample-graph-1.png"
import sampleGraph2 from "../../assets/sample-graph-2.png"
import sampleGraph3 from "../../assets/sample-graph-3.png"
import sampleGraph4 from "../../assets/sample-graph-4.png"
import sampleGraph5 from "../../assets/sample-graph-5.png"
import sampleGraphRotated1 from "../../assets/sample-graph-rotated-1.png"
import sampleGraphRotated2 from "../../assets/sample-graph-rotated-2.png"
import sampleGraphRotated3 from "../../assets/sample-graph-rotated-3.png"
import sampleGraphRotated4 from "../../assets/sample-graph-rotated-4.png"
import sampleGraphRotated5 from "../../assets/sample-graph-rotated-5.png"

interface StateDataType{
   mode:string,
   sort:string,
   filters:string,
   data:{
      headline:string,
      trades:string,
      outputTimes:string,
      duration:string,
      totalFunds:string,
      labels:number,
      graphData:{x:number,y:number}[],
      sideGraphData:{x:number,y:number}[],
      graphPicture:string,
      sideGraphPicture:string,
      gain:boolean
   }[]   
}

const DashboardMain = () =>{
   const initialData:StateDataType = {
      mode:"$",
      filters:"",
      sort:"",
      data:[
         {
            headline:"ETH 48 hours",
            trades:"Crypto",
            outputTimes:"22x",
            duration:"6h 41min",
            totalFunds:"34,346.00",
            labels:0,
            graphData:[],
            sideGraphData:[],
            graphPicture:sampleGraph1,
            sideGraphPicture:sampleGraphRotated1,      
            gain:true      
         },
         {
            headline:"ETH 48 hours",
            trades:"Crypto",
            outputTimes:"10x",
            duration:"2h 41min",
            totalFunds:"348,346.50",
            labels:2,
            graphData:[],
            sideGraphData:[],
            graphPicture:sampleGraph2,
            sideGraphPicture:sampleGraphRotated2,      
            gain:true      
         },
         {
            headline:"FB 24 hours",
            trades:"Stock",
            outputTimes:"5x",
            duration:"2h 41min",
            totalFunds:"148,346.50",
            labels:0,
            graphData:[],
            sideGraphData:[],
            graphPicture:sampleGraph3,
            sideGraphPicture:sampleGraphRotated3,      
            gain:true      
         },
         {
            headline:"ETH 18 hours",
            trades:"Crypto",
            outputTimes:"1x",
            duration:"2h 41min",
            totalFunds:"46.50",
            labels:0,
            graphData:[],
            sideGraphData:[],
            graphPicture:sampleGraph4,
            sideGraphPicture:sampleGraphRotated4,      
            gain:true      
         },
         {
            headline:"Zoom 18 hours",
            trades:"Stocks",
            outputTimes:"-1x",
            duration:"1h 1min",
            totalFunds:"0.00",
            labels:0,
            graphData:[],
            sideGraphData:[],
            graphPicture:sampleGraph5,
            sideGraphPicture:sampleGraphRotated5,      
            gain:false      
         }
      ]
   }

   const [state,updateState] = useState(initialData);

   const updateStateData = (type:string,data:string) =>{
      let newState:StateDataType = {...state};

      if(type === "mode")
         newState.mode = data;
      else if(type === "filter")
         newState.filters = data;
      else if(type === "sort")
         newState.sort = data;

      //update state
      updateState(newState)
   }

   return (
      <div id="main-dashboard">
         <div className="main-segement">
            <div className="first-segement">
               <label className="info-label space-right">Select assets, types and period</label>
               <Button variant="outline-secondary" className="active-outline">FILTER</Button>            
            </div>
            <div className="second-segement">               
               <label className="info-label space-right">Units</label>
               <ButtonGroup aria-label="Mode" size="sm">
                  <Button variant="outline-secondary" size="sm" 
                     onClick={(e)=>{updateStateData("mode","%")}} 
                     className={state.mode === "%" ?"active-btn":"active-outline"}>
                     %
                  </Button>
                  <Button variant="outline-secondary" size="sm" 
                     onClick={(e)=>{updateStateData("mode","$")}}
                     className={state.mode === "$"?"active-btn":"active-outline"}>
                     $
                  </Button>
               </ButtonGroup>               
               <label className="info-label  space-left space-right">Sort by </label>
               <Form.Control as="select" className="sort-form">
                  <option value="trending">Trending</option>
                  <option value="date">Date</option>
                  <option value="amount">Amount</option>            
               </Form.Control>
            </div>
         </div>
         <div className="item-panel-list">
            {state && state.data && state.data.map((info,index)=>{
               return <Item key={index} {...info}/>                
            })}            
         </div>
      </div>
   )
}

export default DashboardMain;
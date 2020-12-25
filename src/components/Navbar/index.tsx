import React,{useState} from "react"
import {Navbar, Button,ButtonGroup} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import logo from "../../assets/close-cross.png"
import avatar from "../../assets/avatar.png"
import "./index.css"

interface IObjectKeys {
   [key: string]: string | boolean
}

interface StateDataType extends IObjectKeys{
   [key: string]: string | boolean,
   mode:string,
   showAll:boolean,
   crypto:boolean,
   commodities:boolean,
   stock:boolean,
   index:boolean,
   currency:boolean
}

const NavbarComponent = () =>{
   const initialState:StateDataType = {
      mode:'training',
      showAll:false,
      crypto:true,
      commodities:false,
      stock:true,
      index:false,
      currency:false
   };

   const [state,updateState] = useState(initialState);

   //update mode state
   const updateModeState = (mode:string)=>{
      let newState:StateDataType = {...state};
      newState.mode = mode;

      //update state
      updateState(newState);
   }

   //update other button state
   const toggleButtonState = (buttonType:any) =>{
      let newState:StateDataType = {...state};
      newState[buttonType] = !newState[buttonType];

      //update state
      updateState(newState)
   }

   return (
      <Navbar expand="lg" className="my-navbar" variant="dark">
         <Navbar.Brand><img src={logo} id="logo" alt="Close Cross" /></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn"/>
         <Navbar.Collapse id="basic-navbar-nav">
            <div className="main-segement">
               <div className="first-segment">
                  <ButtonGroup aria-label="Mode" size="sm" className="app-mode">
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{updateModeState("training")}} 
                        active={state.mode === "training"?true:false}>
                        Training Mode
                     </Button>
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{updateModeState("live")}}
                        active={state.mode === "live"?true:false}>
                        Live Mode
                     </Button>
                  </ButtonGroup>               
               </div>         
               <div className="second-segment">
                  <div className="btn-section">
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{toggleButtonState("showAll")}} active={state.showAll}>
                        Show All
                     </Button>
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{toggleButtonState("crypto")}} active={state.crypto}>
                        Crypto
                     </Button>
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{toggleButtonState("commodities")}} active={state.commodities}>
                        Commodities
                     </Button>
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{toggleButtonState("stock")}} active={state.stock}>
                        Stock
                     </Button>
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{toggleButtonState("index")}} active={state.index}>
                        Index
                     </Button>
                     <Button variant="outline-secondary" size="sm" 
                        onClick={(e)=>{toggleButtonState("currency")}} active={state.currency}>
                        Currency
                     </Button>
                  </div>
               </div>
               <div className="third-segment">
                  <div className="icon-section">
                     <span>
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faGraduationCap} />               
                     </span>
                     <img src={avatar} id="profile-picture" alt="profile" />               
                  </div>
                  <div>
                  </div>
               </div>
            </div>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default NavbarComponent;


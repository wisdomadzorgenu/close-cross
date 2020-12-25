import React from "react"
import {Container,Row,Col} from "react-bootstrap"
import NavbarComponent from "../../components/Navbar"
import Sidbar from "../../components/Dashboard-Sidebar";
import DashboardMain from "../../components/Dashboard-Main";

import "./index.css"

const Dashboard = ()=>{
   return (
      <div id="dashboard-page">
         <NavbarComponent />
         <Container fluid>
            <Row noGutters={true}>
               <Col lg={2} md={3}>
                  <Sidbar />
               </Col>
               <Col lg={10} md={9}>
                  <DashboardMain />
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Dashboard;
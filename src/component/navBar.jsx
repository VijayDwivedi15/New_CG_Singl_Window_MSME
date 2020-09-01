import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';


import logo from '../image/cglogo.png';
import NicLogo from '../image/nic_logo.png';

export class NavBar extends Component {
  constructor() {
    super();

  }
  render() {
  return (    
  <div >

      <Navbar style={{backgroundColor:"#8EA4C1"}} >
        <Navbar.Brand href="#home" >
          <div className="row" style={{margin: '10px'}}>
            <img src={logo} style={{width: '80px', height: '70px'}} />
            <div className="col-sm-6">
              <b >Department of Commerce & Industries</b>
              <center>
                <h6 style={{marginLeft: '40px'}}>Government of Chhattisgarh</h6>
              </center>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"300px"}}>
          <Nav className="justify-content-end" activeKey="/home" >

            <NavLink  to="/" exact  style={{fontWeight:"bold", color:"brown",fontSize:"larger"}}>New Register &nbsp; &nbsp;</NavLink > 
            <NavLink   to="/allregister" style={{fontWeight:"bold",color:"brown",fontSize:"larger"}}>All Registers</NavLink>
            
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <div>{this.props.children} </div>
      <div class="page-footer" style={{backgroundColor:'#60738F'}}>

        <div class="container">
          <div class="col-md-12">
            <p class="footer_tag text-center" style={{color: '#fff'}}>
              <small style={{fontWeight:"bold"}}>© Content Owned by Department of Commerce &amp; Industries, Government of Chhattisgarh.</small>
              <br />
            </p>
           <hr style={{borderColor:"white"}}></hr>
          </div>

          <div class="col-md-12 footer_info" style={{marginTop:"-5px"}}>
            <small style={{color:"white"}}>
              All efforts have been made to make the information as accurate as possible. Department of Commerce &amp; Industries, Government Of Chhattisgarh or NIC, will not be responsible for any damage
              {' '}
              caused by inaccuracy in the information available on this Website. Site Designed, Developed &amp; Hosted By :
              {' '}
              <a href="http://cg.nic.in/" target="_blank" style={{fontWeight:"bold",color:"blue"}}>
                National Informatics Center
              </a>
              {' '}
              , Chhattisgarh &nbsp;
            </small>
            <img src={NicLogo} />
            <br></br>
          </div>
         

        </div>

      </div>
    </div>
  );
}
};


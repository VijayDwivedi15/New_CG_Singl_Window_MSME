import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import captchaImg from '../../src/image/CaptchaImage.jpg';
import axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import question from '../image/question.svg';
import { withRouter } from 'react-router-dom';


class UserRegistration extends Component {
  state = {
    rows: [{}],
    formIsValid: false,
    EnterPriceName: "",
    OrganizationName: "",
    PanNo: "",
    TanNo: "",
    EPFORegNo: "",
    ESIRegNo: "",
    Telephone: "",
    Fax: "",
    WebsiteUrl: "",
    OfficialEmailId: "",
    HouseNo: "",
    RoadNo: "",
    Area: "",
    Pincode: "",
    State: "",
    District: "",
    RepresentativeName: "",
    MobileNo: "",
    AadharNo: "",
    Email: "",
    UserID: "",
    Password: "",
    ConfirmPassword: "",
    Captcha: "",
    regexp: /^[0-9\b]+$/



  };

  canBeSubmitted() {
    const { EnterPriceName, OrganizationName, PanNo, TanNo, EPFORegNo, ESIRegNo, Telephone, Fax, WebsiteUrl, OfficialEmailId,
      HouseNo, RoadNo, Area, Pincode, State, District, RepresentativeName,
      MobileNo, AadharNo, Email, UserID, Password, ConfirmPassword, Captcha } = this.state;

    return EnterPriceName.length > 0 && OrganizationName.length > 0 && PanNo.length > 9 && TanNo.length > 9 && EPFORegNo.length > 0 && ESIRegNo.length > 0 && Telephone.length > 9 &&
      Fax.length > 9 && WebsiteUrl.length > 0 && OfficialEmailId.length > 0 && HouseNo.length > 0 && RoadNo.length > 0 &&
      Area.length > 0 && Pincode.length > 5 && State.length > 0 && District.length > 0 && RepresentativeName.length > 0 &&
      MobileNo.length > 9 && AadharNo.length > 11 && Email.length > 0 && UserID.length > 0 && Password.length > 7 && ConfirmPassword.length > 7 &&
      Captcha.length > 0;
  }

  handleEnterPriceNameChange = evt => {
    this.setState({ EnterPriceName: evt.target.value });
  };

  handleOrganizationNameChange = evt => {
    this.setState({ OrganizationName: evt.target.value });
  };

  handlePanNoChange = evt => {

    this.setState({ PanNo: evt.target.value });


  };

  handleTanNoChange = evt => {
    this.setState({ TanNo: evt.target.value });
  };


  handleEPFORegNoChange = evt => {
    this.setState({ EPFORegNo: evt.target.value });
  };

  handleESIRegNoChange = evt => {
    this.setState({ ESIRegNo: evt.target.value });
  };

  handleTelephoneChange = evt => {

    this.setState({ Telephone: evt.target.value });
  };

  handleFaxChange = evt => {
    this.setState({ Fax: evt.target.value });
  };

  handleWebsiteUrlChange = evt => {
    this.setState({ WebsiteUrl: evt.target.value });
  };

  handleOfficialEmailIdChange = evt => {
    this.setState({ OfficialEmailId: evt.target.value });
  };

  handleHouseNoChange = evt => {
    this.setState({ HouseNo: evt.target.value });
  };

  handleRoadNoChange = evt => {
    this.setState({ RoadNo: evt.target.value });
  };

  handleAreaChange = evt => {
    this.setState({ Area: evt.target.value });
  };

  handlePincodeChange = evt => {
    this.setState({ Pincode: evt.target.value });
  };

  handleStateChange = evt => {
    this.setState({ State: evt.target.value });
  };

  handleDistrictChange = evt => {
    this.setState({ District: evt.target.value });
  };

  handleRepresentativeNameChange = evt => {
    this.setState({ RepresentativeName: evt.target.value });
  };

  handleMobileNoChange = evt => {
    this.setState({ MobileNo: evt.target.value });
  };

  handleAadharNoChange = evt => {
    this.setState({ AadharNo: evt.target.value });
  };

  handleEmailChange = evt => {
    this.setState({ Email: evt.target.value });
  };

  handleUserIDChange = evt => {
    this.setState({ UserID: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ Password: evt.target.value });
  };

  handleConfirmPasswordChange = evt => {
    this.setState({ ConfirmPassword: evt.target.value });

  };

  handleCaptchaChange = evt => {
    this.setState({ Captcha: evt.target.value });
  };

  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const item = {

      EntetpreneurName: " ",
      GenerName: " ",
      CategoryName: " ",
      KnowledgeLevelName: " ",
      EquityParticipationNo: " ",
      MobEquityParticipationline: " "

    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }

  formClear = () => {
    console.log('clear');
    this.form.reset();

  }

  componentDidMount() {

  }



  formhandleSubmitted = (event) => {

    const submitdata = {
      Entrepreneur: this.state.rows,
      EnterPricename: this.state.EnterPriceName,
      OrganizationName: this.state.OrganizationName,
      PanNo: this.state.PanNo,
      TanNo: this.state.TanNo,
      EPFORegNo: this.state.EPFORegNo,
      ESIRegNo: this.state.ESIRegNo,
      Telephone: this.state.Telephone,
      Fax: this.state.Fax,
      WebsiteUrl: this.state.WebsiteUrl,
      OfficialEmailId: this.state.OfficialEmailId,
      HouseNo: this.state.HouseNo,
      RoadNo: this.state.RoadNo,
      Area: this.state.Area,
      Pincode: this.state.Pincode,
      State: this.state.State,
      District: this.state.District,
      RepresentativeName: this.state.RepresentativeName,
      MobileNo: this.state.MobileNo,
      AadharNo: this.state.AadharNo,
      Email: this.state.Email,
      UserID: this.state.UserID,
      Password: this.state.Password,
      ConfirmPassword: this.state.ConfirmPassword,
      Captcha: this.state.Captcha
    };

    if (this.state.OrganizationName === "SELF HELP GROUP" && this.state.rows.length < 7) {
      alert('Minimum 7 enterpreneur required for SELF HELP GROUP');
      return;
    }

    if (this.state.OrganizationName === "Co-OPERATIVE SOCIETY" && this.state.rows.length < 10) {
      alert('Minimum 10 enterpreneur required for Co-OPERATIVE SOCIETY');
      return;
    }


    if (this.state.OrganizationName === "PARTNERSHIP" && this.state.rows.length < 2) {
      alert('Minimum 2 enterpreneur required for PARTNERSHIP');
      return;
    }

    const txtPANCard = this.state.PanNo;
    const regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if (regex.test(txtPANCard)) {
    }
    else {
      alert('Please Enter a valid Pan Card Number');
      return false;
    }

    const txttanno = this.state.TanNo;
    const regextan = /([A-Z]){4}([0-9]){5}([A-Z]){1}$/;
    if (regextan.test(txttanno)) {
    }
    else {
      alert('Please Enter a valid Tan No.');
      return false;
    }

    const weburl = this.state.WebsiteUrl;
    const regexweb = /^((http?|ftp|smtp|https):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    if (regexweb.test(weburl)) {
    }
    else {
      alert('Please Enter a valid Website Url');
      return false;
    }





    // if(this.state.PanNo !==  /([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
    // {
    //   alert('Please Enter a Valid Pan No !');
    //   return;
    // }



    if (this.state.Password !== this.state.ConfirmPassword) {
      alert('Password and Confirm Password is Not Matched');
      return;
    }

    if (this.state.Captcha !== "97XGD") {
      alert('Captcha Code is Incorrect please check it');
      return;
    }




    axios.post('https://cg-single-window-system.firebaseio.com/NewRegisters.json', submitdata)
      .then(response => {
        console.log(response);
        this.props.history.push('/allregister');

      });


    if (!this.canBeSubmitted()) {
      event.preventDefault();

      return;
    }



    // const { EnterPriceName } = this.state;
    // alert(`Signed up with email: ${EnterPriceName} `);
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return (




      <div style={{ margin: '2px' }}>
        <div className="card col-sm-12" style={{ backgroundColor: '#8F6073' }}>
          <center><h3 style={{ color: "white" }}>New User Registration</h3></center>
        </div>
        <Form ref={form => this.form = form} >

          <div class="container card col-md-10 col-lg-10 col-sm-10" style={{ backgroundColor: '#ACADA4', marginTop: "10px" }}>

            <div class="form-group row" style={{ marginTop: '20px' }}>


              <div class="col-md-12 col-lg-12 col-sm-12">
                <b style={{ color: "#112FB8" }}>Enterprice Detail</b>
                <hr style={{ borderColor: "white" }}></hr>
              </div>

              <label class="col-sm-2" for="Name">
                <b>Enterprise Name </b>: <span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-3 col-md-3 col-lg-3">
                <input
                  name="ctl00$ContentPlaceHolder1$txtEnterprise_Name"
                  type="text"
                  id="ContentPlaceHolder1_txtEnterprise_Name"
                  class="form-control"
                  value={this.state.EnterPriceName}
                  onChange={this.handleEnterPriceNameChange}
                  placeholder="Enter Your Enterprise Name"
                  required
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>
              </div>
              <div class="col-sm-1 col-md-1 col-lg-1">
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Content>
                        Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)
                  </Popover.Content>
                    </Popover>
                  }
                >
                  <img style={{ width: '15px', marginLeft: "-5px" }} roundedCircle src={question} alt="img" />
                </OverlayTrigger>
              </div>

              <label class="col-sm-2" for="Name">
                <b>Organization Type</b>:<span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-3 col-md-3 col-lg-3">
                <select
                  name="ctl00$ContentPlaceHolder1$ddltype_organization"
                  id="ContentPlaceHolder1_ddltype_organization"
                  class="form-control"
                  value={this.state.OrganizationName}
                  onChange={this.handleOrganizationNameChange}
                  required
                >
                  <option value="0">Select</option>
                  <option value="SELF HELP GROUP">SELF HELP GROUP</option>
                  <option value="Co-OPERATIVE SOCIETY">Co-OPERATIVE SOCIETY</option>
                  <option value="PARTNERSHIP">PARTNERSHIP</option>
                  <option value="PROPRIETARY">PROPRIETARY</option>
                  <option value="HUF">HUF</option>
                  <option value="PUBLIC LIMITED COMPANY">PUBLIC LIMITED COMPANY</option>
                  <option value="PVT. LTD. COMPANY">PVT. LTD. COMPANY</option>
                  <option value="SOCIETY">SOCIETY</option>
                  <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                  <option value="Departmental Undertaking (Govt.)">Departmental Undertaking (Govt.)</option>

                </select>
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator18"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Please Select Organization
          </span>
                <p class="roll-hover">
                  {/* <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Please select the applicable Organization Type from the list</span>"
                  /> */}
                </p>
              </div>
              <div class="col-sm-1 col-md-1 col-lg-1">
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Content>
                        please select applicable organization from the list
                  </Popover.Content>
                    </Popover>
                  }
                >
                  <img style={{ width: '15px', marginLeft: "-5px" }} roundedCircle src={question} alt="img" />
                </OverlayTrigger>
              </div>

              <label class="col-sm-2" for="PanNo">
                <b>PAN</b> : <span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-3 col-md-3 col-lg-3">
                <input
                  name="ctl00$ContentPlaceHolder1$txtPan_No"
                  type="text"
                  id="ContentPlaceHolder1_txtPan_No"
                  class="form-control"
                  placeholder="Enter Pan Number"
                  value={this.state.PanNo}
                  onChange={this.handlePanNoChange}

                  required
                  maxLength="10"
                  minLength="10"
                />

                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>
              <div class="col-sm-1 col-md-1 col-lg-1">
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Content>
                        <span> Please provde the number according to the following:</span> <br />
                        <ol><li>Cooperative Society: PAN Number of the Registered Cooperative Society</li>
                          <li>Partnership: PAN Number of the Registered Partnership Firm</li>
                          <li>Proprietary: PAN Number of the Proprietor (Owner)</li>
                          <li>HUF: PAN Number of the Karta</li>
                          <li>Public Limited Company: PAN Number of the Registered Company</li>
                          <li>PVT. Ltd Company: PAN Number of the Registered Company</li>
                          <li>Society: PAN Number of the Registered Society</li>
                          <li>Limited Liability Partnership: PAN Number of the Registered  Limited Liability Partnership Firm</li> </ol>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <img style={{ width: '15px', marginLeft: "-5px" }} roundedCircle src={question} />
                </OverlayTrigger>
              </div>



              {/* -------For Tan------- */}

              <label class="col-sm-2 col-md-2 col-lg-2" for="TanNo">
                <b>TAN</b> : <span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-4 col-md-4 col-lg-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtTan_No"
                  type="text"
                  id="ContentPlaceHolder1_txtTan_No"
                  class="form-control"
                  placeholder="Enter Tan Number"
                  value={this.state.TanNo}
                  onChange={this.handleTanNoChange}
                  required
                  maxLength="10"
                  minLength="10"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>
              </div>






              {/* -------For EPFO Registration No------- */}

              <label class="col-sm-2" for="EPFO">
                <b>EPFO Registration No</b> :
        </label>
              <div class="col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtEPFO_No"
                  type="text"
                  id="ContentPlaceHolder1_txtEPFO_No"
                  class="form-control"
                  placeholder="Enter EPFO Registration No"
                  value={this.state.EPFORegNo}
                  onChange={this.handleEPFORegNoChange}

                />
                <p><span class="text-warning">For more details please visit</span>&nbsp;<a href="http://www.epfindia.com/site_en/OLRE.php" target="_blank">here</a></p>
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                {/* <p class="roll-hover">
            <i
              class="glyphicon glyphicon-question-sign"
              data-popover="true"
              data-html="true"
              data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
            />
          </p> */}
              </div>



              {/* -------For ESI Registration No------- */}

              <label class="col-sm-2" for="ESIReg">
                <b>ESI Registration No</b> :
        </label>
              <div class="col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtESIReg_No"
                  type="text"
                  id="ContentPlaceHolder1_txtESIReg_No"
                  class="form-control"
                  placeholder="Enter ESI Registration No"
                  value={this.state.ESIRegNo}
                  onChange={this.handleESIRegNoChange}
                />
                <p><span class="text-warning">For more details please visit</span>&nbsp;<a href="http://www.esic.in/ESICInsurance1/ESICInsurancePortal/PortalLogin.aspx" target="_blank">here</a></p>
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>



              {/* -------For Telephone------- */}

              <label class="col-sm-2" for="Telephone">
                <b>Telephone</b> : <span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtTelephone_No"
                  type="number"
                  id="ContentPlaceHolder1_txtTelephone_No"
                  class="form-control"
                  placeholder="Enter Telephone Number with STD Code"
                  value={this.state.Telephone}
                  onChange={this.handleTelephoneChange}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                  }}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>



              {/* -------For Fax------- */}

              <label class="col-sm-2" for="Fax">
                <b>Fax</b> : <span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtFax_No"
                  type="number"
                  id="ContentPlaceHolder1_txtFax_No"
                  class="form-control"
                  placeholder="Enter Your Fax Number"
                  value={this.state.Fax}
                  onChange={this.handleFaxChange}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                  }}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>



              {/* -------For Website Url------- */}

              <label class="col-sm-2" for="WebsiteUrl">
                <b>Website Url</b> : <span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <input
                  name="ctl00$ContentPlaceHolder1$txtWebsiteUrl_No"
                  type="text"
                  id="ContentPlaceHolder1_txtWebsiteUrl_No"
                  class="form-control"
                  placeholder="Enter Your Website Url"
                  value={this.state.WebsiteUrl}
                  onChange={this.handleWebsiteUrlChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>

              <div class="col-sm-1 col-md-1 col-lg-1">
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Content>
                        please provide the address of the official website of your Enterprise.
                  </Popover.Content>
                    </Popover>
                  }
                >
                  <img style={{ width: '15px', marginLeft: "-5px" }} roundedCircle src={question} />
                </OverlayTrigger>
              </div>



              {/* -------For Official Email Id------- */}

              <label class="col-sm-2" for="OfficialEmail">
                <b>Official Email Id</b> : <span class="form_error" style={{ color: "red" }}>*</span>
              </label>
              <div class="col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtOfficialEmail_No"
                  type="email"
                  id="ContentPlaceHolder1_txtOfficialEmail_No"
                  class="form-control"
                  placeholder="Enter Your Official Email ID"
                  value={this.state.OfficialEmailId}
                  onChange={this.handleOfficialEmailIdChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>

              {/* ------Communication Address--------------- */}

              <div class="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <b style={{ color: "#112FB8" }}>Communication Address</b>
                <hr style={{ borderColor: "white" }}></hr>
              </div>


              <div class="col-md-2 col-lg-2 col-sm-2" >
                <label for="BlockNo">
                  <b>Block No / House No</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtBlock_No"
                  type="text"
                  id="ContentPlaceHolder1_txtOfficialBlock_No"
                  class="form-control"
                  placeholder="Enter Block No / House No"
                  value={this.state.HouseNo}
                  onChange={this.handleHouseNoChange}
                  required
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>


              <div class="col-md-2 col-lg-2 col-sm-2" >
                <label for="RoadNo">
                  <b>Road/Street/Lane</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtRoad_No"
                  type="text"
                  id="ContentPlaceHolder1_txtOfficialRoad_No"
                  class="form-control"
                  placeholder="Enter Road/Street/Lane"
                  value={this.state.RoadNo}
                  onChange={this.handleRoadNoChange}
                  required
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>


              <div class="col-md-2 col-lg-2 col-sm-2" >
                <label for="Area">
                  <b>Area/Locality</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtArea_No"
                  type="text"
                  id="ContentPlaceHolder1_txtOfficialArea_No"
                  class="form-control"
                  placeholder="Enter Area/Locality"
                  value={this.state.Area}
                  onChange={this.handleAreaChange}
                  required
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>


              <div class="col-md-2 col-lg-2 col-sm-2" >
                <label for="PinCode">
                  <b>PinCode</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtPincode_No"
                  type="number"
                  id="ContentPlaceHolder1_txtOfficialPincode_No"
                  class="form-control"
                  placeholder="Enter PinCode"
                  value={this.state.Pincode}
                  onChange={this.handlePincodeChange}
                  required
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                  }}

                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>




              <div class="col-md-2 col-lg-2 col-sm-2" >
                <label for="State">
                  <b>State</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <select
                  name="ctl00$ContentPlaceHolder1$ddlState_Name"
                  id="ContentPlaceHolder1_ddlState_Name"
                  class="form-control"
                  value={this.state.State}
                  onChange={this.handleStateChange}
                  required
                >
                  <option value="0" selected="selected">Select State</option>
                  <option value="Andaman & Nicobar">Andaman &amp; Nicobar</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu & Kashmir">Jammu &amp; Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Orissa">Orissa</option>

                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttaranchal">Uttaranchal</option>
                  <option value="West Bengal">West Bengal</option>



                </select>
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator18"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Please Select Your State
          </span>
                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Please select the State from the list</span>"
                  />
                </p>

              </div>



              <div class="col-md-2 col-lg-2 col-sm-2" >
                <label for="District">
                  <b>District</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-4">
                <select
                  name="ctl00$ContentPlaceHolder1$ddlDistrict_Name"
                  id="ContentPlaceHolder1_ddlDistrict_Name"
                  class="form-control"
                  value={this.state.District}
                  onChange={this.handleDistrictChange}
                  required
                >

                  <option selected="selected" value="0">Select District</option>
                  <option value="Balod">Balod</option>
                  <option value="Baloda Bazar">Baloda Bazar</option>
                  <option value="Balrampur">Balrampur</option>
                  <option value="Bastar">Bastar</option>
                  <option value="Bemetara">Bemetara</option>
                  <option value="Bijapur">Bijapur</option>
                  <option value="Bilaspur">Bilaspur</option>
                  <option value="Dantewada">Dantewada</option>
                  <option value="Dhamtari">Dhamtari </option>
                  <option value="Durg">Durg</option>
                  <option value="Gariyaband">Gariyaband</option>
                  <option value="Janjgir - Champa">Janjgir - Champa</option>
                  <option value="Jashpur">Jashpur </option>
                  <option value="Kabeerdham">Kabeerdham</option>
                  <option value="Kanker">Kanker</option>
                  <option value="Kondagaon">Kondagaon</option>
                  <option value="Korba">Korba </option>
                  <option value="Koriya">Koriya</option>
                  <option value="Mahasamund">Mahasamund</option>
                  <option value="Mungeli">Mungeli</option>
                  <option value="Narayanpur">Narayanpur</option>
                  <option value="Raigarh">Raigarh</option>
                  <option value="Raipur">Raipur</option>
                  <option value="Rajnandgaon">Rajnandgaon</option>
                  <option value="Sarguja">Sarguja</option>
                  <option value="Sukma">Sukma</option>
                  <option value="Surajpur">Surajpur</option>





                </select>
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator18"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Please Select Your District
          </span>
                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Please select the State from the list</span>"
                  />
                </p>

              </div>


              <div class="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: "10px", marginBottom: "10px;" }}>

                <b style={{ color: "#112FB8" }}>Entrepreneur Details <small>(fill details based on organization type)</small> </b>
                <hr style={{ borderColor: "white" }}></hr>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="col-md-12 column">

                    <button type="button" onClick={this.handleAddRow} className="btn btn-primary" style={{ float: "right", marginBottom: "10px" }}>
                      Add More
              </button><br></br><br></br>
                    <span class="text-warning" style={{ float: "right", marginBottom: "10px" }}>You can add multiple Partners/Directors/Members</span>


                    <table
                      className="table table-bordered table-hover"
                      id="tab_logic"

                    >
                      <thead style={{ backgroundColor: "#8E93A8 " }}>
                        <tr>
                          <th className="text-center"> Entrepreneur Name </th>
                          <th className="text-center"> Gender </th>
                          <th className="text-center"> Category </th>
                          <th className="text-center"> Knowledge Level </th>
                          <th className="text-center"> Equity Participation(in ₹)
                          <OverlayTrigger
                              trigger="hover"
                              placement="bottom"
                              overlay={
                                <Popover id="popover-basic">
                                  <Popover.Content>
                                    Fill up the amount of Equity Participation in Rs. (Capital Invested by the Entrepreneur).
                  </Popover.Content>
                                </Popover>
                              }
                            >
                              <img style={{ width: '15px', marginLeft: "-2px" }} roundedCircle src={question} />
                            </OverlayTrigger>
                          </th>
                          <th className="text-center"> Equity Participation(in %)
                          <OverlayTrigger
                              trigger="hover"
                              placement="bottom"
                              overlay={
                                <Popover id="popover-basic">
                                  <Popover.Content>
                                    Fill up percentage of Equity Participation (Capital Invested by the Entrepreneur).
                  </Popover.Content>
                                </Popover>
                              }
                            >
                              <img style={{ width: '15px', marginLeft: "-2px" }} roundedCircle src={question} />
                            </OverlayTrigger>
                          </th>
                          <th />
                        </tr>
                      </thead>
                      <tbody style={{ border: "1px solid black" }}>
                        {this.state.rows.map((item, idx) => (
                          <tr id="addr0" key={idx}>
                            {/* <td>{idx}</td> */}

                            <td>
                              <input
                                type="text"
                                name="enterpreneurname"
                                placeholder="Entetpreneur Name"
                                value={this.state.rows[idx].EntetpreneurName}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              />
                            </td>



                            <td>
                              <select

                                name="gender"
                                value={this.state.rows[idx].GenerName}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              >
                                <option value="0" selected="selected">Select </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>



                              </select>

                            </td>


                            <td>

                              <select

                                name="category"
                                value={this.state.rows[idx].CategoryName}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              >
                                <option value="0" selected="selected">Select </option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                                <option value="OBC">OBC</option>
                                <option value="Minority">Minority</option>
                                <option value="Physically Challenged">Physically Challenged</option>
                                <option value="General">General</option>
                                <option value="Others">Others</option>



                              </select>
                            </td>


                            <td>
                              <select

                                name="Knowledgelevel"
                                value={this.state.rows[idx].KnowledgeLevelName}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              >

                                <option value="" selected="selected">Select</option>
                                <option value="UNDER GRADUATE">UNDER GRADUATE</option>
                                <option value="TECHNICAL GRADUATE">TECHNICAL GRADUATE</option>
                                <option value="MANAGEMENT GRADUATE">MANAGEMENT GRADUATE</option>
                                <option value="OTHERS GRADUATE">OTHERS GRADUATE</option>
                                <option value="POST GRADUATE">POST GRADUATE</option>
                                <option value="OTHERS">OTHERS</option>

                              </select>
                            </td>



                            <td>
                              <input
                                type="text"
                                name="EquityParticipation"
                                placeholder="In Rupees"
                                value={this.state.rows[idx].EquityParticipationNo}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                name="mobEquityParticipationline"
                                placeholder="In Percent"
                                value={this.state.rows[idx].MobEquityParticipationline}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              />
                            </td>
                            <td>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={this.handleRemoveSpecificRow(idx)}
                              >
                                Remove
                        </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button> */}
                  </div>
                </div>
              </div>


              {/* ----For Authorised Representative Detail------------------ */}

              <div class="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: "10px", marginBottom: "10px;" }}>

                <b style={{ color: "#112FB8" }}>Authorized Representative Details </b>
                <hr style={{ borderColor: "white" }}></hr>
              </div>

              <div class="col-lg-2 col-md-2 col-sm-2">
                <label for="RepresentativeName">
                  <b>Representative Name</b>:<span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtRepresentative_Name"
                  type="text"
                  id="ContentPlaceHolder1_txtOfficialRepresentative_Name"
                  class="form-control"
                  placeholder="Enter Representative Name"
                  value={this.state.RepresentativeName}
                  onChange={this.handleRepresentativeNameChange}
                  required
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                {/* <p class="roll-hover">
            <i
              class="glyphicon glyphicon-question-sign"
              data-popover="true"
              data-html="true"
              data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
            />
          </p> */}
              </div>




              <div class="col-lg-2 col-md-2 col-sm-2">
                <label for="MobileNo">
                  <b>Mobile Number</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtMobile_No"
                  type="number"

                  id="ContentPlaceHolder1_txtOfficialMobile_No"
                  class="form-control"
                  placeholder="Enter Your Mobile No. "
                  value={this.state.MobileNo}
                  onChange={this.handleMobileNoChange}
                  required
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                  }}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                {/* <p class="roll-hover">
            <i
              class="glyphicon glyphicon-question-sign"
              data-popover="true"
              data-html="true"
              data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
            />
          </p> */}
              </div>


              <div class="col-lg-2 col-md-2 col-sm-2">
                <label for="Aadhar">
                  <b>Aadhar Number</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtAadhar_No"
                  type="number"
                  id="ContentPlaceHolder1_txtOfficialAadhar_No"
                  class="form-control"
                  placeholder="Enter 12 digit Aadhar No. "
                  value={this.state.AadharNo}
                  onChange={this.handleAadharNoChange}
                  required
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12)
                  }}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                {/* <p class="roll-hover">
            <i
              class="glyphicon glyphicon-question-sign"
              data-popover="true"
              data-html="true"
              data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
            />
          </p> */}
              </div>



              <div class="col-lg-2 col-md-2 col-sm-2">
                <label for="Email">
                  <b>Email</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtEmail_id"
                  type="email"
                  id="ContentPlaceHolder1_txtOfficialEmail_id"
                  class="form-control"
                  placeholder="Enter Your Email"
                  value={this.state.Email}
                  onChange={this.handleEmailChange}
                  required
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                {/* <p class="roll-hover">
            <i
              class="glyphicon glyphicon-question-sign"
              data-popover="true"
              data-html="true"
              data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
            />
          </p> */}
              </div>


              {/* ----For Login Detail------------------ */}



              <div class="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: "10px", marginBottom: "10px;" }}>

                <b style={{ color: "#112FB8" }}>Login Details </b>
                <hr style={{ borderColor: "white" }}></hr>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12" style={{ marginBottom: "10px" }}>

                <small style={{ color: "red", fontWeight: "bold" }}>Password Policy:- Minimum 8 and Maximum 15 characters, atleast 1 UpperCase Alphabet, 1 LowerCase Alphabet, 1 Number and 1 Special Character( ! @ # $ & * )</small>

              </div>
              <div class="col-lg-2 col-md-2 col-sm-2">
                <label for="UserID">
                  <b>User ID (Preferred)</b>: <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtUser_id"
                  type="text"
                  id="ContentPlaceHolder1_txtOfficialUser_id"
                  class="form-control"
                  placeholder="Enter Prefered User ID"
                  value={this.state.UserID}
                  onChange={this.handleUserIDChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                {/* <p class="roll-hover">
            <i
              class="glyphicon glyphicon-question-sign"
              data-popover="true"
              data-html="true"
              data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
            />
          </p> */}
              </div>


              <div class="col-lg-2 col-md-2 col-sm-2">
                <label for="Password">
                  <b>Password</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtPassword_No"
                  type="password"
                  minLength="8"
                  maxLength="15"
                  id="ContentPlaceHolder1_txtOfficialPassword_No"
                  class="form-control"
                  placeholder="Enter Your Password"
                  value={this.state.Password}
                  onChange={this.handlePasswordChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                <p class="roll-hover">
                  <i
                    class="glyphicon glyphicon-question-sign"
                    data-popover="true"
                    data-html="true"
                    data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
                  />
                </p>
              </div>



              <div class="col-lg-2 col-md-2 col-sm-2">
                <label for="CnPassword">
                  <b>Confirm Password</b> : <span class="form_error" style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4">
                <input
                  name="ctl00$ContentPlaceHolder1$txtPassword_Cnf"
                  type="password"
                  minLength="8"
                  maxLength="15"
                  id="ContentPlaceHolder1_txtOfficialPassword_Cnf"
                  class="form-control"
                  placeholder="Enter Cofirm Password"
                  value={this.state.ConfirmPassword}
                  onChange={this.handleConfirmPasswordChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>

                {/* <p class="roll-hover">
            <i
              class="glyphicon glyphicon-question-sign"
              data-popover="true"
              data-html="true"
              data-content="<span> Fill Entreprise Name (Please don't add the prefix M/s to the Entreprise Name)</span>"
            />
          </p> */}
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6"></div>



              <div class="col-lg-4 col-md-4 col-sm-4" style={{ marginTop: "10px" }}>
                <label for="captcha">
                  <b>Enter the Characters shown in image :</b>
                </label>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4" style={{ marginTop: "10px" }}>
                <input
                  name="ctl00$ContentPlaceHolder1$txtCaptcha_Char"
                  type="text"
                  minLength="8"
                  maxLength="15"
                  id="ContentPlaceHolder1_txtOfficialCaptcha_Char"
                  class="form-control"
                  placeholder="Enter Captcha Charecters"
                  value={this.state.Captcha}
                  onChange={this.handleCaptchaChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  class="form_error"
                  style={{ display: 'none' }}
                >
                  Required
          </span>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4" style={{ marginTop: "10px" }}>
                <img src={captchaImg}></img>
              </div>



              <div class="col-lg-12 col-md-12 col-sm-12" style={{ marginTop: "20px" }}>

              </div>

              <div class="col-md-6">
                <input type="button" value="Register" onClick={this.formhandleSubmitted} disabled={!isEnabled} class="btn btn-primary" style={{ width: "120px", float: "right", fontWeight: "bold" }}></input>
              </div>

              <div class="col-md-6">
                <input type="button" value="Clear" onClick={this.formClear} class="btn btn-primary" style={{ width: "120px", float: "left", fontWeight: "bold" }}></input>
              </div>





              <div style={{ clear: 'both' }} />
            </div>
          </div>

        </Form>
      </div>
    );
  }
};

export default withRouter(UserRegistration);

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import axios from 'axios';


class Registers extends Component {

    state = {
        orders: [],
        loading: true,
        error: false,
        UniqueID: " ",
        loadedPost: null
    }


    


    componentDidMount() {
        axios.get('https://cg-single-window-system.firebaseio.com/NewRegisters.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });

            })
            .catch(error => {
                this.setState({ loading: false });
                this.setState({ error: true });
            });
    }

    handleIDChange = evt => {
        this.setState({ UniqueID: evt.target.value });
        console.log(this.state.UniqueID);
    };

    FilteredData = (event) => {
        const uniquedata = this.state.UniqueID;
        console.log(uniquedata);

        axios.get('https://cg-single-window-system.firebaseio.com/NewRegisters.json?UserID=' + uniquedata)
            .then(res => {
                this.setState({ loadedPost: res.data });
                console.log(this.state.loadedPost);

            })
    }


    render() {


        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error && this.state.loadedPost === null) {
            posts = this.state.orders.map(post => {
                return <Card style={{ margin: "20px", backgroundColor: "#DCEAE5" }}>
                    <Card.Header as="h5" style={{ backgroundColor: "#64608F",color:"white" }}>
                        Enter Prise  : {post.EnterPricename}

                    </Card.Header>
                    <Card.Body>
                        <h6>Organization : {post.OrganizationName} </h6>

                        <hr style={{borderColor:"white"}}></hr>
                        <div class="row">

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p> <b>Pan No.</b> :  {post.PanNo} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p> <b>Tan No.</b> :  {post.TanNo} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>EPFO Registration No.</b> :  {post.EPFORegNo} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>ESI Registration No.</b> :  {post.ESIRegNo} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>Telephone</b> :  {post.Telephone} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>Fax</b>  :  {post.Fax} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>Website Url</b> :  {post.WebsiteUrl} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>Official Email Id</b>  :  {post.OfficialEmailId} </p>
                            </div>



                        </div>
                        <hr style={{borderColor:"white"}}></hr>
                        <h6 style={{ color: "red" }}>Communication Address</h6>

                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>Block No/ House No</b>  :  {post.HouseNo} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>Road/Street/Lane</b>  :  {post.RoadNo} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>Area/Locality</b>   :  {post.Area} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>PinCode</b> :  {post.Pincode} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>State</b>  :  {post.State} </p>
                            </div>

                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <p><b>District</b>   :  {post.District} </p>
                            </div>


                        </div>
                        <hr style={{borderColor:"white"}}></hr>
                        {/* <div class="row">
                          <h6 style={{color:"red"}}>Entrepreneur Details </h6>
                          
                        </div>
                        <hr></hr> */}

                        <h6 style={{ color: "red" }}>Authorized Representative Details</h6>
                        <div class="row">

                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <p><b>Representative Name</b>   :  {post.RepresentativeName} </p>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <p><b>Mobile Number</b>   :  {post.MobileNo} </p>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <p><b>Aadhar Number </b>  :  {post.AadharNo} </p>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <p><b>Email</b>   :  {post.Email} </p>
                            </div>

                        </div>

                        <hr style={{borderColor:"white"}}></hr>

                        <h6 style={{ color: "red" }}>Login Details </h6>

                        <div class="row">


                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <p><b>UserID</b>   :  {post.UserID} </p>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <p><b>Password</b>   :  {post.Password} </p>
                            </div>



                        </div>




                    </Card.Body>
                </Card>
            });

        }

       

        else {
            return <Card style={{ margin: "20px" }}>
                <b style={{ textAlign: "center", color: "red" }}>Something went wrong !! Or Check Your Internet Connection !</b>
            </Card>
        }




        return (
            <div class="row">
                <div class="col-md-6" style={{marginTop:"8px"}}>
                    <input
                        name="SearchButton"
                        type="text"
                        id="SearchButtons"
                        class="form-control"
                        placeholder="Enter Unique UserID"
                        value={this.state.UniqueID}
                        onChange={this.handleIDChange}
                        required
                        
                        style={{width:"250px",marginLeft:"10px",float:"right"}}
                        

                    />
                </div>
                <div class="col-md-6" style={{marginTop:"8px"}}>
                    <input type="button" value="Search UserID" style={{float:"left"}} class="btn btn-primary" onClick={this.FilteredData}></input>
                </div>
                <div class="col-md-12 col-lg-12">
                    <Card style={{ margin: "20px" }}>


                        {posts}


                    </Card>
                </div>


            </div>

        );
    }
}

export default Registers;
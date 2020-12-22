import React, { Component } from "react";

export default class Signup extends Component {
    render() {
        return (
            <div className="container" style={{width:'50%',color:"white"}}>
                <form className="jumbotron" style={{backgroundImage:`url("https://images.unsplash.com/photo-1576055150289-5cb6edcf5fae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmdvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")`}}>
                <h3 className="text-center">Sign Up</h3>

                <div className="form-group">
                    <label>NGO Name</label>
                    <input type="text" className="form-control" placeholder="NGO Name" required />
                </div>

                <div className="form-group">
                    <label>Founder Name</label>
                    <input type="text" className="form-control" placeholder="Founders Name" required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Your Vision</label><br></br>
                   <textarea rows="4" cols="50" placeholder="Type here your vision//" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>

                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>

                <button type="submit" className="text-center btn btn-primary">Sign Up</button>
                
            </form>
            </div>
            
        );
    }
}
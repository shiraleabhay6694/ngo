import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center">
                    
                    <img style={{width:'10%',paddingBottom:'15px',borderBottom:'5px solid gray'}} src={URL="http://www.ngoxchange.com/images/footer-logo.png"}/>
                    <br/><br/>
                        <p>Contact: happyfaces@gmail.com</p>
                        <p>Copyright NGO happyfaces, 2020.</p>
                    
                </div>
            </div>
        )
    }
}

export default Footer

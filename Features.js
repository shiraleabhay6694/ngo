import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return (
            <div className="Featureblock ">
           <div className="container" style={{marginBottom:"20px",paddingTop:"30px",paddingBottom:"30px"}}>
                <div className="features" >
                    <h1>The World Of Blockchain Technology</h1><br/>
                    <img className="img-thumbnail" src={URL="https://cdn-gcp.marutitech.com/wp-media/2016/11/Blockchain-Benefits-Drawbacks-and-Everything-You-Need-to-Know_2.jpg"}/>
                    <br/><br/>
                   
                   <span></span>
                    <p style={{color:"black"}}><b>To know more about blockchain please check out the official website</b></p>
                   <button className="btn btn-danger imga"><a style={{color:"white"}} href="https://www.blockchain.com/">Take me to Officials</a></button>
                   
                   
                </div>
           </div>
           </div>
        )
    }
}

export default Features

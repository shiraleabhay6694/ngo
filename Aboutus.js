import React, { Component } from 'react'


export class Aboutus extends Component {
    render() {
        return (
            
                <div className="container">
                    <div className="jumbotron about bg-dark" >
                    <div className="row gap100">
                            <div className="col-md-6" >
                                <h2>Our Mission</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className=" col-md-6" >
                                <img className="img-thumbnail" src={URL="https://www.devteam.space/wp-content/uploads/2018/05/smart-contract.jpg"}/>
                            </div>
                    </div>
                    </div>
                </div>
        
        )
    }
}

export default Aboutus

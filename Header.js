import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>

<nav className="navbar navbar-expand-sm  navbar-dark" style={{backgroundColor:"rgb(50, 70, 135)"}}>

  <img className="navbar-brand" style={{width:'5%',paddingLeft:"15px"}} src={URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMb0ChgOviEO6rzecpdBSQ7wVKlVKSt2owQ&usqp=CAU"}/>
  
  
  <ul className="navbar-nav" >
    <li className="nav-item">
      <a style={{color:'white'}} className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a style={{color:'white'}} className="nav-link " href="#">Signup</a>
    </li>
    <li className="nav-item">
      <a style={{color:'white'}} className="nav-link " href="#">Home</a>
    </li>
    <li className="nav-item">
      <a style={{color:'white'}} className="nav-link" href="#">Home</a>
    </li>
  </ul>
</nav>

                
            </div>
        )
    }
}

export default Header

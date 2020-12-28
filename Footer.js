import React from 'react'
import styled from 'styled-components'

 function Footer() {
    return (
        <FooterContainer className="main-footer text-center">
            <div className="footer-middle">
            <div className="container">

                <img style={{width:'13%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNBrzY5of4QBt2BuMTHURdQQvwOJ2jq7WaQ&usqp=CAU"/>
                <br/><br/>
                <div className="row">

                    <div className="col-md-4 col-sm-6">
                    <h4 style={{textDecoration:'underline'}}>Contact Us</h4>
                    <ul className="list-unstyled">
                        <li>Sangli </li>
                        <li>Main Location </li>
                        <li>phone: 123-45-67 </li>
                        <li>happyfaces@gmail.com</li>
                    </ul>
                    </div>

                    <div className="col-md-4 col-sm-6">
                    <h4 style={{textDecoration:'underline'}}>Contact Us</h4>
                    <ul className="list-unstyled">
                        <li> <a href="">1st </a></li>
                        <li> <a href="">2nd </a></li>
                        <li> <a href=""> 3rd </a></li>
                       
                    </ul>
                    </div>

                    <div className="col-md-4 col-sm-6">
                    <h4 style={{textDecoration:'underline'}}>Contact Us</h4>
                    <ul className="list-unstyled">
                    <li> <a href="">1st </a></li>
                        <li> <a href="">2nd </a></li>
                        <li> <a href=""> 3rd </a></li>
                    </ul>
                    </div>

                   
                </div>  

                
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Donation Guide App - All Rights Reserved
                    </p>
                </div>
            </div> 
            </div>       
        </FooterContainer>
    )
}

export default Footer

const FooterContainer=styled.footer`
    .footer-middle{
        background: #32036b;
        padding-top:3rem;
        color:white;
        
    }

    .footer-bottom{
        padding-top:3rem;
        padding-bottom:2rem;
    }

    ul li a{
        color:gray;

    }
    ul li a:hover{
        color:lightgray;
    }
`
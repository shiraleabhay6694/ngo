import React from 'react'

import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './HeaderElements'

const Header = () => {
    return (
        <>
            <Nav>
                <img style={{width:'100px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMb0ChgOviEO6rzecpdBSQ7wVKlVKSt2owQ&usqp=CAU"/>
                <Bars/>
                <NavMenu>
                    <NavLink to="" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="./Signup.js" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Header

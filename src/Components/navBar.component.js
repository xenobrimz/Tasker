import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
const NavBar = (props) =>{

    const Nav = styled.nav(props => ({
        background: "rgb(26, 140, 255)",
        height: "60px",
        fontSize:'60px'
    }));
   
    const Logo = styled.nav(props => ({
        margin: "0",
        padding:'0', 
        background: 'rgb(0, 51, 204)',
        height: "50px",
        width:'50px',
        fontSize:'43px',
        textAlign:'match-parent',
        marginLeft:'5px'

        
    }));
    return(
        <>
           <Nav className='navbar p-0 m-0 shadow sticky-top'>    
                <a href='/' className='navbar-brand text-light m-0 p-0 d-flex text-center  clearfix'>
                    <Logo className='rounded'>T</Logo>
                    <div className="d-flex flex-column justify-content-end">
                        <h1 className="m-0">Tasker</h1>
                    </div>
                </a>
           </Nav>
        </>
    );
}

export default NavBar;
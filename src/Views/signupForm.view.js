import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Create from '../Components/userCreateForm.Component';
const SignUp = (props) => {
   

    const Container = styled.div(props => ({
        height: '100vh',
        maxHeight: '909px',
        background: 'rgb(0, 77, 153)',
        margin:'0px',
        padding: '50px',
      }));
    
    const Title = styled.h1(props => ({
        fontSize: '100px',
        margin:'50px',
        padding: '0px',
        textAlign: 'center'
    }));

    
    
    return (
      <Container> 
        <div className="container d-flex flex-column justify-content-center align-items-center text-light">
          <Create></Create>
        </div>
      </Container> 
    );
}
    
export default SignUp;
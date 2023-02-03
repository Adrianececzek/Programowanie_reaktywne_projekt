import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


function Login() {

  const [imie,setImie]=useState('');
  const [password,setPassword]=useState('');

  const handleName = (event) => {
      setImie(event.target.value);
  };
  const navigate = useNavigate();
  const  Rejestracja = () =>{
      navigate('/Register')
  }

  const handlePassword = (event) => {
      setPassword(event.target.value);
  };


function Logowanie() {
  axios({
      method: 'post',
      url: 'https://at.usermd.net/api/user/auth',
      data: {
          login:''+imie,
          password:''+password,
      }
  }).then((response) => {
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('loginId',response.data.userId);
      localStorage.setItem('login',imie);
      localStorage.setItem('isLogged','true');
      window.location.href='/';
  }).catch((error : AxiosError) => {
      alert(error.response.data)
      console.log(error.response);
  });

}


  return (
    
    <div >
       
      <Header/>
     
    <MDBContainer fluid>
        
      
        <MDBCardBody>
          <MDBRow>
            <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p style={{fontWeight:'bold'}}>Login</p>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size=''/>
                <MDBInput onChange={handleName} id='form1' type='text' className='w-100' placeholder='Login'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput onChange={handlePassword}  id='form2' type='password' placeholder='Hasło'/>
              </div>
              <button onClick={Logowanie} type="button" className="btn btn-danger">Login</button>
              <br></br>
              <button onClick={Rejestracja} type="button" className="btn btn-danger" style={{lineheight: '2.0'}}>Register</button>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>

    </MDBContainer>
    <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
    <Footer/>
    </div>
    </div>
  );
}

export default Login;
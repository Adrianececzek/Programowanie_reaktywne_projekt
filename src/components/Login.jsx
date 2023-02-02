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
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput onChange={handleName} label='Login' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput onChange={handlePassword} label='Hasło' id='form2' type='password'/>
              </div>

              <button onClick={Logowanie} type="button" className="btn btn-danger">Login</button>
              <br></br>
              <button onClick={Rejestracja} type="button" className="btn btn-danger">Register</button>

            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;
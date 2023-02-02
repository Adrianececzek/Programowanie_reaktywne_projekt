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
import {AxiosError} from "axios";
import { useState } from 'react';


function Register() {
  const [imie,setImie]=useState('');
  const [email,setEmail]=useState('');
  const [password,setFPassword]=useState('');

  const navigate = useNavigate();
  const  Logowanie = () =>{
      navigate('/Login')
  }

  const handleImie = (event) => {
    setImie(event.target.value);
  };
  const handleFPassword = (event) => {
    setFPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  function Rejestracja() {
    if(email.length===0|| imie.length===0||password.length===0) {
        alert('Nie wszystkie pola są wpisane');
        return;
    }
    else{
        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/user/create/',
            data: {
                name:''+imie,
                email: ''+email,
                password:''+password,
            }
        }).then((response) => {
            console.log(response);
            alert('Zarejestrowałes sie');
        }).catch((error:AxiosError) => {
            alert(error.response.data)
            console.log(error);
        });
         
    }
    }
  

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput onChange={handleImie} label='Imie' id='form2' type='name'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput onChange={handleEmail} label='Email' id='form3' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput onChange={handleFPassword} label='Hasło' id='form4' type='password'/>
              </div>

              

              <button onClick={Rejestracja} type="button" className="btn btn-danger">Register</button>
              <br></br>
              <button onClick={Logowanie} type="button" className="btn btn-danger">Logowanie</button>

            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;
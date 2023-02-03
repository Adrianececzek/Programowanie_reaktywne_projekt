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
import Header from './Header';
import Footer from './Footer';


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
    <div >
      <Header/>
    <MDBContainer fluid>

        <MDBCardBody>
          <MDBRow>
            <MDBCol  className='order-2 order-lg-1 d-flex flex-column align-items-center' >
            <p style={{fontWeight:'bold'}}>Register</p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput onChange={handleImie}  id='form2' type='name' placeholder='Imie'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput onChange={handleEmail} id='form3' type='email' placeholder='Email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput onChange={handleFPassword}  id='form4' type='password' placeholder='Hasło'/>
              </div>

              

              <button onClick={Rejestracja} type="button" className="btn btn-danger">Register</button>
              <br></br>
              <button onClick={Logowanie} type="button" className="btn btn-danger">Logowanie</button>

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

export default Register;
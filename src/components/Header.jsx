import React from "react"
import "./Header.css"
import { useNavigate } from "react-router-dom"
import { decodeToken, isExpired } from "react-jwt"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const Header = (props) => {

    const navigate = useNavigate();
    const imie=localStorage.getItem('login');
    const logged = localStorage.getItem('isLogged');

    const  login = () =>{
        navigate('/Login')
    }
    const  Register = () =>{
        navigate('/Register')
    }
    const  Add = () =>{
        navigate('/add')
    }

    useEffect(()=>{
        if(isExpired(localStorage.getItem('token'))){
            localStorage.setItem('isLogged','false');
        }
    })

    function Logout() {
        let userId=decodeToken(localStorage.getItem('token')).userId
        console.log('userid:',userId);
        axios({
            method: 'delete',
            url: 'https://at.usermd.net/api/user/logout/:userId',
            data: {
                userid:''+userId,
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });

        localStorage.setItem('token','');
        localStorage.setItem('isLogged','false');
        navigate('/')
    }

   

    return (
        <div className="header">
            <Navbar>
                <Navbar.Brand href='/'>
                    <img src={'http://www.topwebvietnam.com/uploads/files/quang_cao_fanpage_top_web_cao_cap_2.png'}
                    width='120'
                    height='80' />
                </Navbar.Brand>
                <div>
                <a href="/">Menu</a>
                </div>
                <div style={{display:'flex' ,justifyContent:'space-evenly'}}>
                        {(logged==='false') &&
                            <div style={{}}>
                                <Button style={{position: 'absolute', left: 1200, bottom: 30, backgroundColor: 'orange', borderColor: 'orange'}} onClick={login} variant={props.outline}>Login</Button>
                                <Button style={{position: 'absolute', left: 1300, bottom: 30, backgroundColor: 'orange', borderColor: 'orange'}} onClick={Register} variant={props.outline}>Register</Button>
                            </div>

                        }
                        {(logged==='true') &&
                            <Nav>
                                <Nav style={{position: 'absolute', left: -130, top: 32, fontWeight: 'bold', fontSize: 30, color: 'purple'}}>{imie}</Nav>
                                <Button style={{position: 'absolute', left: 1300, bottom: 30, backgroundColor: 'orange', borderColor: 'orange'}} onClick={Logout} variant={props.outline}>Logout</Button>
                                <Button style={{position: 'absolute', left: 1230, bottom: 30, backgroundColor: 'orange', borderColor: 'orange'}} onClick={Add} variant={props.outline}>Add</Button>
                                </Nav>
                        }
                </div>

                    
            </Navbar>
        </div>
    )
}

export default Header
import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { useNavigate, useLocation} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import './Add.css';

const Add = () => {
    

    const [form, setForm] = useState({
        title: "",
        image: "",
        content: "",
    });

    const  onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(nextFormState);
    }

    const onSubmitAddMovie = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/movies',
            data: {
            ...form
            }
        }).then((response) => {
            console.log(response);
            e.target.reset();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
        <Header/>
            <div className='login'>
                
                <h2 className='login-heading'>Dodaj Nowy Film</h2>

                <form className='login__form' onSubmit={onSubmitAddMovie}>
                    <div className='login__form-top'>
                        <label htmlFor='email' className='login__form-label'>
                            Tytuł filmu:
                        </label>
                        <input
                            type='text'
                            className='login__form-input'
                            id='title'
                            name='title'
                            onChange={onUpdateField}

                        />

                        <label htmlFor='login' className='login__form-label'>
                            Obrazek:
                        </label>
                        <input
                            type='text'
                            className='login__form-input'
                            id='image'
                            name='image'
                            onChange={onUpdateField}

                        />

                        <label htmlFor='password' className='login__form-label'>
                            Opis:
                        </label>
                        <input
                            type='text'
                            id='content'
                            name='content'
                            className='login__form-input'
                            onChange={onUpdateField}
                        >
                        </input>

                        <div className='login__form-btns'>
                            <Link to='/'>
                                <button  style={{backgroundColor: 'orange', borderColor: 'orange'}} className='login__form-btn'>
                                    Wróc
                                </button>
                            </Link>
                            <button type='submit' className='login__form-btn' style={{backgroundColor: 'orange', borderColor: 'orange'}}>
                                Dodaj
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    );
};

export default Add;
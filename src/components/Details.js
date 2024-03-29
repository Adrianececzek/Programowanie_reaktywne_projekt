import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { useNavigate, useLocation} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import { isExpired } from 'react-jwt';



const Details = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;
    const URL = `https://at.usermd.net/api/movies/${id}`;
    const [movie, setMovie] = useState({});
    const logged = localStorage.getItem('isLogged');

    useEffect(()=>{
        if(isExpired(localStorage.getItem('token'))){
            localStorage.setItem('isLogged','false');
        }
    })

    useEffect(() => {
        axios.get(URL).then((response) => {
            const movie = response.data;
                setMovie(movie);
        });
    }, []);

    function Delete() {
        if(!isExpired(localStorage.getItem('token'))){
            axios({
                method: 'delete',
                url: 'https://at.usermd.net/api/movie/'+movie.id,
            }).then((response) => {
                console.log(response.data);
                setMovie(response.data)
            }).catch((error) => {
                console.log(error);
            });
        }else{
            alert.show('Sesja wygasła')
        }
        navigate('/');
    }

    return (
        <>
            <Header/>
        <div className='content' style={{ width: '100%', height: '100%'}}>
            <div className='movie-card' style={{color: 'black', fontWeight: 'bold'}}>
                <div className="movie-card__img">
                    <img className="movie-img" src={movie.image} alt={movie.title} />
                </div>
                <div className='movie-card__text'>

                    <h2>{movie.title}</h2>
                    <p>{movie.content}</p>

                </div>
                <button onClick={Delete} type="button" style={{backgroundColor: 'orange', borderColor: 'orange'}}>Delete</button>
            </div>
        </div>
            <Footer/>
        </>

    );
};

export default Details;
import React from 'react';
import { Link } from 'react-router-dom';
import './Middle.css';


const Middle = (props) => {
	const URL = `/details`
	const myData = {
		id: props.id
	}

	
	return (

		<div className='movie-card'>
			<div className="movie-card__img">
            <img className="movie-img" src={props.image} alt={props.title} />
        </div>
			<div className='movie-card__text'>
				<h2>{props.title}</h2>
				<Link to={URL} state={myData}>Details</Link>

			</div>
		</div>

	);
};

export default Middle;
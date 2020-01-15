import React from 'react';
import './../card.css';

const Card = props => {
	return (
		<div className='card'>
			<h1>{props.card.name}</h1>
			<h4>{`aka ${props.card.login}`}</h4>
			<a href={`https://github.com/${props.card.login}`}>Follow Me!</a>
			<img src={props.card.avatar_url} alt='my pic'></img>
			<button onClick={props.handleFol}></button>
		</div>
	);
};

export default Card;

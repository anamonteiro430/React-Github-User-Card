import React from 'react';

const Card = props => {
	return (
		<div>
			<h1>{props.card.name}</h1>
			<img src={props.card.avatar_url}></img>
		</div>
	);
};

export default Card;

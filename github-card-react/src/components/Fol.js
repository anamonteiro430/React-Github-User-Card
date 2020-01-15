import React from 'react';
import './../form.css';

const Fol = props => {
	return (
		<div>
			<h1>My Followers</h1>
			<img
				src='https://img.icons8.com/ios/50/000000/pet-commands-follow.png'
				class='follow'
			/>
			<div>
				{props.followers.map(follower => (
					<div>
						<h1>{follower.login}</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default Fol;

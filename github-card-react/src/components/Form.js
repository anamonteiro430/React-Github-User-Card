import React from 'react';

const Form = props => {
	return (
		<div>
			<input
				type='text'
				value={props.userName}
				onChange={props.handleChanges}
			/>
			<button onClick={props.fetchUsers}>Find User</button>
		</div>
	);
};

export default Form;

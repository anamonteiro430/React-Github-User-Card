import React from 'react';
import './../form.css';

const Form = props => {
	return (
		<div className='form'>
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

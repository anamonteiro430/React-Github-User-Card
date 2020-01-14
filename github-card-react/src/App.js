import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import axios from 'axios';

export default class App extends Component {
	//initial state
	state = {
		card: [],
		userName: 'anamonteiro430'
	};

	componentDidMount() {
		//fetch data
		axios
			.get(`https://api.github.com/users/anamonteiro430`)
			.then(res => {
				//set data to state
				this.setState({
					card: res.data
				});
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}
	/* 
	componentDidUpdate(prevProps, prevState) {
		console.log(prevProps, prevState, 'updating');
	} */

	handleChanges = e => {
		this.setState({
			userName: e.target.value
		});
	};

	fetchUsers = e => {
		e.preventDefault();
		axios
			.get(`https://api.github.com/users/${this.state.userName}`)
			.then(res => {
				//set data to state
				this.setState({
					card: res.data
				});
				console.log('yesss');
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		console.log('rendering');
		return (
			<div>
				<Form
					card={this.state.card}
					userName={this.state.userName}
					handleChanges={this.handleChanges}
					fetchUsers={this.fetchUsers}
				/>
				<Card card={this.state.card} />
			</div>
		);
	}
}

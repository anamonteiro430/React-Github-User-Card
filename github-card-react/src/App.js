import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Fol from './components/Fol';
import axios from 'axios';
import './App.css';

export default class App extends Component {
	//initial state
	state = {
		card: [],
		login: '',
		userName: '',
		followers: [],
		isEmptyState: true
	};

	componentDidMount() {
		//fetch data
		axios
			.get(`https://api.github.com/users/anamonteiro430`)
			.then(res => {
				//set data to state
				this.setState({
					card: res.data,
					login: res.data.login
				});
				console.log(res.data.login);
			})
			.then(() => {
				axios
					.get(`https://api.github.com/users/${this.state.login}/followers`)
					.then(res => {
						console.log(res.data, 'here');
						this.setState({ followers: res.data });
					});
				console.log(this.state.followers, 'followers');
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
				console.log('yesss', this.card);
			})
			.catch(err => {
				console.log(err);
			});
	};

	handleFol = e => {
		e.preventDefault();
		this.setState({
			...this.state,
			isEmptyState: false,
			isAddTripState: true
		});
	};

	onClick = event => {
		const value = event.target.value;
		this.props.onSubmit(value);
		console.log(value);
		/* axios
			.get(`https://api.github.com/users/${this.state.login}`)
			.then(res => {
				console.log(res.data);
				this.setState({
					card: res.data
				});
			})
			.catch(err => console.log(err, 'followers error')); */
	};

	render() {
		console.log('rendering');
		return (
			<div className='App'>
				<h1>GitHub Card</h1>
				<Form
					card={this.state.card}
					userName={this.state.userName}
					handleChanges={this.handleChanges}
					fetchUsers={this.fetchUsers}
				/>
				<Card card={this.state.card} followers={this.state.followers} />
				<div>
					{this.state.isEmptyState && (
						<Fol
							handleFol={this.handleFol}
							card={this.state.card}
							followers={this.state.followers}
							login={this.login}
							seeCard={this.seeCard}
						/>
					)}
				</div>
			</div>
		);
	}
}

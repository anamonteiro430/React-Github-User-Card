import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import axios from 'axios';

export default class App extends Component {
	//initial state
	state = {
		card: []
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

	render() {
		return (
			<div>
				<Form card={this.state.card} />
				<Card card={this.state.card} />
			</div>
		);
	}
}

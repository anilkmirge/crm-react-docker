import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config';
import './Password.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			username: '',
			password: '',
			passwordConfirm: '',
			valid: true,
			submit: false,
			redirectToReferrer: false,
		};
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/api/users`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				password: this.state.password,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({ ...this.state, redirectToReferrer: true });
			});
	};

	render() {
		const { redirectToReferrer } = this.state;
		if (redirectToReferrer) {
			return <Redirect to='/signin' />;
		}
		return (
			<div className='form'>
				<h1>Sign Up</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='First Name'
						id='firstname'
						name='firstname'
						value={this.state.firstname}
						onChange={this.handleChange}
					/>
					<input
						type='text'
						placeholder='Last Name'
						id='lastname'
						name='lastname'
						value={this.state.lastname}
						onChange={this.handleChange}
					/>
					<input
						type='text'
						placeholder='Email'
						id='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
					/>

					<input
						type='password'
						placeholder='Password'
						id='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button type='submit'>Sign Up</button>
				</form>
			</div>
		);
	}
}

export default SignUp;

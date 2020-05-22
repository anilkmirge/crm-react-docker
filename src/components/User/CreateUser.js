import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config.js';
import UserForm from './UserForm.js';

const UserCreate = (props) => {
	const initialUserState = {
		firstname: '',
		lastname: '',
		email: ''
	};
	const [user, setUser] = useState(initialUserState);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		event.persist();

		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/api/users`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				Authorization: `Bearer ${props.userToken}`,
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())

			.then((data) => {
				setCreatedId(data._id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/api/users`} />;
	}
	return (
		<>
			<UserForm
				user={user}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default UserCreate;

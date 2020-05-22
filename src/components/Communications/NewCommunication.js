import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config';
import Select from 'react-dropdown-select';

const NewCommunication = (props) => {
	const initialCommunicationState = {
		user: '',
		client: '',
		subject: '',
		body: '',
	};
	const [communication, setCommunication] = useState(initialCommunicationState);
	const [createdId, setCreatedId] = useState(null);
	const [client, setClient] = useState(null);
	const [usersList, setUsersList] = useState([]);
	const emailId = props.match.params.emailId;

	useEffect(() => {
		const url = `${APIURL}/api/clients/${emailId}`;
		fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setClient(data);
				setCommunication({
					user: '',
					client: `${data._id}`,
					subject: '',
					body: '',
				});
			})
			.catch((error) => console.error);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		const url = `${APIURL}/api/users`;
		fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setUsersList(data);
			})
			.catch((error) => console.error);
		// eslint-disable-next-line
	}, []);
	const handleUserChange = (value) => {
		setCommunication({
			user: value[0]._id,
			client: `${communication.client}`,
			subject: `${communication.subject}`,
			body: `${communication.body}`,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/api/communications`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${props.userToken}`,
			},
			body: JSON.stringify(communication),
		})
			.then((response) => response.json())
			.then((data) => {
				setCreatedId(data._id);
			})
			.catch((error) => console.error);
	};

	const handleChange = (event) => {
		event.persist();
		setCommunication({
			...communication,
			[event.target.name]: event.target.value,
		});
	};

	if (createdId) {
		return <Redirect to={`/api/clients/${emailId}`} />;
	}

	return (
		<>
			{!client ? (
				''
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						className='form-control'
						id='clientid'
						placeholder='Client ID'
						value={client._id}
						onChange={handleChange}
						name='client'
						required
					/>
					<Select
						options={usersList}
						value={[]}
						labelField='email'
						valueField='_id'
						name='user'
						onChange={(value) => handleUserChange(value)}
					/>
					<input
						type='text'
						className='form-control'
						id='subject'
						placeholder='Subject'
						value={communication.subject}
						onChange={handleChange}
						name='subject'
						required
					/>
					<input
						type='text'
						className='form-control'
						id='body'
						placeholder='Message Body'
						value={communication.body}
						onChange={handleChange}
						name='body'
						required
					/>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			)}
		</>
	);
};

export default NewCommunication;

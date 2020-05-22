import React, { useState, useEffect } from 'react';
import { APIURL } from '../../config';
import { Link, Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Transactions from '../Transactions/Transaction';
import Communications from '../Communications/Communications';
import Divider from '@material-ui/core/Divider';
import './Client.css';

const ClientDetails = (props) => {
	const [client, setClient] = useState(null);
	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
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
			.then(setClient)
			.catch(() => {
				// Update the state if there was an error
				// so we can give feedback to the user!
				setError(true);
			});
	}, [emailId, props.userToken]);

	const onDeleteClient = (event) => {
		const url = `${APIURL}/api/clients/${emailId}`;
		fetch(url, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((res) => {
				setDeleted(true);
			})
			.catch(console.error);
	};
	// If we deleted the client, redirect back to the client list
	if (deleted) {
		return <Redirect to='/api/clients' />;
	}

	// Check if there was an error
	// If there is give the user feedback!
	if (error) {
		return <div>Sorry, there was a problem getting the clients</div>;
	}

	// Check if we have our clients
	// Display "Loading..." if not

	return (
		<>
			{!client ? (
				''
			) : (
				<div className='col-md ml-3 mt-3 main'>
					<Card style={{ width: '20rem' }}>
						<Card.Body>
							<i className='far fa-address-card fa-3x'></i>
							{/* <Card.Title>Welcome, {client.firstname}</Card.Title> */}
							<Card.Text>
								<strong>First Name:</strong> {client.firstname}
							</Card.Text>
							<Card.Text>Last Name: {client.lastname}</Card.Text>
							<Card.Text>Email:{client.email}</Card.Text>
							<Card.Text>Address:{client.address}</Card.Text>
							<Card.Text>City:{client.city}</Card.Text>
							<Card.Text> State:{client.state}</Card.Text>
							<Card.Text>Zip:{client.zip}</Card.Text>
						</Card.Body>
					</Card>
				</div>
			)}

			<div className='mt-5 link'>
				<Link className='btn btn-info item' to={`/api/clients/${emailId}/edit`}>
					Edit
				</Link>

				<button className='btn btn-danger item' onClick={onDeleteClient}>
					Delete
				</button>
				<Link className='btn btn-info item' to={`/api/clients`}>
					Go Back
				</Link>
			</div>
			<div className='trans'>
				<h3 className='sub-heading'>
					<strong>
						Transactions <i className='far fa-credit-card'></i>
					</strong>
				</h3>
				<Divider />
				<Transactions emailId={emailId} userToken={props.userToken} />
			</div>
			<Link
				className='btn btn-info btn-md mt-5'
				to={`/api/clients/${emailId}/newtransaction`}>
				New Transaction
			</Link>
			<div className='communication'>
				<h3 className='sub-heading'>
					{' '}
					<strong>
						Communications <i className='fas fa-tty'></i>
					</strong>
				</h3>
				<Divider />
				<Communications emailId={emailId} userToken={props.userToken} />
			</div>
			<Link
				className='btn btn-info btn-md mt-5'
				to={`/api/clients/${emailId}/newcommunication`}>
				New Communication
			</Link>
		</>
	);
};

export default ClientDetails;

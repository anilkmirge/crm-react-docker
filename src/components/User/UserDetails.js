import React, { useState, useEffect } from 'react';
import { APIURL } from '../../config';
import { Link, Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import UserForm from './UserForm';
import UserCommunications from '../Communications/UserCommunications';
import UserTransactions from '../Transactions/UserTransaction';
import Divider from '@material-ui/core/Divider';
import './User.css';

const UserDetails = (props) => {
     const [user, setUser] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [error, setError] = useState(false);
    const emailId = props.match.params.emailId;

    useEffect(() => {
        const url = `${APIURL}/api/users/${emailId}`;
       fetch(url, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${props.userToken}`,
					},
				})
					.then((response) => response.json())
					.then(setUser)
					.catch(() => {
						// Update the state if there was an error
						// so we can give feedback to the user!
						setError(true);
					});
    }, []);

    const onDeleteUser = (event) => {
        const url = `${APIURL}/api/users/${emailId}`;
        fetch(url, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Authorization': `Bearer ${props.userToken}`
					},
				})
					.then((res) => {
						setDeleted(true);
					})
					.catch(console.error);
    };
    // If we deleted the client, redirect back to the user list
    if (deleted) {
        return <Redirect to='/api/users' />;
    }

    if (error) {
        return <div>Sorry, there was a problem getting the users</div>;
    }
   

    return (
			<>
				{!user ? (
					''
				) : (
					<div className='col-md ml-3 mt-3 main'>
				
					<Card style={{ width: '20rem' }} >
						<Card.Body>
							<i className="far fa-address-card fa-3x"></i>
						
							<Card.Text><strong>First Name:</strong> {user.firstname}</Card.Text>
							<Card.Text>Last Name: {user.lastname}</Card.Text>
							<Card.Text>Email:{user.email}</Card.Text>
							
						</Card.Body>
					</Card>
				</div>
					)}
						<div className='mt-5 link'>
							<Link
								className='btn btn-info item'
								to={`/api/users/${emailId}/edit`}>
								Edit
							</Link>

							<button
								onClick={onDeleteUser}
								className='btn btn-danger item'>
								Delete
							</button>
							<Link className='btn btn-info item' to={`/api/users`}>
								Go Back
							</Link>
						</div>
					

					<div className='trans'>
					<h3 className='sub-heading'>	<strong>Transactions <i className="far fa-credit-card"></i></strong></h3>
					<Divider />
					<UserTransactions emailId={emailId} userToken={props.userToken} />
				</div>
			
				<div className='communication'>
					<h3 className='sub-heading'><strong>Communications <i className="fas fa-tty"></i></strong></h3>
					<Divider />
					<UserCommunications emailId={emailId} userToken={props.userToken} />
				</div>
				
			</>
		);
};

export default UserDetails;

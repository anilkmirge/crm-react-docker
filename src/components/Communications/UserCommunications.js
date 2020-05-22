import React, { useState, useEffect } from 'react';
import { APIURL } from '../../config';
import Table from 'react-bootstrap/Table';

function UserCommunications(props) {
	const [communications, setCommunications] = useState([]);
	const [error, setError] = useState(false);
	const emailId = props.emailId;

	useEffect(() => {
		fetchMyApi();
		//eslint-disable-next-line
	}, []);

	async function fetchMyApi() {
		await fetch(`${APIURL}/api/users/${emailId}/communications`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setCommunications(data);
			})
			.catch(() => {
				setError(true);
			});
	}

	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Subject</th>
						<th>Body</th>
					</tr>
				</thead>
				{communications.map((communication) => (
					<tbody key={communication._id}>
						<tr>
							<td>{communication._id}</td>
							<td>{communication.subject}</td>
							<td>{communication.body}</td>
						</tr>
					</tbody>
				))}
			</Table>
		</div>
	);
}

export default UserCommunications;

import React, { useState, useEffect } from 'react';
import { APIURL } from '../../config';
import Table from 'react-bootstrap/Table';

function UserTransactions(props) {
	const [transactions, setTransactions] = useState([]);
	const [error, setError] = useState(false);
	const emailId = props.emailId;

	useEffect(() => {
		fetchMyApi();
		// eslint-disable-next-line
	}, []);

	async function fetchMyApi() {
		await fetch(`${APIURL}/api/users/${emailId}/transactions`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setTransactions(data);
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
						<th>PRODUCT</th>
						<th>PRICE</th>
					</tr>
				</thead>
				{transactions.map((trans) => (
					<tbody key={trans._id}>
						<tr>
							<td>{trans._id}</td>
							<td>{trans.product}</td>
							<td>{trans.price}</td>
						</tr>
					</tbody>
				))}
			</Table>
		</div>
	);
}

export default UserTransactions;

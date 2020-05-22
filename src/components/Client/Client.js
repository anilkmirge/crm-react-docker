import React, { useState, useEffect } from 'react';
import { APIURL } from '../../config';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
	{ id: 'firstname', label: 'First Name', minWidth: 170 },
	{ id: 'lastname', label: 'Last Name', minWidth: 100 },
	{ id: 'email', label: 'Email', minWidth: 100 },
	{ id: 'action', label: 'Action', minWidth: 100 },
];

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
});

function Clients(props) {
	const classes = useStyles();
	const [clients, setClients] = useState([]);
	const [error, setError] = useState(false);

	// Material UI
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	// Fetch API
	useEffect(() => {
		fetchMyApi();
        // eslint-disable-next-line
	}, []);

	async function fetchMyApi() {
		await fetch(`${APIURL}/api/clients`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setClients(data);
			})
			.catch(() => {
				setError(true);
			});
	}

	if (error) {
		return <div>Sorry, there was a problem getting the clients</div>;
	}

	if (clients.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{clients
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((client) => {
									return (
										<TableRow
											hover
											role='checkbox'
											tabIndex={-1}
											key={client._id}>
											{columns.map((column) => {
												const value = client[column.id];
												return (
													<TableCell key={column.id} align={column.align}>
														{column.format && typeof value === 'number' ? (
															column.format(value)
														) : column.id === 'action' ? (
															<Link
																to={`/api/clients/${client.email}`}
																className='btn btn-primary'>
																View Details
															</Link>
														) : (
															value
														)}
													</TableCell>
												);
											})}
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component='div'
					count={clients.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>

			<Link to='/api/clients/create' className='btn btn-primary mt-5'>
				Add Client
			</Link>
		</>
	);
}

export default Clients;

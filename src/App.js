import React, {useState} from 'react';

import './App.css';
import NavBar from './components/Navbar/Navbar';
import Clients from './components/Client/Client';

import Users from './components/User/User';

import UpdateUser from './components/User/UpdateUser';
import CreateUser from './components/User/CreateUser';
import SignUp from './components/Password/SignUp';
import SignIn from './components/Password/SignIn';
import Footer from './components/Footer/Footer';
import ClientDetails from './components/Client/ClientDetails';
import ClientEdit from './components/Client/ClientEdit';
import ClientCreate from './components/Client/ClientCreate';
import ContactForm from './components/Form/ContactForm';
import {Route, Switch} from 'react-router-dom';
import UserDetails from './components/User/UserDetails';
import Transactions from './components/Transactions/Transaction';
import Communications from './components/Communications/Communications';
import UserCommunications from './components/Communications/UserCommunications';
import UserTransactions from './components/Transactions/UserTransaction';
import Dashboard from './components/DashBoard/Dashboard';
import Features from './components/Home/Features';
import Home from './components/Home/Home';
import NewTransaction from './components/Transactions/NewTransaction';
import NewCommunication from './components/Communications/NewCommunication';

const App = () => {
    const [token, setToken] = useState('');

    async function handleSignOut() {
        await setToken(null);
    }
    return (
			<div>
				<NavBar userToken={token} handleSignOut={handleSignOut} />
				<Switch>
					<Route
						exact
						path='/api/users'
						render={(routerProps) => {
							return <Users userToken={token} />;
						}}
					/>
					<Route
						exact
						path='/api/clients'
						render={(routerProps) => {
							return <Clients userToken={token} />;
						}}
					/>
					<Route
						exact
						path='/api/users/create'
						render={(routerProps) => {
							return <CreateUser userToken={token} />;
						}}
					/>
					<Route exact path='/api/clients/create'>
						<ClientCreate userToken={token} />
					</Route>
					
					<Route
						exact
						path='/api/users/:emailId'
						render={(routerProps) => {
							return (
								<UserDetails match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route
						exact
						path='/api/users/:emailId/edit'
						render={(routerProps) => {
							return <UpdateUser match={routerProps.match} userToken={token} />;
						}}
					/>
					<Route
						exact
						path='/api/clients/:emailId'
						render={(routerProps) => {
							return (
								<ClientDetails match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route
						exact
						path='/api/clients/:emailId/newtransaction'
						render={(routerProps) => {
							return (
								<NewTransaction match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route
						exact
						path='/api/clients/:emailId/edit'
						render={(routerProps) => {
							return <ClientEdit match={routerProps.match} userToken={token} />;
						}}
					/>
					<Route
						exact
						path='/api/clients/:emailId/transactions'
						render={(routerProps) => {
							return (
								<Transactions match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route
						exact
						path='/api/clients/:emailId/newcommunication'
						render={(routerProps) => {
							return (
								<NewCommunication match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route
						exact
						path='/api/clients/:emailId/communications'
						render={(routerProps) => {
							return (
								<Communications match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route
						exact
						path='/api/users/:emailId/communications'
						render={(routerProps) => {
							return (
								<UserCommunications
									match={routerProps.match}
									userToken={token}
								/>
							);
						}}
					/>
					<Route
						exact
						path='/api/users/:emailId/transactions'
						render={(routerProps) => {
							return (
								<UserTransactions match={routerProps.match} userToken={token} />
							);
						}}
					/>
					<Route exact path='/signup' component={SignUp} />
					<Route
						exact
						path='/signin'
						render={(routerProps) => {
							return <SignIn setToken={setToken} userToken={token} />;
						}}
					/>
					<Route exact path='/contact' component={ContactForm} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/features' component={Features} />
					<Route exact path='/' component={Home} />
				</Switch>
				{/* <Footer /> */}
			</div>
		);
};

export default App;

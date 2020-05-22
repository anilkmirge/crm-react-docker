import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar({ userToken, handleSignOut }) {
	return (
		<>

<Navbar expand='lg'>
            <Navbar.Brand>Essential CRM</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Link to='/'><i className="fas fa-home"></i> Home</Link>
                    <Link to='/features'><i className="fas fa-atom"></i> Features</Link>
					<Link to='/contact'><i className="fas fa-file-contract"></i> Contact</Link>
					  {userToken ? <Link to='/api/clients' ><i className="fas fa-users"></i> Clients</Link> : ''}
              {userToken ? <Link to='/api/users'><i className="fas fa-users-cog"></i> Users</Link> : ''}
            {!userToken ? <Link to='/signin'><i className="fas fa-sign-in-alt"></i> SignIn</Link> : ''}
			 {userToken ? <Link to='/dashboard'><i className="fas fa-chart-line"></i> Dashboard</Link> : ''}
			 {userToken ? 
				<Link to='/' onClick={handleSignOut} >
				  <i className="fas fa-sign-out-alt"></i> SignOut  
				</Link> : ''}
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>


       
	
		
			
		</>
	);
}

export default NavBar;

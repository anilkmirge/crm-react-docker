import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBMask,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBView,
	MDBContainer,
	MDBFormInline,
	MDBAnimation,
} from 'mdbreact';
import '../../index.css';
import business from '../../Images/businessman-3105871_1920.jpg';
import { Link } from 'react-router-dom';
import Featues from './Features';
import Footer from '../Footer/Footer'
class Home extends React.Component {
	state = {
		collapsed: false,
	};

	handleTogglerClick = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		const overlay = (
			<div
				id='sidenav-overlay'
				style={{ backgroundColor: 'transparent' }}
				onClick={this.handleTogglerClick}
			/>
		);
		return (
			<>
				<div id='apppage'>
					<MDBView>
						<MDBMask className='d-flex justify-content-center align-items-center gradient'>
							<MDBContainer>
								<MDBRow>
									<MDBCol
										md='6'
										className='white-text text-center text-md-left mt-xl-5 mb-5'>
										<MDBAnimation type='fadeInLeft' delay='.3s'>
											<h1 className='h1-responsive font-weight-bold mt-sm-5'>
												Customer Realtionship Management
											</h1>
											<hr className='hr-light' />
											<h6 className='mb-4'>
												Improve your business process with essential CRM solution{' '}
											</h6>
										</MDBAnimation>
									</MDBCol>

									<MDBCol md='6' xl='5' className='mt-xl-5'>
										<MDBAnimation type='fadeInRight' delay='.3s'>
											<img src={business} alt='' className='img-fluid' />
										</MDBAnimation>
									</MDBCol>
								</MDBRow>
							</MDBContainer>
						</MDBMask>
					</MDBView>
					<Footer />
				</div>
			</>
		);
	}
}

export default Home;

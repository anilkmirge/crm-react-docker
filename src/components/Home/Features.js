import React from 'react'; //npm install --save mdbreact
import {
	MDBCarousel,
	MDBCarouselCaption,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
	MDBContainer,
} from 'mdbreact';
import profit from '../../Images/profit.jpg';
import business from '../../Images/businessman-3105871_1920.jpg';
import customer from '../../Images/customers.jpg';
import innovation from '../../Images/innovation-2057546_1920.jpg';
import marketing from '../../Images/marketing.jpg';
import collaboration from '../../Images/collaboration.jpg';
// import sales from '../../Images/sales.jpg';
import './Home.css';

const Features = () => {
	return (
		<MDBContainer>
			<h1 className='home-container'>Product Features</h1>
			{/* <p className='para-container'>
				Improve your business process with essential CRM
			</p> */}
			<MDBCarousel
				activeItem={1}
				length={4}
				showControls={true}
				showIndicators={true}
				className='z-depth-1'>
				<MDBCarouselInner>
					<MDBCarouselItem itemId='1'>
						<MDBView>
							<img className='d-block w-100' src={customer} alt='First slide' />
							<MDBMask overlay='black-light' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>
								Customer Relationship Management
							</h3>
							<p className='text-list'>
								Business is about the connections you build. Easy access to
								information makes building them easier.
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId='2'>
						<MDBView>
							<img
								className='d-block w-100'
								src={marketing}
								alt='Second slide'
							/>
							<MDBMask overlay='black-strong' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>Single Source of Truth</h3>
							<p className='text-list'>
								If client communications drive your revenue, tracking them in
								the same place just makes sense.
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId='3'>
						<MDBView>
							<img
								className='d-block w-100'
								src={collaboration}
								alt='Third slide'
							/>
							<MDBMask overlay='black-slight' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>Team Sync</h3>
							<p className='text-list'>
								Universal access to client information across your team means
								better support and a stronger customer experience.
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId='4'>
						<MDBView>
							<img className='d-block w-100' src={profit} alt='Third slide' />
							<MDBMask overlay='black-slight' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>Knowledge Driven Growth</h3>
							<p className='text-list'>
								The more you know, the more you grow. Customer interaction and
								sales tracking highlights areas of opportunity.
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
		</MDBContainer>
	);
};

export default Features;

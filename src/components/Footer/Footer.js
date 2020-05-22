import React from 'react';
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact';
import './Footer.css';

const Footer = () => {
    return (
        <div className= 'footer'>
        <MDBFooter color = 'blue' className=' '>
            <MDBContainer fluid className='text-center text-md-left'>
                <MDBRow>
                    <MDBCol md='6'>
                        <p className='text-copy'>
                            &copy; {new Date().getFullYear()} Copyright: Rory Ellis, TK Nguyen, Foolan Bhosale & Jyoti
                            Shinde
                        </p>
                    </MDBCol>
                    <MDBCol md='6'>
                        <p className='title-list'>
                            Our Team:
                            <a href='https://www.linkedin.com/in/roryellis/'>Rory Ellis</a>
                            <a href=' https://www.linkedin.com/in/tuongknguyen/'>TK Nguyen</a>
                            <a href='https://www.linkedin.com/in/foolan-bhosale'>Foolan Bhosale</a>
                            <a href='https://www.linkedin.com/in/jyoti-shinde/'>Jyoti Shinde</a>
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
        </div>
    );
};

export default Footer;

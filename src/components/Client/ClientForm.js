import React from 'react';
import {Link} from 'react-router-dom';

const ClientForm = ({client, handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        value={client.email}
                        onChange={handleChange}
                        name='email'
                        required
                    />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor='email'>First Name</label>
                    <input
                        className='form-control'
                        id='firstname'
                        placeholder='First Name'
                        value={client.firstname}
                        onChange={handleChange}
                        name='firstname'
                        required
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor='Lastname'>Last Name</label>
                    <input
                        className='form-control'
                        id='lastname'
                        placeholder='Last Name'
                        value={client.lastname}
                        onChange={handleChange}
                        name='lastname'
                        required
                    />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor='inputAddress'>Address</label>
                <input
                    className='form-control'
                    id='address'
                    placeholder='1234 Main St'
                    value={client.address}
                    onChange={handleChange}
                    name='address'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='inputAddress2'>Address 2</label>
                <input
                    className='form-control'
                    id='inputAddress2'
                    placeholder='Apartment, studio, or floor'
                    onChange={handleChange}
                    name='inputAddress2'
                />
            </div>
            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label htmlFor='inputCity'>City</label>
                    <input className='form-control' id='city' value={client.city} onChange={handleChange} name='city' />
                </div>
                <div className='form-group col-md-4'>
                    <label htmlFor='inputState'>State</label>
                    <input
                        className='form-control'
                        id='state'
                        value={client.state}
                        onChange={handleChange}
                        name='state'
                    />
                </div>
                <div className='form-group col-md-2'>
                    <label htmlFor='inputZip'>Zip</label>
                    <input className='form-control' id='zip' value={client.zip} onChange={handleChange} name='zip' />
                </div>
            </div>

            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
            {!client.email ? (
                <Link to={`/api/clients`} className='btn btn-link'>
                    Cancel
                </Link>
            ) : (
                <Link to={`/api/clients/${client.email}`} className='btn btn-link'>
                    Cancel
                </Link>
            )}
        </form>
    );
};

export default ClientForm;

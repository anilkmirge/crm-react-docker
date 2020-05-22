import React, {useState, useEffect} from 'react';
import {APIURL} from '../../config.js';
import {Redirect} from 'react-router-dom';
import UserForm from './UserForm.js';

const UserEdit = (props) => {
    const [user, setUser] = useState({});
    const [createdId, setCreatedId] = useState(null);
    const [error, setError] = useState(false);
    const emailId = props.match.params.emailId;
    useEffect(() => {
        const url = `${APIURL}/api/users/${emailId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${props.userToken}`
            }
        })
            .then((response) => response.json())
            .then(setUser)
            .catch(() => {
                setError(true);
            });
        //eslint-disable-next-line
    }, []);

    const handleChange = (event) => {
        event.persist();
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `${APIURL}/api/users/${emailId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.userToken}`
            },
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((data) => {
                setCreatedId(data._id);
            })
            .catch(() => {
                setError(true);
            });
    };

    if (createdId) {
        return <Redirect to={`/api/users/${emailId}`} />;
    }
    return (
        <div>
            <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default UserEdit;

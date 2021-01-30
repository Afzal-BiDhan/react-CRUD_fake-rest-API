import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3008/users/${id}`);
        setUser(result.data);
    };
    useEffect(() => {
        loadUser()
    }, []);
    return (
        <div className="container user">
            <Link to="/" className="btn btn-primary user_link">back to home</Link>
            <h1 className="display-5 mt-5">User Id: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">Username: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone: {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
            </ul>
        </div>
    );
};

export default User;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    console.log(id)

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { name, email, phone, website, username } = user;

    const onInputChane = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3008/users/${id}`, user);
        history.push("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3008/users/${id}`);
        setUser(result.data);
    };

    useEffect(() => {
        loadUser()
    }, []);



    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={(e) => onSubmit(e)} action="">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="name"
                            value={name}
                            onChange={(e) => onInputChane(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={(e) => onInputChane(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter E-mail Address"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChane(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={(e) => onInputChane(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                            onChange={(e) => onInputChane(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>

        </div>
    );
};

export default EditUser;
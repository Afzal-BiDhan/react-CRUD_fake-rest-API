import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = () => {

    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const {name, email, phone, website, username} = user;

    const onInputChane = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3008/users", user);
        history.push("/")
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={(e) => onSubmit(e)} action="">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your name"
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
                    <button type="submit" className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>

        </div>
    );
};

export default AddUser;
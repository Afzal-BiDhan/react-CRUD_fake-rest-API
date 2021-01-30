import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3008/users");
        setUsers(result.data.reverse());
    };

    const deleteUser = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:3008/users${id}`)
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home</h1>

                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/users/${user.id}`} className="btn btn-primary mr-2">View</Link>
                                        <Link to={`/users/edit/${user.id}`} className="btn btn-outline-primary mr-2">Edit</Link>
                                        <Link onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
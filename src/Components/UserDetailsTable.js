
import React from 'react';

const UserDetailsTable = ({ userList, handleEdit, handleDelete }) => {
    return (
        <div className="mt-40">
            <div className="userTable">
                <h2>User List</h2>
                <div className="tableWrapper">
                    <table className="my_table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className="flex">
                                            <button onClick={() => handleDelete(user)} className="mr-5">Delete</button>
                                            <button onClick={() => handleEdit(user)}>Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default UserDetailsTable;

import React from 'react';
import User from '../types/user';

const user = {
    _id: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    contactNumber: "",
    isAdmin: false,
    timeIn: ""
};

const UserContext = React.createContext<User | null>(user);

export default UserContext;
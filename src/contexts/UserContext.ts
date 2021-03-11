import React from "react";
import User from "../types/User";

const user = {
  _id: "",
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  contactNumber: "",
  isAdmin: false,
  timeIn: "",
};

const UserContext = React.createContext<User>(user);

export default UserContext;

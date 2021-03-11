type User = {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  contactNumber: string;
  isAdmin: boolean;
  timeIn: string;
  exp?: number;
  iat?: number;
};

export default User;

import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import validate from "../services/validationService";
import Toast from "../components/Toast";
import customerService from "../services/customerService";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderRadius: 0,
      marginBottom: 10,
    },
  },
  btn: {
    borderRadius: 0,
    marginBottom: 10,
  },
});

const AddCustomerForm: React.FC<RouteComponentProps> = ({ ...props }) => {
  const styles = useStyles();
  const [customer, setCustomer] = useState({
    companyName: "",
    email: "",
    address: "",
    contactNumber: "",
    tin: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let { error } = validate.customer(customer);
    if (error) return <Toast error={true} content={error.toString()} />;

    try {
      const { data } = await customerService.sendData(customer);

      localStorage.setItem(`${data._id}`, JSON.stringify(data));
      props.history.push(`/customer/${data._id}`);
    } catch (ex) {
      return <Toast error={true} content={ex.data.toString()} />;
    }
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        className={styles.root}
        variant="outlined"
        name="companyName"
        label="Company Name"
        fullWidth
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setCustomer({ ...customer, companyName: e.currentTarget.value });
        }}
      />
      <TextField
        className={styles.root}
        variant="outlined"
        name="email"
        label="Email"
        fullWidth
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setCustomer({ ...customer, email: e.currentTarget.value });
        }}
      />
      <TextField
        className={styles.root}
        variant="outlined"
        name="address"
        label="Address"
        fullWidth
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setCustomer({ ...customer, address: e.currentTarget.value });
        }}
      />
      <TextField
        className={styles.root}
        variant="outlined"
        name="contactNumber"
        label="Contact Number"
        fullWidth
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setCustomer({ ...customer, contactNumber: e.currentTarget.value });
        }}
      />
      <TextField
        className={styles.root}
        variant="outlined"
        name="tin"
        label="TIN Number"
        fullWidth
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setCustomer({ ...customer, tin: e.currentTarget.value });
        }}
      />
      <Button
        className={styles.btn}
        type="submit"
        color="primary"
        variant="contained"
        size="large"
      >
        Add Customer
      </Button>
    </form>
  );
};

export default AddCustomerForm;

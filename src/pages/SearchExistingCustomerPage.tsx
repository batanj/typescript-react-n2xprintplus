import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Tooltip from "@material-ui/core/Tooltip";
import makeStyles from "@material-ui/styles/makeStyles";
import customerService from "../services/customerService";
import Toast from "../components/Toast";
import PageNavigation from "../components/PageNavigation";
import Customer from "../types/Customer";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: "100%",
    borderRadius: 0,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 20,
  },
  iconButton: {
    padding: 10,
  },
});

const SearchExistingCustomerPage: React.FC<RouteComponentProps> = ({
  ...props
}) => {
  const styles = useStyles();
  const [customers, setCustomers] = useState<Customer[]>([]);

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    if (e.target.value.length <= 0) return;

    customerService.getAll(e.target.value).then(
      (result) => setCustomers(result.data),
      (error) => <Toast content={error.data.toString()} error={true} />
    );
  };

  return (
    <>
      <PageNavigation {...props} />
      <Container
        maxWidth="sm"
        component="div"
        style={{ textAlign: "center", paddingTop: 70 }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: 700, marginTop: 20, paddingBottom: 10 }}
        >
          Search Existing Customer
        </Typography>
        <Tooltip title="Use lowercase characters only.">
          <Paper
            onSubmit={(e) => e.preventDefault()}
            component="form"
            className={styles.root}
          >
            <InputBase
              className={styles.input}
              placeholder="Customer Name"
              inputProps={{
                "aria-label": "customer name",
                style: { borderRadius: 0 },
              }}
              onChange={handleChange}
            />
          </Paper>
        </Tooltip>
        <TableContainer style={{ marginTop: 20 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>
                  Company Name
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Contact Number
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  E-mail Address
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers ? (
                customers.map((customer) => (
                  <TableRow
                    key={customer._id}
                    onClick={() => {
                      customerService.save(customer);
                      console.log(customer);
                      setTimeout(
                        () => props.history.push(`/customer/${customer._id}`),
                        250
                      );
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell>{customer.companyName}</TableCell>
                    <TableCell>{customer.contactNumber}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3}>0 results found!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default SearchExistingCustomerPage;

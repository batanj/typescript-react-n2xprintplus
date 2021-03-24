import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PageNavigation from "../components/PageNavigation";
import AddCustomerForm from "../components/AddCustomerForm";

const useStyles = makeStyles({
  container: { textAlign: "center", marginTop: 90 },
  typography: { fontWeight: 700, marginTop: 20, paddingBottom: 10 },
});

const AddCustomerPage: React.FC<RouteComponentProps> = ({ ...props }) => {
  const styles = useStyles();

  return (
    <>
      <PageNavigation {...props} />
      <Container className={styles.container} maxWidth="sm" component="div">
        <Typography variant="h5" className={styles.typography}>
          Customer Information
        </Typography>
        <AddCustomerForm {...props} />
      </Container>
    </>
  );
};

export default AddCustomerPage;

import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import BusinessSharp from "@material-ui/icons/BusinessSharp";
import ContactPhoneSharp from "@material-ui/icons/ContactPhoneSharp";
import EmailSharp from "@material-ui/icons/EmailSharp";
import LocationOnSharp from "@material-ui/icons/LocationOnSharp";
import CardMembershipSharp from "@material-ui/icons/CardMembershipSharp";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PageNavigation from "../components/PageNavigation";
import customerService from "../services/customerService";

const useStyles = makeStyles({
  btn: { borderRadius: 0 },
  icon: { color: "Grey", fontSize: 22 },
  text: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSmooth: "always",
    color: "#6f6f6f",
  },
  grid: { padding: 10 },
});

interface MatchParams {
  id: string;
}

const CustomerPage: React.FC<RouteComponentProps<MatchParams>> = ({
  ...props
}) => {
  const customer = customerService.get(props.match.params.id);
  const styles = useStyles();

  return (
    <>
      <PageNavigation {...props} />
      <Container
        maxWidth="md"
        style={{ marginTop: 70, padding: 20, textAlign: "center" }}
      >
        <Box border={1} borderColor="LightGray" boxShadow={1}>
          <Grid container direction="column">
            <Grid container item className={styles.grid}>
              <BusinessSharp className={styles.icon} />
              &nbsp;
              <Typography className={styles.text}>
                {customer.companyName}
              </Typography>
            </Grid>
            <Grid container item className={styles.grid}>
              <EmailSharp className={styles.icon} />
              &nbsp;
              <Typography className={styles.text}>{customer.email}</Typography>
            </Grid>
            <Grid container item className={styles.grid}>
              <ContactPhoneSharp className={styles.icon} />
              &nbsp;
              <Typography className={styles.text}>
                {customer.contactNumber}
              </Typography>
            </Grid>
            <Grid container item className={styles.grid}>
              <LocationOnSharp className={styles.icon} />
              &nbsp;
              <Typography className={styles.text}>
                {customer.address}
              </Typography>
            </Grid>
            <Grid container item className={styles.grid}>
              <CardMembershipSharp className={styles.icon} />
              &nbsp;
              <Typography className={styles.text}>{customer.tin}</Typography>
            </Grid>
          </Grid>
        </Box>
        <div style={{ marginTop: 20 }}>
          <Button
            variant="contained"
            color="primary"
            className={styles.btn}
            onClick={() =>
              props.history.push(`/customer/${customer._id}/create-new-job`)
            }
          >
            Create New Job Order
          </Button>
          &nbsp;
          <Button variant="contained" className={styles.btn}>
            View Previous Jobs
          </Button>
        </div>
      </Container>
    </>
  );
};

export default CustomerPage;

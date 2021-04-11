import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FaceSharp from "@material-ui/icons/FaceSharp";
import Typography from "@material-ui/core/Typography";
import EmailSharp from "@material-ui/icons/EmailSharp";
import PhoneAndroidSharp from "@material-ui/icons/PhoneAndroidSharp";
import Button from "@material-ui/core/Button";
import PageNavigation from "../components/PageNavigation";
import PersonAddSharp from "@material-ui/icons/PersonAddSharp";
import SearchSharp from "@material-ui/icons/SearchSharp";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UserContext from "../contexts/UserContext";

const useStyles = makeStyles({
  root: {
    "& > *": {},
  },
  container: {
    marginTop: 60,
    paddingTop: 40,
    textAlign: "center",
  },
  icon: {
    fontSize: 20,
    padding: 2,
  },
  typography: { paddingLeft: 20, fontSize: 14 },
  btn: { borderRadius: 0, marginBottom: 10, border: "1px solid lightgray" },
});

const HomePage: React.FC<RouteComponentProps> = ({ ...props }) => {
  const styles = useStyles();
  const user = useContext(UserContext);
  const { history } = props;

  return (
    <>
      <PageNavigation {...props} />
      <Container className={styles.container} maxWidth="xl">
        <Grid container direction="row">
          <Grid container item sm={4} style={{ paddingRight: 20 }}>
            <Typography
              variant="h5"
              style={{ fontWeight: 700, marginTop: 0, paddingBottom: 10 }}
            >
              Completed Jobs
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={4}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              border={1}
              borderColor="LightGray"
              boxShadow={1}
              padding={1.25}
            >
              <Grid container direction="column">
                <Grid container item>
                  <FaceSharp className={styles.icon} />
                  <Typography className={styles.typography}>
                    {user.firstName} {user.lastName}
                  </Typography>
                </Grid>
                <Grid container item>
                  <EmailSharp className={styles.icon} />
                  <Typography className={styles.typography}>
                    {user.email}
                  </Typography>
                </Grid>
                <Grid container item>
                  <PhoneAndroidSharp className={styles.icon} />
                  <Typography className={styles.typography}>
                    {user.contactNumber}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <div style={{ marginTop: 20 }}>
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 0 }}
                onClick={() => history.push("/")}
              >
                Edit Profile
              </Button>
              &nbsp;
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 0 }}
              >
                Change Password
              </Button>
            </div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                startIcon={<PersonAddSharp />}
                variant="contained"
                className={styles.btn}
                onClick={() => history.push("/customers/add")}
              >
                Add New Customer
              </Button>
              <Button
                startIcon={<SearchSharp />}
                variant="contained"
                className={styles.btn}
                onClick={() => history.push("/customers/search")}
              >
                Search Existing Customer
              </Button>
            </div>
          </Grid>
          <Grid container item sm={4} style={{ paddingLeft: 20 }}>
            <Typography
              variant="h5"
              style={{ fontWeight: 700, marginTop: 0, paddingBottom: 10 }}
            >
              Pending Jobs
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

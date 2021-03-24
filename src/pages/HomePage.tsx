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
});

const HomePage: React.FC<RouteComponentProps> = ({ ...props }) => {
  const styles = useStyles();
  const user = useContext(UserContext);

  return (
    <>
      <PageNavigation {...props} />
      <Container className={styles.container} maxWidth="sm">
        <Box border={1} borderColor="LightGray" boxShadow={1} padding={1.25}>
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
      </Container>
    </>
  );
};

export default HomePage;

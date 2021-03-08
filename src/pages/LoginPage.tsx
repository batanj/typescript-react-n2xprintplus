import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Logo from "../logo.svg";
import LoginForm from "../components/LoginForm";

export interface LoginPageProps {}

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 10,
    textAlign: "center",
  },
  h4: { fontWeight: 500, marginTop: 0, padding: 10 },
});

const LoginPage: React.FC<LoginPageProps> = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="div">
      <Box mt={1.25} mb={1.25}>
        <img src={Logo} alt="N2X Print Plus logo" width={550} />
      </Box>
      <Card className={classes.root}>
        <Typography variant="h4" className={classes.h4}>
          EMPLOYEE LOGIN
        </Typography>
        <LoginForm />
      </Card>
    </Container>
  );
};

export default LoginPage;

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface LoginFormProps {}

const useStyles = makeStyles({
  root: {
    "& > *": { borderRadius: 0 },
  },
});

const LoginForm: React.FC<LoginFormProps> = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form autoComplete="off">
      <TextField
        className={classes.root}
        variant="outlined"
        name="email"
        label="Email"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        className={classes.root}
        style={{ marginTop: 10 }}
        variant="outlined"
        name="password"
        label="Password"
        type="password"
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button
        style={{ borderRadius: 0, marginTop: 10 }}
        type="submit"
        color="primary"
        variant="contained"
        size="large"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

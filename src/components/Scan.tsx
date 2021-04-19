import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import CalculateAddCompleteButtons from "./CalculateAddCompleteButtons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { string } from "joi";

const useStyles = makeStyles({
  root: {
    width: 200,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0,
      },
    },
  },
  button: {
    borderRadius: 0,
  },
  btn: { marginTop: 40, textAlign: "left" },
});

export interface ScanProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const prices: { [type: string]: number }  = {
  regular: 5,
  discount: 5
}

const Scan: React.FC<ScanProps> = ({ handleSubmit, handleComplete }) => {
  const styles = useStyles();
  const [details, setDetails] = useState({
    copies: 0,
    emailFee: 0,
    total: 0
  });

  const calculateOrder = () => {
    setDetails({...details, total: 0});

    if (details.copies <= 0)
    return toast.error("Copies must be greater than '0'", {
      autoClose: 3000,
    });

    let cost = 0;
    const pricing = prices.regular;

    cost = details.copies * pricing;

    if (details.emailFee > 0) cost += parseFloat(details.emailFee.toString());

    setDetails({ ...details, total: cost });
  }

  const addOrder = () => {}

  return (
    <Container>
      <Grid container>
        <TextField
          type="number"
          variant="outlined"
          label="# of Copies"
          inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
          margin="dense"
          className={styles.root}
          InputLabelProps={{ style: { fontSize: 14 } }}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
            setDetails({
              ...details,
              copies: e.target.value as number,
            });
          }}
        />
      </Grid>
      <Grid container>
        <FormControlLabel
          control={<Checkbox name="emailFee" />}
          label="Additional Email Fee"
        />
      </Grid>
      <Grid container>
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", paddingTop: 20 }}
        >
          Total Amount: {details.total}
        </Typography>
      </Grid>
      <Grid container>
        <Grid item sm={12} className={styles.btn}>
          <CalculateAddCompleteButtons calculateOrder={calculateOrder} addOrder={addOrder} completeOrder={handleSubmit} />
        </Grid>
      </Grid>
      <ToastContainer position="top-center" style={{ width: 550 }} />
    </Container>
  );
};

export default Scan;

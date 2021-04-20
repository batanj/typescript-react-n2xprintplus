import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import CalculateAddCompleteButtons from "./CalculateAddCompleteButtons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  root: {
    width: 200,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0,
      },
    },
  },
  select: {
    width: 150,
    fontSize: 14,
  },
  padding: {
    paddingTop: 20,
  },
  button: {
    borderRadius: 0,
  },
  btn: { marginTop: 40, textAlign: "left" },
});

export interface LaminationProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const prices: { [type: string]: number }  = {
  ls_Long: 45,
  ls_Short: 35,
  ls_A4: 40,
  ls_3R: 15,
  ls_4R: 20,
  ls_5R: 25
}

const Lamination: React.FC<LaminationProps> = ({
  handleSubmit,
  handleComplete,
}) => {
  const styles = useStyles();
  const [laminateSize, setLaminateSize] = useState("ls_Long");
  const [details, setDetails] = useState({
    copies: 0,
    total: 0
  });

  const calculateOrder = () => {
    setDetails({...details, total: 0});

    if (details.copies <= 0)
    return toast.error("Copies must be greater than '0'", {
      autoClose: 3000,
    });

    let cost = 0;

    cost = details.copies * prices[laminateSize];

    setDetails({ ...details, total: cost });
  }
  
  const addOrder = () => {}

  const completeOrder = () => {}

  return (
    <Container>
      <Grid container className={styles.padding}>
        <FormControl className={styles.select}>
          <InputLabel id="laminateSize">Size</InputLabel>
          <Select
            className={styles.select}
            labelId="laminateSize"
            id="laminateSize"
            value={laminateSize}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setLaminateSize(e.target.value as string);
            }}
          >
            <MenuItem value="ls_Long" className={styles.select}>
              Long
            </MenuItem>
            <MenuItem value="ls_Short" className={styles.select}>
              Short
            </MenuItem>
            <MenuItem value="ls_A4" className={styles.select}>
              A4
            </MenuItem>
            <MenuItem value="ls_3R" className={styles.select}>
              3R
            </MenuItem>
            <MenuItem value="ls_4R" className={styles.select}>
              4R
            </MenuItem>
            <MenuItem value="ls_5R" className={styles.select}>
              5R
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container>
        <TextField
          className={styles.root}
          type="number"
          variant="outlined"
          label="# of Copies"
          margin="dense"
          inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
            setDetails({...details, copies: e.target.value as number});
            console.log(details);
          }}
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
          <CalculateAddCompleteButtons calculateOrder={calculateOrder} addOrder={addOrder} completeOrder={completeOrder} />
        </Grid>
      </Grid>
      <ToastContainer position="top-center" style={{ width: 550 }} />
    </Container>
  );
};

export default Lamination;

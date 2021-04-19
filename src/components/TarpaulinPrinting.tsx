import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CloseSharp from "@material-ui/icons/CloseSharp";
import makeStyles from "@material-ui/styles/makeStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CalculateAddCompleteButtons from "./CalculateAddCompleteButtons";

const useStyles = makeStyles({
  root: {
    width: 140,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0,
      },
    },
  },
  button: {
    borderRadius: 0,
  },
  label: {
    fontSize: 21,
    fontWeight: "bold",
    color: "black",
  },
  btn: { marginTop: 40, textAlign: "left" },
  select: { fontSize: 14 },
});

export interface TarpaulinPrintingProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const prices: { [type: string]: { [unit: string]: number } } = {
  regular: {
    "Regular 10 oz": 13,
    "Blackout 15 oz": 25,
    Panaflex: 65,
    "Photo Paper": 50,
    Sticker: 50,
  },
  discount: {
    "Regular 10 oz": 10,
    "Blackout 15 oz": 22,
    Panaflex: 60,
    "Photo Paper": 40,
    Sticker: 50,
  },
};

const TarpaulinPrinting: React.FC<TarpaulinPrintingProps> = ({
  handleSubmit,
  handleComplete,
}) => {
  const styles = useStyles();
  const [details, setDetails] = useState({
    tarpaulinType: "Regular 10 oz",
    width: 0,
    height: 0,
    copies: 0,
    layoutFee: 0,
    deliveryFee: 0,
    discount: "No",
    total: 0,
  });

  const calculateOrder = () => {
    setDetails({ ...details, total: 0 });

    if (details.width <= 0)
      return toast.error("Width must be greater than '0'", {
        autoClose: 3000,
      });
    if (details.height <= 0)
      return toast.error("Height must be greater than '0'", {
        autoClose: 3000,
      });
    if (details.copies <= 0)
      return toast.error("Copies must be greater than '0'", {
        autoClose: 3000,
      });

    let cost = 0;
    const pricing =
      details.discount === "No" ? prices.regular : prices.discount;

    cost =
      details.width *
      details.height *
      details.copies *
      pricing[details.tarpaulinType];

    if (details.layoutFee > 0) cost += parseFloat(details.layoutFee.toString());
    if (details.deliveryFee > 0)
      cost += parseFloat(details.deliveryFee.toString());

    setDetails({ ...details, total: cost });
  };

  const addOrder = () => {}

  return (
    <Container>
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        Type
      </Typography>
      <Grid container>
        <FormControl className={styles.root}>
          <Select
            className={styles.select}
            labelId="tarpaulinType"
            id="tarpaulinType"
            value={details.tarpaulinType}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setDetails({
                ...details,
                tarpaulinType: e.target.value as string,
              });
            }}
          >
            <MenuItem value="Regular 10 oz" className={styles.select}>
              Regular 10 oz
            </MenuItem>
            <MenuItem value="Blackout 15 oz" className={styles.select}>
              Blackout 15 oz
            </MenuItem>
            <MenuItem value="Panaflex" className={styles.select}>
              Panaflex
            </MenuItem>
            <MenuItem value="Photo Paper" className={styles.select}>
              Photo Paper
            </MenuItem>
            <MenuItem value="Sticker" className={styles.select}>
              Sticker
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Typography
        variant="body1"
        style={{ fontWeight: "bold", paddingTop: 20 }}
      >
        Size in Feet
      </Typography>
      <Grid container>
        <Grid item sm={2} style={{ textAlign: "left" }}>
          <TextField
            type="number"
            variant="outlined"
            label="Width"
            inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            margin="dense"
            className={styles.root}
            style={{ width: 80 }}
            value={details.width}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setDetails({ ...details, width: e.target.value as number });
            }}
          />
        </Grid>
        <Grid
          item
          sm={1}
          style={{
            paddingLeft: 5,
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            textAlign: "center",
          }}
        >
          <CloseSharp />
        </Grid>
        <Grid item sm={2} style={{ textAlign: "center" }}>
          <TextField
            type="number"
            variant="outlined"
            label="Height"
            inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            margin="dense"
            className={styles.root}
            style={{ width: 100 }}
            value={details.height}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setDetails({ ...details, height: e.target.value as number });
            }}
          />
        </Grid>
        <Grid item sm={6} style={{ textAlign: "center" }}>
          <TextField
            type="number"
            variant="outlined"
            label="# of Copies"
            inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            margin="dense"
            className={styles.root}
            style={{ width: 120 }}
            value={details.copies}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setDetails({ ...details, copies: e.target.value as number });
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <TextField
          type="number"
          variant="outlined"
          label="Layout Fee"
          inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          margin="dense"
          className={styles.root}
          style={{ width: 200 }}
          value={details.layoutFee}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
            setDetails({ ...details, layoutFee: e.target.value as number });
          }}
        />
      </Grid>
      <Grid container>
        <TextField
          type="number"
          variant="outlined"
          label="Delivery Fee"
          inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          margin="dense"
          className={styles.root}
          style={{ width: 200 }}
          value={details.deliveryFee}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
            setDetails({ ...details, deliveryFee: e.target.value as number });
          }}
        />
      </Grid>
      <Grid container style={{ marginTop: 10 }}>
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", marginRight: 10 }}
        >
          Discounted:
        </Typography>
        <FormControl className={styles.root}>
          <Select
            className={styles.select}
            labelId="discounted"
            id="discounted"
            value={details.discount}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setDetails({ ...details, discount: e.target.value as string });
            }}
          >
            <MenuItem value="No" className={styles.select}>
              No
            </MenuItem>
            <MenuItem value="Yes" className={styles.select}>
              Yes
            </MenuItem>
          </Select>
        </FormControl>
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

export default TarpaulinPrinting;

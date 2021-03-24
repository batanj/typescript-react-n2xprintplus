import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CloseSharp from "@material-ui/icons/CloseSharp";
import makeStyles from "@material-ui/styles/makeStyles";

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
  label: {
    fontSize: 14,
  },
});

export interface TarpaulinPrintingProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TarpaulinPrinting: React.FC<TarpaulinPrintingProps> = ({
  handleSubmit,
  handleComplete,
}) => {
  const styles = useStyles();
  const [selectedType, setSelectedType] = useState("Regular 10 oz");

  return (
    <Container>
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        Type
      </Typography>
      <RadioGroup
        aria-label="tarpaulinType"
        name="tarpaulinType"
        value={selectedType}
        onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
          setSelectedType(e.target.value as string);
        }}
      >
        <Grid container>
          <Grid item sm={4}>
            <FormControlLabel
              value="Regular 10 oz"
              control={<Radio />}
              label="Regular 10 oz"
              classes={{ label: styles.label }}
            />
          </Grid>
          <Grid item sm={4}>
            <FormControlLabel
              value="Blackout 15 oz"
              control={<Radio />}
              label="Blackout 15 oz"
              classes={{ label: styles.label }}
            />
          </Grid>
          <Grid item sm={4}>
            <FormControlLabel
              value="Panaflex"
              control={<Radio />}
              label="Panaflex"
              classes={{ label: styles.label }}
            />
          </Grid>
        </Grid>
      </RadioGroup>
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
        />
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="outlined"
          label="Discount Coupon"
          margin="dense"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          className={styles.root}
          style={{ width: 200 }}
        />
      </Grid>
      <Grid container>
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", paddingTop: 20 }}
        >
          Total Amount: 0
        </Typography>
      </Grid>
      <Grid container>
        <Grid item sm={12} style={{ marginTop: 40, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={styles.button}
          >
            Add Job
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            variant="contained"
            color="secondary"
            onClick={handleComplete}
            className={styles.button}
          >
            Complete Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TarpaulinPrinting;

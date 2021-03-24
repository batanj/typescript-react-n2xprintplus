import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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
});

export interface LaminationProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Lamination: React.FC<LaminationProps> = ({
  handleSubmit,
  handleComplete,
}) => {
  const styles = useStyles();
  const [laminateSize, setLaminateSize] = useState("Regular ID");

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
            <MenuItem value="Regular ID" className={styles.select}>
              Regular ID
            </MenuItem>
            <MenuItem value="3R" className={styles.select}>
              3R
            </MenuItem>
            <MenuItem value="4R" className={styles.select}>
              4R
            </MenuItem>
            <MenuItem value="5R" className={styles.select}>
              5R
            </MenuItem>
            <MenuItem value="Short" className={styles.select}>
              Short
            </MenuItem>
            <MenuItem value="Long" className={styles.select}>
              Long
            </MenuItem>
            <MenuItem value="A4" className={styles.select}>
              A4
            </MenuItem>
            <MenuItem value="A3" className={styles.select}>
              A3
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

export default Lamination;

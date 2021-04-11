import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    width: 300,
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

export interface RisoDuploProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RisoDuplo: React.FC<RisoDuploProps> = ({
  handleSubmit,
  handleComplete,
}) => {
  const styles = useStyles();
  const [paperType, setPaperType] = useState("Newsprint");
  const [printColor, setPrintColor] = useState("Black & White");

  return (
    <Container>
      <Grid container className={styles.padding}>
        <FormControl className={styles.select}>
          <InputLabel id="paperType">Paper Type</InputLabel>
          <Select
            className={styles.select}
            labelId="paperType"
            id="paperType"
            value={paperType}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setPaperType(e.target.value as string);
            }}
          >
            <MenuItem value="Newsprint" className={styles.select}>
              Newsprint
            </MenuItem>
            <MenuItem value="Substance 16" className={styles.select}>
              Substance 16
            </MenuItem>
            <MenuItem value="Substance 20" className={styles.select}>
              Substance 20
            </MenuItem>
            <MenuItem value="Substance 24" className={styles.select}>
              Substance 24
            </MenuItem>
            <MenuItem value="Vellum Board" className={styles.select}>
              Vellum Board
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container className={styles.padding}>
        <FormControl className={styles.select}>
          <InputLabel id="printColor">Print Color</InputLabel>
          <Select
            className={styles.select}
            labelId="printColor"
            id="printColor"
            value={printColor}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setPrintColor(e.target.value as string);
            }}
          >
            <MenuItem value="Black & White" className={styles.select}>
              Black & White
            </MenuItem>
            <MenuItem value="Colored" className={styles.select}>
              Colored
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
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          Additional
        </Typography>
      </Grid>
      <Grid container>
        <TextField
          className={styles.root}
          type="number"
          variant="outlined"
          label="Cutting - # of Reams"
          margin="dense"
          inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
        />
      </Grid>
      <Grid container>
        <TextField
          className={styles.root}
          type="number"
          variant="outlined"
          label="Padding - # of Reams"
          margin="dense"
          inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
        />
      </Grid>
      <Grid container>
        <TextField
          className={styles.root}
          type="number"
          variant="outlined"
          label="Soring - # of Reams"
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
        <Grid item sm={12} className={styles.btn}>
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

export default RisoDuplo;

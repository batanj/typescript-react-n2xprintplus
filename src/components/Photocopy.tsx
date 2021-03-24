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

import Service from "../types/Service";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
  button: {
    borderRadius: 0,
  },
  select: {
    fontSize: 14,
  },
  padding: {
    paddingTop: 20,
  },
  textField: {
    marginTop: 20,
    width: 200,
    fontSize: 14,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0,
      },
    },
  },
});

type PhotocopyDetails = {
  serviceName: string;
  paperSize: string;
  printColor: string;
};

export interface PhotocopyProps {
  handleSubmit: (
    service: Service,
    details: PhotocopyDetails,
    copies: number
  ) => void;

  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  service: Service;
}

const Photocopy: React.FC<PhotocopyProps> = ({
  handleComplete,
  handleSubmit,
  service,
}) => {
  const styles = useStyles();
  const [copies, setCopies] = useState(1);
  const [paperSize, setPaperSize] = useState("Short");
  const [printColor, setPrintColor] = useState("Black & White");

  return (
    <Container>
      <Grid container>
        <FormControl className={styles.root}>
          <InputLabel id="paperSize">Paper Size</InputLabel>
          <Select
            className={styles.select}
            labelId="paperSize"
            id="paperSize"
            value={paperSize}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setPaperSize(e.target.value as string);
            }}
          >
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
      <Grid container className={styles.padding}>
        <FormControl className={styles.root}>
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
          className={styles.textField}
          type="number"
          variant="outlined"
          label="# of Copies"
          margin="dense"
          inputProps={{ min: "0", step: "1", style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
            setCopies(e.target.value as number)
          }
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
            onClick={() =>
              handleSubmit(
                service,
                {
                  serviceName: service.name as string,
                  paperSize: paperSize,
                  printColor: printColor,
                },
                copies
              )
            }
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

export default Photocopy;

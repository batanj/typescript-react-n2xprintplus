import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
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
  button: {
    borderRadius: 0,
  },
});

export interface StickerProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Sticker: React.FC<StickerProps> = ({ handleSubmit, handleComplete }) => {
  const styles = useStyles();

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

export default Sticker;

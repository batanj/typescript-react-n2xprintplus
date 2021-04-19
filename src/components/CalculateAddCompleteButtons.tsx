import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";

export interface CalculateAddCompleteButtonsProps {
  calculateOrder: (event: React.MouseEvent<HTMLButtonElement>) => void;
  addOrder: (event: React.MouseEvent<HTMLButtonElement>) => void;
  completeOrder: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles({
  btn: {
    borderRadius: 0,
  },
  btnWithMargin: {
    borderRadius: 0,
    marginLeft: 20,
  },
});

const CalculateAddCompleteButtons: React.FC<CalculateAddCompleteButtonsProps> = ({
  calculateOrder,
  addOrder,
  completeOrder,
}) => {
  const styles = useStyles();
  return (
    <>
      <Button
        variant="contained"
        onClick={calculateOrder}
        className={styles.btn}
      >
        Calculate Order
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={addOrder}
        className={styles.btnWithMargin}
      >
        Add Job
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={completeOrder}
        className={styles.btnWithMargin}
      >
        Complete Order
      </Button>
    </>
  );
};

export default CalculateAddCompleteButtons;

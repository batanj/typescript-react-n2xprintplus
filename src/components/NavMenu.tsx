import React, { useContext } from "react";
import AccountBoxSharp from "@material-ui/icons/AccountBoxSharp";
import ScheduleSharp from "@material-ui/icons/ScheduleSharp";
import MeetingRoomSharp from "@material-ui/icons/MeetingRoomSharp";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import auth from "../services/authService";
import UserContext from "../contexts/UserContext";
import { RouteComponentProps } from "react-router-dom";

const useStyles = makeStyles({
  btn: { borderRadius: 0, border: "1px solid lightgray" },
  btnRed: { borderColor: "red" },
  btnMargin: { marginLeft: 10 },
});

const NavMenu: React.FC<RouteComponentProps> = ({ ...props }) => {
  const user = useContext(UserContext);
  const { history } = props;
  const styles = useStyles();

  return (
    <>
      <Button
        startIcon={<AccountBoxSharp />}
        variant="contained"
        className={styles.btn}
        onClick={() => history.push("/")}
      >
        Profile
      </Button>
      <Button
        startIcon={<ScheduleSharp />}
        variant="contained"
        className={[styles.btn, styles.btnMargin].join(" ")}
        onClick={() => history.push("/view-time-card")}
      >
        View Time Card
      </Button>
      <Button
        startIcon={<MeetingRoomSharp />}
        variant="contained"
        color="secondary"
        className={[styles.btn, styles.btnMargin, styles.btnRed].join(" ")}
        onClick={() => auth.logoutUser(user)}
      >
        Logout
      </Button>
    </>
  );
};

export default NavMenu;

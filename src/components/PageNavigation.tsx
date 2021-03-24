import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Clock from "../components/Clock";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import UserContext from "../contexts/UserContext";
import NavMenu from "./NavMenu";

import { ampm, getTime } from "../utils/date";

import Logo from "../logo_small.svg";
import { RouteComponentProps } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& > *": {},
  },
  btn: {
    padding: 5,
    cursor: "none",
    boxShadow: "none",
    borderRadius: 0,
    marginRight: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  logo: { width: 200 },
  spacer: { flexGrow: 1 },
});

const PageNavigation: React.FC<RouteComponentProps> = ({ ...props }) => {
  const styles = useStyles();
  const user = useContext(UserContext);

  return (
    <AppBar color="default">
      <Toolbar>
        <Link>
          <img src={Logo} className={styles.logo} alt="N2X Print Plus Logo" />
        </Link>
        <div style={{ paddingLeft: 50 }}>
          <Button variant="contained" className={styles.btn}>
            TIME IN: {getTime(user.timeIn!)} {ampm(user.timeIn!)}
          </Button>
          <Button variant="contained" className={styles.btn}>
            Desk Time: <Clock />
          </Button>
        </div>
        <div className={styles.spacer} />
        <NavMenu {...props} />
      </Toolbar>
    </AppBar>
  );
};

export default PageNavigation;

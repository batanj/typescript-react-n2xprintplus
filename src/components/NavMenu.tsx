import React, { useContext, useState } from "react";
import {
  IconButton,
  Divider,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  FaceSharp,
  PersonAddSharp,
  SearchSharp,
  AccountBoxSharp,
  ScheduleSharp,
  MeetingRoomSharp,
} from "@material-ui/icons";
import auth from "../services/authService";
import UserContext from "../contexts/UserContext";
import { RouteComponentProps } from "react-router-dom";

const NavMenu: React.FC<RouteComponentProps> = ({ ...props }) => {
  const user = useContext(UserContext);
  const { history } = props;
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const menuItems = [
    {
      label: "Add New Customer",
      onClick: () => {
        history.push("/customers/add-new");
        setAnchorEl(null);
      },
      icon: <PersonAddSharp />,
    },
    {
      label: "Search Existing Customer",
      onClick: () => {
        history.push("/customers/search");
        setAnchorEl(null);
      },
      icon: <SearchSharp />,
    },
    {
      label: "divider",
    },
    {
      label: "Profile",
      onClick: () => {
        history.push("/");
        setAnchorEl(null);
      },
      icon: <AccountBoxSharp />,
    },
    {
      label: "View Time Card",
      onClick: () => {
        history.push("/view-time-card");
        setAnchorEl(null);
      },
      icon: <ScheduleSharp />,
    },
    {
      label: "Logout",
      onClick: () => {
        auth.logoutUser(user);
        setAnchorEl(null);
      },
      icon: <MeetingRoomSharp />,
    },
  ];

  return (
    <>
      <IconButton
        edge="end"
        aria-label="profile"
        color="inherit"
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <FaceSharp style={{ color: "Green", fontSize: 24 }} />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      />
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {menuItems.map(({ onClick = () => {}, label, icon = null }) =>
          label === "divider" ? (
            <Divider key={label} />
          ) : (
            <MenuItem style={{ fontSize: 14 }} onClick={onClick} key={label}>
              <ListItemIcon>{icon}</ListItemIcon>
              <Box marginLeft={-4}>{label}</Box>
            </MenuItem>
          )
        )}
      </Menu>
    </>
  );
};

export default NavMenu;

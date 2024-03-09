import React from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Paper,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Collapse,
} from "@mui/material";
import MeetingRoomSharpIcon from "@mui/icons-material/MeetingRoomSharp";
import { Link, useNavigate } from "react-router-dom";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import AppsIcon from '@mui/icons-material/Apps';
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
interface HeaderProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileOpen, handleDrawerToggle }) => {
  let storedLoginStatus = localStorage.getItem("isLoggedIn") || "false";

  console.log("1234", storedLoginStatus);
  const history = useNavigate();
  // menu drawer
  const drawer = (
    <List onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ListItem sx={{ padding: 0 }} >
        {/* Below will be change in future*/}
        {/* <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          Conference
        </Typography> */}
      </ListItem>
      {/* <Collapse> */}
      <ListItem button component={Link} to="/" >
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about"sx={{ paddingTop: '8px', paddingBottom: '8px' }}>
        <ListItemText primary="Meeting" />
      </ListItem>
      <ListItem button component={Link} to="/contact"sx={{ paddingTop: '8px', paddingBottom: '8px' }}>
        <ListItemText primary="Contact" />
      </ListItem>
      {/* </Collapse> */}
    </List>
  );
  
  function abc(e: any) {
    history("/login");
    console.log(e);
  }
  function abc2() {
    storedLoginStatus = "false";

    // Update the value in localStorage
    localStorage.setItem("isLoggedIn", "false");

    // Redirect to the login page
    history("/login");
  }
  return (
    <Box>
      <AppBar sx={{ bgcolor: "primary" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {storedLoginStatus === "true" && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, "& .MuiSvgIcon-root": { fontSize: "2rem" } }}
              onClick={handleDrawerToggle}
            >
              <AppsIcon />
            </IconButton>
          )}
          <Box component="nav">
            <Box component="nav">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                <Paper
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                  style={{height: '100vh',overflow: 'auto'}}
                >
                  {drawer}
                </Paper>
              </Drawer>
            </Box>
          </Box>
          {storedLoginStatus !== "true" && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3rem" } }}
              onClick={abc}
            >
              <PersonAddAlt1Icon />
            </IconButton>
          )}
          {storedLoginStatus === "true" && (
            <Tooltip title="Logout" arrow>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ "& .MuiSvgIcon-root": { fontSize: "2rem" } }}
                onClick={abc2}
              >
                <LogoutTwoToneIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

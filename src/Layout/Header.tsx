// Header.jsx
import React from 'react';
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Paper, List, ListItem, ListItemText } from '@mui/material';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import { Link, useNavigate } from 'react-router-dom';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
interface HeaderProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileOpen, handleDrawerToggle }) => {
  let storedLoginStatus = localStorage.getItem('isLoggedIn') || 'false';

  console.log("1234",storedLoginStatus)
  const history = useNavigate();
  // menu drawer
  const drawer = (
    <List onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <ListItem button component={Link} to="/">
        <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }}>
          <MeetingRoomSharpIcon />
          Conference
        </Typography>
      </ListItem>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about">
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/contact">
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );
  function abc(e: any) {
    history('/login');
    console.log(e)
  }
  function abc2() {
    // Update the storedLoginStatus variable
    storedLoginStatus = 'false';
  
    // Update the value in localStorage
    localStorage.setItem('isLoggedIn', 'false');
  
    // Redirect to the login page
    history('/login');
  }
  return (
    <Box>
      <AppBar sx={{ bgcolor: 'lightblue' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {storedLoginStatus==='true'&&
          <IconButton
            color='inherit'
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, '& .MuiSvgIcon-root': { fontSize: '3rem' } }}
            onClick={handleDrawerToggle}
          >
            <MenuOpenSharpIcon />
          </IconButton>
  }
          <Box component="nav">
            <Box component="nav">
              <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                <Paper sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
                  {drawer}
                </Paper>
              </Drawer>
            </Box>
          </Box>
          {storedLoginStatus!=='true'&&
          <IconButton
            color='inherit'
            aria-label="open drawer"
            edge="start"
            sx={{ '& .MuiSvgIcon-root': { fontSize: '3rem' } }}
            onClick={abc}
          >
            <PersonAddAlt1Icon />
          </IconButton>
}
          {storedLoginStatus==='true'&&
          <IconButton
            color='inherit'
            aria-label="open drawer"
            edge="start"
            sx={{ '& .MuiSvgIcon-root': { fontSize: '3rem' } }}
            onClick={abc2}
          >
            <ExitToAppIcon />
          </IconButton>
}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

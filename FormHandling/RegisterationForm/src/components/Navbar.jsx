import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material'
import { NavLink } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Form
            </Typography>
            <Button component={NavLink} to='/'>
              Home
            </Button>
            <Button component={NavLink} to='/contact'>
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar

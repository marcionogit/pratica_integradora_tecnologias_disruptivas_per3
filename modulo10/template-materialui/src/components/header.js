import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          
          {/* Alterei a cor de fundo e centralizei o texto*/}
          <Toolbar style={{textAlign:"center", backgroundColor:"green"}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>

            {/* Alterei texto */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  >
            P&R 3 - Pratica Integradora Tecnologias Disruptivas
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;
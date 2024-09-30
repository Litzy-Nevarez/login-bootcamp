import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

import './../styles/appBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    // Función de cierre de sesión
    const handleLogout = () => {
        console.log("Cerraste Sesión");
        navigate('/');
    };

    return(
        <AppBar position='static' style={{ margin: 0, padding: 0 }}>
            <Toolbar className="sidebar">
                <Typography variant='h6' sx={{flexgrow:1}}>Menu</Typography>
                <Button color='inherints' onClick={() => navigate('/dashboard')}>Inicio</Button>
                <Button color='inherints' onClick={() => navigate('/profile')}>Perfil</Button>
                <Button color='inherints' onClick={() => navigate('/amigos')}>Amigos</Button>
                <Button color='inherints' onClick={() => navigate('/mensajes')}>Mensajes</Button>
                <Button color='inherints' onClick={() => navigate('/settings')}>Configuración</Button>
                <Button color='inherints' onClick={handleLogout}>Salir</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;

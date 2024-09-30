import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

const NavBar = () => {
    const navigate = useNavigate();

    // Función de cierre de sesión
    const handleLogout = () => {
        console.log("Cerraste Sesión");
        navigate('/');
    };

    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' sx={{flexgrow:1}}>Menu</Typography>
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

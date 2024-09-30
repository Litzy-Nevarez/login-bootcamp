import React from 'react'
import NavBar from './appBar';
import { Outlet } from 'react-router-dom'; //Marcador para renderizar algunos componentes

const Layout = () => {

    return(
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Layout

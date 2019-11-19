import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Drone Tracking</Navbar.Brand>
        </Navbar>
    );
};

export default Header;
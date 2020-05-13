import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './AvailityWhiteLogo.png';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    background: linear-gradient(90deg,#ff8d00 24%,#fce404 100%);
`;

export function Header() {
    return(
        <HeaderStyle>
        <Navbar>
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src={logo}
                    width="140"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
        </Navbar>
    </HeaderStyle>)
}
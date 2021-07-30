import { Nav, Navbar, Container } from "react-bootstrap";
import { useState } from 'react';
import { useHistory } from "react-router";

export default function Navigation() {

    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>Tonespoon</Navbar.Brand>
                <Nav className="navigation-bar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/addalbum">Add Album</Nav.Link>
                    <Nav.Link href='/albums'>Albums</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
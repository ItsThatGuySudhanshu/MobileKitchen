import { Container } from "react-bootstrap";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {loginWithRedirect, logout, isAuthenticated, useAuth0} from '@auth0/auth0-react';
import { Button } from '@mui/material';


function MenuBar () {
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

    const buttonStyle = {
        width: '90px',
        height: '45px'
    };

    const renderAuthButton = () => {
        if (isAuthenticated) {
            return (
            <Nav.Link eventKey={2} to='/'>
                <Button style={buttonStyle} onClick={() => logout()} variant="contained">
                    Logout
                </Button>
            </Nav.Link>
            )
        } else {
            return (
                <Nav.Link eventKey={2} to='/'>
                    <Button style={buttonStyle} onClick={() => loginWithRedirect()} variant="contained">
                        Login
                    </Button>
                </Nav.Link>
                )
        }
    }
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Munch Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/recipes">Recipes</Nav.Link>
              <Nav.Link href="/inventory">Inventory</Nav.Link>
              <Nav.Link href="/fridge">Refrigerated</Nav.Link>
            </Nav>
            <Nav>
                {renderAuthButton()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>);

}

export default MenuBar;
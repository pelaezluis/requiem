import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png'
import '../assets/css/Header.css'

export const Header = () => {
    return (
        <header>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary ">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img className='nav-logo' src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='header-text'>Inicio</Nav.Link>
                            <Nav.Link href="#action2" className='header-text'>Iniciar sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
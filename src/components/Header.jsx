// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from '../assets/img/logo.png'
import home_1 from '../assets/img/home_1.JPG'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            {/* <Navbar expand="lg" className="bg-body-tertiary h-nav">
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
            </Navbar> */}
            <div className='h-nav'>
                <div className='h-button p-2'>
                    <Link href="#action1" className='header-text'>Inicio</Link>
                    <Link href="#action2" className='header-text'>Iniciar sesión</Link>
                </div>
                <img className="header-img" src={home_1} alt="home_1" />
            </div>
        </header>
    )
}
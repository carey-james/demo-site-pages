import Container from 'react-bootstrap/Container';
import Nav from	'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaHouse} from 'react-icons/fa6';
import '../../sass/NavBar.scss';

function NavBar() {
	return (
		<Navbar expand='lg' className='bg-body-tertiary' data-bs-theme="dark">
			<Container>
			<Navbar.Brand href='/demo-site-pages/'>SQS</Navbar.Brand>
	        <Navbar.Toggle aria-controls='basic-navbar-nav' />
	        <Navbar.Collapse id='basic-navbar-nav'>
	          	<Nav className='me-auto'>
	            	<Nav.Link href='/demo-site-pages/'>{FaHouse}</Nav.Link>
	            	<Nav.Link href='/demo-site-pages/faq'>FAQ</Nav.Link>
	            	<Nav.Link href='/demo-site-pages/about'>About</Nav.Link>
	            	<Nav.Link href='/demo-site-pages/glossary'>Glossary</Nav.Link>
	            	<Nav.Link href='/demo-site-pages/wizard'>Wizard</Nav.Link>
	          	</Nav>
	        </Navbar.Collapse>
	    	</Container>
		</Navbar>
  	);
}

export default NavBar;		
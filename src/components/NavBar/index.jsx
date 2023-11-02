import Container from 'react-bootstrap/Container';
import Nav from	'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaHouse} from 'react-icons/fa6';
import logo from '../../images/demo-sqs-logo-short.png';

function NavBar() {
	return (
		<Navbar expand='lg' className='bg-body-tertiary'>
			<Container>
			<Navbar.Brand href='/demo-site-pages/'>
				<img
					alt='SQS'
					src={logo}
					height='50'
					className='d-inline-block align-top'
				/>{' '}
			</Navbar.Brand>
	        <Navbar.Toggle aria-controls='basic-navbar-nav' />
	        <Navbar.Collapse id='basic-navbar-nav'>
	          	<Nav className='me-auto'>
	            	<Nav.Link href='/demo-site-pages/'>{FaHouse}</Nav.Link>
	            	<Nav.Link href='/demo-site-pages/about'>About</Nav.Link>
	            	<Nav.Link href='/demo-site-pages/faq'>FAQ</Nav.Link>
	            	<NavDropdown title='Resources' id='basic-nav-dropdown'>
	            		<NavDropdown.Item href='/demo-site-pages/glossary'>Glossary</NavDropdown.Item>
	            		<NavDropdown.Item href='/demo-site-pages/about-name-matching'>About Name Matching</NavDropdown.Item>
	            		<NavDropdown.Item href='/demo-site-pages/current-data-availability'>Current Data Availability</NavDropdown.Item>
	            	</NavDropdown>
	            	<Nav.Link href='/demo-site-pages/wizard'>Wizard</Nav.Link>
	          	</Nav>
	        </Navbar.Collapse>
	    	</Container>
		</Navbar>
  	);
}

export default NavBar;		
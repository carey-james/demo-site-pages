import React from 'react';
import logo from '../images/demo-sqs-logo.png';
import wizard_icon from '../images/wizard-icon.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
	return (
		<div className='App'>
	      	<header className='Main-splash'>
	        	<div>
	          		<img src={logo} alt='The potential SQS logo' style={{width:'200px', height:'200px'}} />
	        	</div>
	        	<h1>
	          		Statistical Query Service
	        	</h1>
	        	<p>
	          		This is a site to demonstrate what a potential SQS site may look like. 
	        	</p>
	        	<hr />
	        	<Row>
	        		<Col>
	        			<Card>
	        				<Card.Body>
	        					<Card.Title>About</Card.Title>
	        					<Card.Text>
	        						Learn about the SQS!
	        					</Card.Text>
	        					<Button variant='primary' href='/demo-site-pages/about'>About</Button>
	        				</Card.Body>
	        			</Card>
	        		</Col>
	        		<Col>
	        			<Card>
	        				<Card.Body>
	        					<Card.Title>FAQ</Card.Title>
	        					<Card.Text>
	        						Get your questions answered!
	        					</Card.Text>
	        					<Button variant='primary' href='/demo-site-pages/faq'>FAQ</Button>
	        				</Card.Body>
	        			</Card>
	        		</Col>
	        		<Col>
	        			<Card>
	        				<Card.Body>
	        					<Card.Title>Wizard</Card.Title>
	        					<Card.Text>
	        						Meet our data formatting Wizard!
	        					</Card.Text>
	        					<Button variant='primary' href='/demo-site-pages/wizard'>Wizard</Button>
	        				</Card.Body>
	        			</Card>
	        		</Col>
	        	</Row>
	      	</header>
	    </div>
  	);
}

export default Home;
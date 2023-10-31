import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';

const FAQ = () => {
	return (
		<div classname='App'>
			<Stack gap={3}>
				<h1 classname='App-header'>
					Here are some Frequently Asked Questions about the SQS!
				</h1>
				<Accordion defaultActiveKey='0'>
					<Accordion.Item eventKey='0'>
					<Accordion.Header><h3>About the SQS</h3></Accordion.Header>
					<Accordion.Body>
						<h5>What is the SQS?</h5>
						<p>The Statistical Query Service is an opportunity for researchers 
						at schools, public organizations, and other policy hubs to easily 
						and safely add aggregated employment and earnings data from the 
						federal government to the data they already have. If you are at such 
						an organization, you can securely send Georgetown, the intermediary 
						for the project, your data, which will then be formatted and sent on 
						to the Internal Revenue Service, who will match it to their 
						earnings data and send summary information back through Georgetown
						to you. Georgetown helps make this process possible for researchers 
						as well as providing resources to make it easier for you to understand 
						the results you receive.</p>
						<h5>Who are targeted users of the SQS?</h5>
						<p>Anyone at a not-for-profit or government entity who is evaluating an 
						educational,  social services, or similar program. The SQS is NOT for 
						for-profit businesses or universities, marketing purposes, surveillance, 
						law enforcement, or individual use.</p>
						<h5>How can the SQS help me?</h5>
						<p>The SQS can fill in critical gaps in your knowledge about your data 
						subjects by providing federal earnings and employment data to augment 
						your existing data. This data has the potential to help with program 
						planning and evaluation of policies by tracking results of educational 
						initiatives and like projects down the road. Because the data is federal, 
						it will include individuals who may be missed in any state specific data you 
						have access to, such as individuals who have moved across state lines.</p>
						<h5>What phases of the SQS are planned?</h5>
						<p>The SQS will initially serve as a link between the IRS and a select group 
						of pilot organizations who request data matches under Georgetown and Yale’s 
						coordination. Georgetown’s Massive Data Institute will serve as the temporary 
						intermediary during this phase. In the future, the system will be opened to 
						include other federal data from different organizations, be accessible to a 
						wider range of users, and may be run by an independent intermediary for 
						long-term service, such as the National Secure Data Service.</p>
						<h5>Who are your partners?</h5>
						<p>The SQS is a collaboration between Georgetown University’s Massive Data 
						Institute, Yale University’s Tobin Center for Economic Policy, the Internal 
						Revenue Service, and you!</p>
					</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Stack>
		</div>
	);
};

export default FAQ;
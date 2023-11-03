import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import FAQAboutTheSQS from '../content/faq_about_the_sqs.mdx';
import FAQTypesOfDataAvailable from '../content/faq_types_of_data_available.mdx';
import FAQUsingTheSQS from '../content/faq_using_the_sqs.mdx';

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
						<FAQAboutTheSQS />
					</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
					<Accordion.Header><h3>Types of Data Available</h3></Accordion.Header>
					<Accordion.Body>
						<FAQTypesOfDataAvailable />
					</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
					<Accordion.Header><h3>Using the SQS</h3></Accordion.Header>
					<Accordion.Body>
						<FAQUsingTheSQS />
					</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Stack>
		</div>
	);
};

export default FAQ;
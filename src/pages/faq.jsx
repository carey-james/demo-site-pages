import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import FAQAboutTheSQS from '../content/faq_about_the_sqs.mdx';

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
				</Accordion>
			</Stack>
		</div>
	);
};

export default FAQ;
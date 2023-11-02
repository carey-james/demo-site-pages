import React from 'react';
import ReactDom from 'react-dom';
import Example from './example.mdx';

const About = () => {
	return (
		<div className='App'>
			<h1 className='App-header'>
				About the SQS
			</h1>
			<p>
				The SQS is a joint project between Georgetown University and Yale University to allow easier access to federal earnings data by researchers.
			</p>
			<Example />
		</div>

	);
};

export default About;
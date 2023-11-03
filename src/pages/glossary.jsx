import React from 'react';
import GlossaryText from '../content/glossary.mdx';

const Glossary = () => {
	return (
		<div classname='App'>
			<h1 classname='App-header'>
				Here is a glossary of common data and legal terms you may come accross working with the SQS!
			</h1>
			<GlossaryText />
		</div>
	);
};

export default Glossary
import React from 'react';
import Stack from 'react-bootstrap/Stack';
import WizardUploader from '../components/WizardUploader';
import WizardText from '../content/wizard.mdx';

const Wizard = () => {
	return (
		<div>
		<Stack gap={3}>
			<h1 classname='App-header'>
				Format Wizard
			</h1>
			{WizardUploader()}
			<WizardText />
		</Stack>
		</div>
	);
};

export default Wizard;
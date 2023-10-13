import React from 'react';
import Alert from '../components/Alert'
import UploadContainer from '../containers/UploadForm'

const Wizard = () => {
	return (
		<div classname='App'>
			<h1 className='App-header'>
				Here is the file prep Wizard!
			</h1>
			<div>
				<>
					<UploadContainer />
				</>
			</div>
		</div>
	);
};

export default Wizard
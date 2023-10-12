import React from 'react';
import {connect} from 'react-redux'
import Upload from '../components/UploadForm'

const UploadButton = (props) => {
	const text = props.text || 'Upload file';

	const handleSelection = (event) => {
		if (!event || !event.target.files) return;
		props.setFile(event.target.files, []);
	}

	return (
		<>
			<input id='uploadFileInput' type='file' onChange={handleSelection} />
			<button 
				id='uploadFileButton'
				type='button'
				onClick{() => document.getElementById('uploadFileInput').click()}
			>
				{text}
			</button>
		</>
	);
}
import React from 'react';
import {connect} from 'react-redux';
import Upload from '../components/UploadForm.jsx';
import checkFileErrors from '../components/CheckFileErrors.jsx';

export function mapStateToProps(state) {
	const {uploading, file, errors} = state.app.upload || {uploading: false, file: null, errors: []};
	const filingPeriod = state.app.filingPeriod || null;
	const parseErrors = state.app.parseErrors || {transmittalSheetErrors: [], larErrors: [],};
	const errorCount = parseErrors.transmittalSheetErrors.length + parseErrors.larErrors.length;

	return {uploading, file, filingPeriod, errors, parseErrors: {...parseErrors, errorCount}};
}

function setAndParseFile(file) {
	return (dispatch, getState) => {
		const handleErrors = fileErrors => {
			dispatch('SELECT_FILE', file, fileErrors);
		}
		checkFileErrors(file, handleErrors);
	};
}

export function mapDispatchToProps(dispatch) {
	return {
		setFile: (acceptedFiles, rejectedFiles) => {
			if (!acceptedFiles || !rejectedFiles) return;
			let file = acceptedFiles[0] || rejectedFiles[0];
			if (!file) return;
			dispatch(setAndParseFile(file));
		}
	}
}


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
				onClick={() => document.getElementById('uploadFileInput').click()}
			>
				{text}
			</button>
		</>
	);
}

export const ConnectedUploadButton = connect(mapStateToProps, mapDispatchToProps)(UploadButton);
export default connect(mapStateToProps, mapDispatchToProps)(Upload)

import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Alert from './Alert'

let timeout = null;

export const UploadErrors = ({errors, parsed, parseErrors}) => {

	if (!parsed && !parseErrors && !errors.length) return null;

	if (errors.length)
		return (
			<span>
				<Alert type='error' heading='Invalid File'>
					{errors.length > 1 ? (
						<ul>
							{errors.map((error, i) => {
								return <li key={i}>{error}</li>
							})}
						</ul>
					) : (
						<p>{errors[0]}</p>
					)}
				</Alert>
			</span>
		);

	if (!errors.length && !parseErrors) return (
		<span>
			<Alert
				type='success'
				heading='Congradulations! No Formatting Errors.'
			>
				<p> Your file meets the formatting requirements for SQS!</p>
			</Alert>
		</span>
	);

	return null;
}

export default class Upload extends Component {
	updateDropArea(props, fileStatus) {
		let content = (
			<p> Drag your SQS file into this area or click the box to upload a file to test. </p> 
		);
		if (props.file && 'name' in props.file) {
			const statusText = 
				props.errors.length !== 0 ? 'Sorry, we cannot check '
				: fileStatus === 'error' ? 'Errors found in '
				: 'No errors found in '
		}
		return <div classname='dropzone-content'>{content}</div>
	}
	
	componentDidUpdate() {
		if (!document.activeElement) return;
		if (document.activeElement.classList[0] === 'dropzone') document.activeElement.blur();
	}	

	render() {
		const setFile = this.props.code > 1 ? null : this.props.setFile;
		const dropzoneDisabled = this.props.code > 1 ? 'dropzone-disabled' : '';
		const {parsed, errorCount} = this.props.parseErrors;
		const uploadErrorCount = this.props.errors.length;
		const fileStatus = !parsed && !uploadErrorCount > 0 ? '' : errorCount + uploadErrorCount > 0 ? 'error' : 'success';

		return (
			<div>
				<div className={'UploadForm ${fileStatus}'}>
					<UploadErrors errors={this.props.errors} parsed={parsed} parseErrors={errorCount} />
					<div className='container-upload'>
						<Dropzone disablePreview={true} onDrop={setFile} multiple={false}>
							{({getRootProps, getInputProps}) => {
								return (
									<div {...getRootProps({className: 'dropzone ${dropzoneDisabled'})}>
										<input {...getInputProps()}/>
										{this.updateDropArea(this.props, fileStatus)}
									</div>
								);
							}}
						</Dropzone>
					</div>
				</div>
			</div>
		);
	}
}

Upload.propTypes = {
	setFile: PropTypes.func,
	uploading: PropTypes.bool,
	file: PropTypes.object,
	code: PropTypes.number,
	errors: PropTypes.array,
	filingPeriod: PropTypes.string
}

Upload.defaultProps = {
	file: {
		name: 'No file chosen'
	},
	errors: []
}
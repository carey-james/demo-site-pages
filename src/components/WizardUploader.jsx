import React, {useState} from 'react';
import ReactFileReader from 'react-file-reader';
import Alert from 'react-bootstrap/Alert';
import WizardFormatTests from '../wizard_tests/WizardFormatTests';

export default function WizardUploader() {
	const [file, setFile] = useState();
	const [fileData, setFileData] = useState({
		fileName: '',
		fileErrors: []
	});
	
	function handleChange(event) {
		setFile(event.target.files[0]);
	};

	function handleSubmit(event) {
		event.preventDefault();
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = () => {
			setFileData({
				fileName: file.name,
				fileErrors: WizardFormatTests(reader.result)
			});
		};
	};


	function FormatErrors() {
		var errorItems = 'Waiting for file...';
		if (fileData.fileErrors.length > 0){
			errorItems = fileData.fileErrors?.map((fileError) =>
				<Alert varient={fileError.varient}>
					<Alert.Heading>{fileError.title}</Alert.Heading>
					<p>
						{fileError.text}
					</p>
				</Alert>
			);
		}
		return errorItems;
	}


	return (
		<div class="d-grid gap-3">
			<form onSubmit={handleSubmit}>
				<h1>React File Upload</h1>
				<input type='file' onChange={handleChange}/>
				<button type='submit'>Process</button>
			</form>
			<FormatErrors />
		</div>
	);
}
import React, {useState} from 'react';
import ReactFileReader from 'react-file-reader';
import Alert from 'react-bootstrap/Alert';
import 'react-dropzone-uploader/dist/styles.css';
import WizardFormatTests from '../wizard_tests/WizardFormatTests';

export default function WizardUploader() {
	const [file, setFile] = useState();
	const [fileData, setFileData] = useState({
		fileName: '',
		fileContent: '',
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
				fileContent: reader.result
			});
		};

		setFileData({
			fileErrors: WizardFormatTests(fileData.fileContent)
		});

	};


	function FormatErrors(fileErrorsArray) {
		const errorItems = fileErrorsArray?.map((fileError) =>
			<Alert varient={fileError.varient}>
				<Alert.Heading>{fileError.title}</Alert.Heading>
				<p>
					{fileError.text}
				</p>
			</Alert>
		);

		return "AHDHFL:KJS:LKFDJS";
	}


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>React File Upload</h1>
				<input type='file' onChange={handleChange}/>
				<button type='submit'>Process</button>
			</form>
			<FormatErrors />
		</div>
	);
}
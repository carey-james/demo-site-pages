import React, {useState} from 'react';
import ReactFileReader from 'react-file-reader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import WizardFormatTests from '../wizard_tests/WizardFormatTests';
import wizard_icon from '../images/wizard-icon.png';

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
			if (file.type != 'text/csv') {
				setFileData({
					fileName: file.name,
					fileErrors: [{variant:'danger', title:'Not a CSV!', text:'Please submit a CSV file.'}]
				});
			}
			else {
				setFileData({
					fileName: file.name,
					fileErrors: WizardFormatTests(reader.result)
				});
			}
		};
	};


	function FormatErrors() {
		var errorItems = 'The Wizard is waiting for a file...';
		if (fileData.fileErrors.length > 0){
			errorItems = fileData.fileErrors?.map((fileError) =>
				<Alert variant={fileError.variant}>
					<Alert.Heading>{fileError.title}</Alert.Heading>
					<hr />
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
			<Card>
				<Card.Body>
					<Row>
						<Col>
							<Form.Group onSubmit={handleSubmit}>
								<Form.Control type='file' accept='.csv' onChange={handleChange}/>
								<br />
								<Button variant='primary' type='submit' onClick={handleSubmit} style={{float:'right'}}>Process</Button>
							</Form.Group>
						</Col>
						<Col>
							<img src={wizard_icon} alt='A wizard.' style={{width:'200px', height:'200px', filter:'blur(0.5px)'}} />
						</Col>
					</Row>
					<hr />
					<FormatErrors />
				</Card.Body>
			</Card>
		</div>
	);
}
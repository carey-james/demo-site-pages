import Accordion from 'react-bootstrap/Accordion';

function CollapseBox(props) {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>props.header</Accordion.Header>
				<Accordion.Body>
					props.text
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
		);
}

export default CollapseBox;
export default function WizardFormatTests(fileContents) {
	const errors = [];

	if (errors.length === 0) {
		errors.push({varient:'success', title:'No Errors!', text:'Horray! No errors were found!'});
	}

	return errors;
}
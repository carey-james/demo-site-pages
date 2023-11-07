export default function WizardFormatTests(fileContents) {
	var errors = [];


	// Test for column headers
	if (!(fileContents.startsWith('Partner ID | Tax Year | Social Security Number | First Name | Middle Initial | Last Name | State | Zip Code'))) {
		errors.push({variant:'danger', title:'Missing Reserved Columns', text:'Please ensure the first eight (8) columns of your file match the following headers: Partner ID | Tax Year | Social Security Number | First Name | Middle Initial | Last Name | State | ZIP Code'});
	}

	// Test for more variable columns, to ensure there are by-groups
	if ([...fileContents.matchAll('|')].length < 9) {
		errors.push({variant:'warning', title:'Missing Group By Columns', text:'Your file does not have any "Group By" columns  after the Reserved Columns and will not return detailed match results from SQS.'});
	}

/***
	//Line-by-line tests
	const lines = fileContents.split('\n');

	//Test for same number of columns
	var col_errors = []
	for (let )
***/

	// If no formatting errors at this point, add the no formatting errors message 
	if (errors.length === 0) {
		errors.push({variant:'success', title:'No Formatting Errors!', text:'Horray! No formatting errors were found!'});
	}

	return errors;
}
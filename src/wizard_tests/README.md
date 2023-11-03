# Wizard Tests

To add tests to the Wizard, include them as Javascript files in this folder and edit ../components/WizardUploader.jsx to use them.


The Javascript files are expected to take the text contents of the uploaded file as input and return an array of the errors.

The errors should be objects in an array in the following format:

```js
[{
	variant: 'info', // 'success', 'info', 'warning', or 'danger'
	title: 'Missing SSN',
	text: 'You are missing an SSN collumn.'
}]
```
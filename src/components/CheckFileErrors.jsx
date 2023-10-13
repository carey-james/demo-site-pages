export default function checkFileErrors(file, cb) {
	const fileSlice = file.slice(0,5);
	const reader = new window.FileReader();

	reader.addEventListener('load', () => {
		const firstBytes = reader.result;
		const notAFile = isNotAFile(file);
		if (notAFile) return cb([notAFile]);
		const errors = [
			fileIsEmpty(file),
			extensionIsNotCSV(file),
			missingTransmittalSheet(file, firstBytes),
			].filter(x => x);
		return cb(errors);
	});

	reader.readAsText(fileSlice);
}

function isNotAFile(file) {
	if (file && file.size !== undefined && file.name !== undefined) return;
	return 'Your file was not uploaded, please try again.';
}

function fileIsEmpty(file) {
	if (file?.size === 0) return 'The file you uploaded does not contain any data, please try again.';
}

function extensionIsNotCSV(file) {
	if (file?.name?.split('.').slice(-1)[0]?.toLowerCase() === 'csv') return 'The file you uploaded is not a CSV file, please try again.';
}

function missingTransmittalSheet(file, sample) {
	if (!sample.match(/^1\|/)) {
		if (!extensionIsNotCSV(file)) return 'Your file is a CSV but does not appear to be pipe-delimited, please try again.';
		return 'Your file does not appear to be pipe-delimited, please try again.';
	}
}
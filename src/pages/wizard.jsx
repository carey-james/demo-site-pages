import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import Alert from '../components/Alert';
import UploadContainer from '../containers/UploadForm';
import WizardUploader from '../components/WizardUploader';

/***
const middleware = [thunkMiddleware]

const store = createStore(
	combineReducers({
		//app: appReducer
	}),
	applyMiddleware(...middleware)
);
***/

const Wizard = () => {
	return (
		<div>
			{WizardUploader()}
		</div>
/***		
		<Provider store={store}>
			<div classname='App'>
				<h1 className='App-header'>
					Here is the file prep Wizard!
				</h1>
				<div>
					<>
						<UploadContainer />
					</>
				</div>
			</div>
		</Provider>
***/
	);
};

export default Wizard;
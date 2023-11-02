import React from 'react';
import Alert from '../components/Alert';
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
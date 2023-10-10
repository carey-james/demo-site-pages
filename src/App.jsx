import logo from './images/demo-sqs-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} alt="The potential SQS logo" style={{width:'200px', height:'200px'}} />
        </div>
        <h1>
          Statistical Query Service
        </h1>
        <p>
          This is a site to demonstrate what a potential SQS site may look like. 
        </p>
      </header>
    </div>
  );
}

export default App;

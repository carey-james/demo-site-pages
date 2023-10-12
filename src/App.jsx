import React from 'react';
import logo from './images/demo-sqs-logo.png';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import FAQ from './pages/faq';
import Glossary from './pages/glossary';
import Wizard from './pages/wizard';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/glossary' element={<Glossary />} />
                <Route path='/wizard' element={<Wizard />} />
            </Routes>
        </Router> 
    );
}

export default App;

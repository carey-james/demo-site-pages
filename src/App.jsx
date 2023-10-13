import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
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
                <Route exact path='/demo-site-pages/' exact element={<Home />} />
                <Route path='/demo-site-pages/about' element={<About />} />
                <Route path='/demo-site-pages/faq' element={<FAQ />} />
                <Route path='/demo-site-pages/glossary' element={<Glossary />} />
                <Route path='/demo-site-pages/wizard' element={<Wizard />} />
            </Routes>
        </Router> 
    );
}

export default App;

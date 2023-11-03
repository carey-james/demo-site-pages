import React from 'react';
import './sass/App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import FAQ from './pages/faq';
import Glossary from './pages/glossary';
import AboutNameMatching from './pages/about-name-matching';
import CurrentDataAvailability from './pages/current-data-availability';
import Wizard from './pages/wizard';

function App() {
    return (
        <Router>
            <Navbar />
            <Container fluid='sm' className='App-body'>
                <Row>
                    <Col>
                    <Routes>
                        <Route path='/demo-site-pages/' element={<Home />} />
                        <Route path='/demo-site-pages/about' element={<About />} />
                        <Route path='/demo-site-pages/faq' element={<FAQ />} />
                        <Route path='/demo-site-pages/glossary' element={<Glossary />} />
                        <Route path='/demo-site-pages/about-name-matching' element={<AboutNameMatching />} />
                        <Route path='/demo-site-pages/current-data-availability' element={<CurrentDataAvailability />} />
                        <Route path='/demo-site-pages/wizard' element={<Wizard />} />
                    </Routes>
                    </Col>
                </Row>
            </Container>
        </Router> 
    );
}

export default App;
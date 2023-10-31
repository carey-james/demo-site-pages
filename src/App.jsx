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
import Wizard from './pages/wizard';

function App() {
    return (
        <Router>
            <Navbar />
            <Container classname='App-body'>
                <Row>
                    <Col>
                    <Routes>
                        <Route exact path='/demo-site-pages/' element={<Home />} />
                        <Route path='/demo-site-pages/about' element={<About />} />
                        <Route path='/demo-site-pages/faq' element={<FAQ />} />
                        <Route path='/demo-site-pages/glossary' element={<Glossary />} />
                        <Route path='/demo-site-pages/wizard' element={<Wizard />} />
                    </Routes>
                    </Col>
                </Row>
            </Container>
        </Router> 
    );
}

export default App;

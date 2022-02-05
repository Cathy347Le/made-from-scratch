import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import HomeContent from './Pages/HomeContent';
import Story from './Pages/Story';
import Faq from './Pages/Faq';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <Container>
          <div className="main-content py-5">
            <Route path="/" exact component={HomeContent} />
            <Route path="/our-story" component={Story} />
            <Route path="/faq" component={Faq} />
          </div>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

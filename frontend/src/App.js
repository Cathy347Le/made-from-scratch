import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Container>
        <div className="main-content"></div>
        <h1>Goodnight Moon</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

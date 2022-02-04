import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1>Body Text</h1>
      </Container>
    </div>
  );
}

export default App;

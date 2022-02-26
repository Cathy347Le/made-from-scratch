import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import HomeContent from './Pages/HomeContent';
import CartPage from './Pages/CartPage';
import StoryPage from './Pages/StoryPage';
import FaqPage from './Pages/FaqPage';
import ProductPage from './Pages/ProductPage';
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
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/our-story" component={StoryPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/product/:id" component={ProductPage} />
          </div>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

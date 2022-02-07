import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../Components/Product';

const HomeContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //WITH ERROR HANDLING
    // const fetchProducts = async () => {
    //   const res = await axios.get('/api/products'); //or destructure do and const {data} since res return an object
    //   setIsLoaded(true);
    //   setProducts(res.data);
    // };

    const fetchProducts = async () => {
      const res = await axios
        .get('/api/products')
        .then((data) => {
          setIsLoaded(true);
          setProducts(data.data);
        })
        .catch((err) => {
          setIsLoaded(true);
          console.log(err);
        });
    };

    fetchProducts();
  }, []);
  return (
    <div className="products-list">
      <Row>
        <h2>HEAVEN IN ONE BITE</h2>
        {products.map((product) => {
          return (
            <Col
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="product-item"
            >
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomeContent;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product';

const HomeContent = () => {
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

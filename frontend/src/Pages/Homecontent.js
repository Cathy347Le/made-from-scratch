import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';

const Homecontent = () => {
  return (
    <div className="products-list">
      <Row>
        <h2>HEAVEN IN ONE BITE</h2>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} className="product-item">
              <h3>{product.name}</h3>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Homecontent;

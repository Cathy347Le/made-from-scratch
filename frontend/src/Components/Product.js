import React from 'react';
import Card from 'react-bootstrap/Card';
import ProductRating from './ProductRating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: 2,
  // });

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <ProductRating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">
          {/* <div className="my-3">${product.price}</div> */}
          <div className="my-3">{product.priceString}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

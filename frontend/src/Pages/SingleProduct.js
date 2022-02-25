import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import ProductRating from '../Components/ProductRating';

const SingleProduct = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios
        .get(`/api/products/${params.id}`)
        .then((data) => {
          setIsLoaded(true);
          setProduct(data.data);
        })
        .catch((err) => {
          setIsLoaded(true);
          console.log(err);
        });
    };

    fetchProduct();
  }, [params.id]);

  return isLoaded ? (
    <div className="single-product-page">
      <Link className="btn btn-outline-primary my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <ProductRating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.priceString}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className="product-cart">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>{product.priceString}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn btn-block btn-primary"
                type="button"
                style={{ width: '100%' }}
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SingleProduct;

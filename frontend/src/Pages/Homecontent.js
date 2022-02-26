import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../Components/Product';
import ErrorMessage from '../Components/ErrorMessage';
import { listProducts } from '../Actions/productActions';

const HomeContent = () => {
  const dispatch = useDispatch();

  //Capture the part of the state you want, which is productList
  const productList = useSelector((state) => state.productList);
  //Object destructuring to grab the properties you want
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  //Temporary test Redux dev tools and not get an error for products.map
  //Check Redux dev tools, actions should be displayed and see the products in PRODUCT_LIST_SUCCESS
  // const products = [];

  return (
    <div className="products-list">
      <h2>HEAVEN IN ONE BITE</h2>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : (
        <Row>
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
      )}
    </div>
  );
};

export default HomeContent;
